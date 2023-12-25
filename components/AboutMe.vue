<script lang="ts" setup>
defineProps<{
  info: {
    description: string;
    img: string;
    urls: { name: string; url: string }[];
  };
}>();
</script>

<template>
  <div class="about-me">
    <div class="about-me__container">
      <h2>About Me</h2>
      <div class="about-me__container--text" v-html="info.description"></div>
      <p>Urls:</p>
      <ul class="about-me__container--contacts">
        <li v-for="url in info.urls">
          <a :href="url.url">{{ url.name }}</a>
        </li>
      </ul>
      <img :src="useAssets(info.img)" :alt="info.img" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/utils.scss";

.about-me {
  @include start-from(desktop) {
    min-height: calc(100dvh - 77px - 70px);
  }

  min-height: calc(100dvh - 50px - 70px);
  display: flex;

  &__container {
    // max-width: 1440px;
    // min-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 40px;
    height: 80%;
    margin: 50px auto;
    background-color: rgb(var(--neutral));

    h2 {
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
