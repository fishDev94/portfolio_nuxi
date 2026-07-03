<script setup lang="ts">
import { useStravaActivities } from "~/composables/useStravaActivities";

const { data: activities } = useStravaActivities();
</script>

<template>
  <main class="hidden-page">
    <div class="hidden-cards flex flex-wrap justify-center gap-6 p-6">
      <StravaActivityCard
        v-for="a in activities"
        :key="a.id"
        :activity="a"
        class="flex-shrink-0"
      />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.hidden-page {
  padding: 40px;
}
.hidden-cards {
  gap: 12px;
}
</style>
