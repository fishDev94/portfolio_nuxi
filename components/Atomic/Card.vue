<script setup lang="ts">
import type { Project } from "@/types/projects";

defineProps<{
  data: Project;
  type?: string;
}>();
</script>

<template>
  <div :class="['card', type]">
    <!-- <img class="card__img" :src="useAssets(data.img)" alt="lorem" /> -->
    <nuxt-img
      class="card__img"
      :src="data.img"
      alt="Gallery Picture"
      format="webp"
    />
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
    width: 100%;
    border-radius: 0;
    height: 480px;
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

.card.photo {
  border-radius: 3px;
  width: 400px;
  position: relative;

  @include start-from(phone) {
    border-radius: 0;
    width: 100%;
    height: 75dvh;
  }
  .card {
    &__img {
      height: 100%;
    }

    &__description {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 18%;
      background-color: rgba(var(--neutral-black), 0.6);
      backdrop-filter: blur(2px);
      padding: 12px;

      &--title {
        h3 {
          color: rgb(var(--neutral));
        }
      }

      p {
        color: rgb(var(--neutral));
      }
    }
  }
}
</style>
