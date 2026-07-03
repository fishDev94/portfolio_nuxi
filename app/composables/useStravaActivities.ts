export const useStravaActivities = () => {
  const { data, pending, error } = useFetch("/api/activities", {
    onResponse({ response }) {
      console.log("Strava activities (from composable):", response._data);
    },
    onRequestError({ error }) {
      console.error("Request error:", error);
    },
    onResponseError({ response }) {
      console.error("Response error:", response);
    },
  });

  return { data, pending, error };
};
