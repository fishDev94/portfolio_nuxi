import { StravaActivity, StravaTokenResponse } from "@@/types/strava";
// server/api/strava/activities.get.ts
import { defineEventHandler } from "h3";
import { Redis } from "@upstash/redis";

export default defineEventHandler(async () => {
  const { stravaClientID, stravaClientSecret, stravaRefreshToken } =
    useRuntimeConfig();

  const redis = Redis.fromEnv();

  let refreshToken = await redis.get("strava_refresh_token");

  if (!refreshToken) {
    refreshToken = stravaRefreshToken;
    await redis.set("strava_refresh_token", refreshToken);
  }

  const tokenRes = await $fetch<StravaTokenResponse>(
    "https://www.strava.com/oauth/token",
    {
      method: "POST",
      body: {
        client_id: stravaClientID,
        client_secret: stravaClientSecret,
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      },
    },
  );

  const accessToken = tokenRes.access_token;
  const newRefreshToken = tokenRes.refresh_token;

  if (newRefreshToken && newRefreshToken !== refreshToken) {
    await redis.set("strava_refresh_token", newRefreshToken);
  }

  const activities = await $fetch<StravaActivity[]>(
    "https://www.strava.com/api/v3/athlete/activities",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  return activities;
});
