<script setup lang="ts">
import type { Project } from "@/types/projects";

defineProps<{
  data: Project;
}>();
</script>

<template>
  <div class="card">
    <img class="card__img" :src="useAssets(data.img)" alt="lorem" />
    <div class="card__description">
      <div class="card__description--title">
        <h3>{{ data.title }}</h3>
      </div>
      <p>
        {{ data.description }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/utils";
.card {
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  width: 360px;
  height: 420px;
  background-color: rgb(var(--neutral));
  border-radius: 24px;
  overflow: hidden;

  @include start-from(phone) {
    width: 85%;
    height: 450px;
  }

  &__img {
    width: 100%;
    height: 60%;
    object-fit: cover;
  }

  &__description {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
    height: 40%;

    &--title {
      h3 {
        color: rgb(var(--secondary));
      }
    }

    p {
      display: flex;
      align-items: flex-start;
      height: 100%;
      color: rgb(var(--primary));
    }
  }
}
</style>
