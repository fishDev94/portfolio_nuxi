<script setup lang="ts">
import type { StravaActivity } from "@@/types/strava";

const props = defineProps<{ activity: StravaActivity }>();

const km = (props.activity.distance / 1000).toFixed(2);
const pace = props.activity.average_speed
  ? (1000 / props.activity.average_speed / 60).toFixed(2)
  : null;
const elev = props.activity.total_elevation_gain;
</script>

<template>
  <UCard
    class="activity-card w-[320px] h-[480px] rounded-xl overflow-hidden shadow-md flex flex-col"
    :ui="{ body: 'p-0' }"
  >
    <!-- MAPPA -->
    <div class="w-full h-[200px]">
      <ClientOnly>
        <StravaMap :polyline="activity.map.summary_polyline" />
      </ClientOnly>
    </div>

    <!-- CONTENUTO -->
    <div
      class="activity-card__content p-4 flex-1 flex flex-col justify-between"
    >
      <div class="flex justify-between items-center mb-3">
        <h2 class="text-lg font-semibold truncate">
          {{ activity.name }}
        </h2>
        <UBadge color="orange" size="xs">
          {{ activity.sport_type }}
        </UBadge>
      </div>

      <div class="grid grid-cols-3 gap-2 text-center mb-4">
        <div>
          <p class="text-base font-bold">{{ km }}</p>
          <p class="text-xs text-gray-500">km</p>
        </div>
        <div>
          <p class="text-base font-bold">{{ pace }} min/km</p>
          <p class="text-xs text-gray-500">ritmo</p>
        </div>
        <div>
          <p class="text-base font-bold">{{ elev }} m</p>
          <p class="text-xs text-gray-500">elevazione</p>
        </div>
      </div>

      <!-- QUI IL TUO GRAFICO VERO -->
      <ClientOnly>
        <StravaPaceChart :activity />
      </ClientOnly>
    </div>
  </UCard>
</template>

<style lang="scss" scoped>
.activity-card {
  background-color: rgb(255, 246, 236);
  border-radius: 12px;

  &__content {
    padding: 1rem;
  }
}
</style>
