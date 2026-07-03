<script setup lang="ts">
import { onMounted, ref } from "vue";
import polyline from "@mapbox/polyline";

const props = defineProps<{ polyline: string | null }>();
const { $L } = useNuxtApp();

const mapEl = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!mapEl.value || !props.polyline) return;

  const coords = polyline
    .decode(props.polyline)
    .map(([lat, lng]) => [lat, lng]);

  const map = $L
    .map(mapEl.value, {
      zoomControl: false,
      attributionControl: false,
    })
    .setView(coords[0], 13);

  $L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
  $L.polyline(coords, { color: "#f97316", weight: 4 }).addTo(map);
});
</script>

<template>
  <div ref="mapEl" class="w-full h-full"></div>
</template>

<style>
.leaflet-container {
  height: 100% !important;
  width: 100% !important;
}
</style>
