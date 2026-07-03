<script setup lang="ts">
const VueApexCharts = defineAsyncComponent(() => import("vue3-apexcharts"));

import type { StravaActivity } from "@@/types/strava";

const props = defineProps<{ activity: StravaActivity }>();

// Genero un ritmo fittizio basato sulla velocità media
const basePace = props.activity.average_speed
  ? 1000 / props.activity.average_speed / 60
  : 6;

const paceData = Array.from({ length: 10 }).map(() =>
  (basePace + (Math.random() - 0.5) * 0.3).toFixed(2),
);

const chartOptions = {
  chart: { type: "line", height: 200, toolbar: { show: false } },
  stroke: { curve: "smooth", width: 3 },
  xaxis: { categories: paceData.map((_, i) => i + 1) },
  colors: ["#f97316"],
  yaxis: { labels: { formatter: (v: number) => `${v} min/km` } },
};
</script>

<template>
  <ClientOnly>
    <VueApexCharts
      :options="chartOptions"
      :series="[{ name: 'Ritmo', data: paceData }]"
    />
  </ClientOnly>
</template>
