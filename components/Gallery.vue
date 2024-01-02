<script setup lang="ts">
import { ref } from "vue";
import type { Project } from "../types/projects";

const galleryRef = ref();

defineProps<{
  title?: string;
  type?: string;
  dataCard: Project[];
}>();

defineExpose({
  galleryRef,
});
</script>

<template>
  <section class="gallery" ref="galleryRef">
    <div class="gallery-container">
      <h2 class="gallery__title">{{ title || "Gallery" }}</h2>
      <div class="gallery__wrapper">
        <atomic-carousel :length="dataCard.length">
          <template #slides>
            <atomic-card v-for="item in dataCard" :data="item" :type="type" />
          </template>
        </atomic-carousel>
      </div>
    </div>
    <div class="gallery--vignette"></div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/utils";
.gallery {
  position: relative;
  scroll-margin-top: 25vh;
  height: auto;
  background-color: rgb(var(--primary));
  padding: 70px 40px;

  @include start-from(phone) {
    scroll-margin-top: 0;
    padding: 70px 0;
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
    color: rgb(var(--neutral));
  }

  &--vignette {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.3;
    width: 100%;
    height: 100%;
    background: rgb(255, 255, 255);
    background: -moz-radial-gradient(
      circle,
      rgba(255, 255, 255, 0) 50%,
      rgba(0, 0, 0, 0.7161239495798319) 100%
    );
    background: -webkit-radial-gradient(
      circle,
      rgba(255, 255, 255, 0) 50%,
      rgba(0, 0, 0, 0.7161239495798319) 100%
    );
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0) 50%,
      rgba(0, 0, 0, 0.7161239495798319) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#000000",GradientType=1);
  }
}
</style>
