<script lang="ts" setup>
defineProps<{
  info: {
    description: string;
    img: string;
  };
}>();
</script>

<template>
  <div class="about-me">
    <div class="about-me__container">
      <h3>About Me</h3>
      <div class="about-me__container--text" v-html="info.description"></div>
      <img :src="useAssets(info.img)" :alt="info.img" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/utils.scss";

.about-me {
  @include start-from(desktop) {
    min-height: calc(100dvh - 77px);
  }

  min-height: calc(100dvh - 50px);

  &__container {
    width: 80%;
    height: 80%;
    margin: 50px auto;
    background-color: rgb(var(--neutral));

    h3 {
      color: rgb(var(--secondary));
    }

    &--text {
      color: rgb(var(--secondary));
      .link {
        color: red;
      }
    }

    img {
      width: 40px;
    }
  }
}
</style>

<style lang="scss">
.about-me__container--text {
  .link {
    color: rgb(var(--secondary));
    font-weight: 600;
  }
}
</style>
