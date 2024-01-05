<script lang="ts" setup>
defineProps<{
  info: {
    description: string;
    img: string;
    urls: { name: string; url: string }[];
  };
}>();

const aboutMeRef = ref();

defineExpose({
  aboutMeRef,
});
</script>

<template>
  <div class="about-me" ref="aboutMeRef">
    <div class="about-me__container">
      <h2>About Me</h2>
      <div class="about-me__container--main">
        <div class="about-me__container--text" v-html="info.description"></div>
        <div class="about-me__container--avatar">
          <div class="about-me__container__filter"></div>
          <nuxt-img :src="info.img" :alt="info.img" />
        </div>
      </div>
      <p>Urls:</p>
      <ul class="about-me__container--contacts">
        <li v-for="url in info.urls">
          <a :href="url.url">{{ url.name }}</a>
        </li>
      </ul>
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
  align-items: center;
  justify-content: center;
  scroll-margin-top: 50px;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    padding: 40px;
    height: 80%;
    margin: 50px auto;
    background-color: rgb(var(--neutral));

    @include start-from(desktop) {
      max-width: 1440px;
      margin: 70px;
      border-radius: 24px;
    }

    h2 {
      color: rgb(var(--secondary));
    }

    &--main {
      display: flex;
      flex-direction: column;
      gap: 32px;

      @include start-from(desktop) {
        flex-direction: row;
        justify-content: center;
      }
    }

    &--avatar {
      @include start-from(desktop) {
        margin: 0;
      }

      flex-basis: auto;
      width: 150px;
      margin: 0 auto;
      border-radius: 8px;
      overflow: hidden;

      img {
        width: 100%;
      }
    }

    &__filter {
      position: absolute;
      z-index: 3;
      background-color: rgb(var(--primary));
      opacity: 0.3;
      width: 150px;
      height: 150px;
      border-radius: 8px;
    }

    &--text {
      color: rgb(var(--secondary));

      @include start-from(desktop) {
        width: 70%;
      }
    }

    &--contacts {
      display: flex;
      gap: 12px;
      justify-content: space-evenly;

      a {
        color: rgb(var(--secondary));
        font-weight: 600;
        text-decoration: underline;
      }
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
