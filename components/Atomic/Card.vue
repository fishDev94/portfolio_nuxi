<script setup lang="ts">
defineProps<{
  title: string;
  img: string;
}>();
</script>

<template>
  <div class="card">
    <img class="card__img" :src="useAssets(`projects/${img}`)" alt="lorem" />
    <div class="card__description">
      <h3>{{ title }}</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, rerum.
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
  width: 300px;
  height: 380px;
  background-color: rgb(var(--neutral));
  border-radius: 24px;
  overflow: hidden;

  @include start-from(phone) {
    width: 320px;
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
    justify-content: space-evenly;
    gap: 8px;
    height: 40%;

    h3 {
      color: rgb(var(--secondary));
    }

    p {
      color: rgb(var(--primary));
    }
  }
}
</style>
