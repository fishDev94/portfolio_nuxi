<script setup lang="ts">
import type { Project } from "../types/projects";

defineProps<{
  dataCard: Project[];
}>();
</script>

<template>
  <section class="gallery">
    <atomic-carousel>
      <template #slides>
        <atomic-card
          v-for="item in dataCard"
          :title="item.title"
          :img="item.img"
        />
      </template>
    </atomic-carousel>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/utils";
.gallery {
  height: 600px;
  background-color: rgb(var(--primary));
  padding: 70px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  overflow: hidden;

  @include start-from(phone) {
    padding: 70px 0;
  }
}
</style>
