<script setup lang="ts">
import { ref } from "vue";
import type { Project } from "../types/projects";

const galleryRef = ref();

defineProps<{
  title?: string;
  dataCard: Project[];
}>();

defineExpose({
  galleryRef,
});
</script>

<template>
  <section class="gallery" ref="galleryRef">
    <div class="gallery-container">
      <h2 class="gallery__title">{{ title || "Test" }}</h2>
      <div class="gallery__wrapper">
        <atomic-carousel>
          <template #slides>
            <atomic-card v-for="item in dataCard" :data="item" />
          </template>
        </atomic-carousel>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/utils";
.gallery {
  height: auto;
  background-color: rgb(var(--primary));
  padding: 70px 40px;

  @include start-from(phone) {
    padding: 70px 20px;
  }

  &-container {
    display: flex;
    flex-direction: column;
    gap: 22px;
    max-width: 1400px;
    margin: 0 auto;
  }

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    overflow: hidden;
  }

  &__title {
    margin-left: 20px;
  }
}
</style>
