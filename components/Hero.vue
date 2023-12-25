<script setup lang="ts">
import info from "@/data.json";
import heroVideo from "@/assets/hero-rendered-720p.webm";
import heroVideoMp4 from "@/assets/hero-rendered-720p.mp4";

const handleDiscoverBtnClick = () => {
  props.descriptionRef?.sectionRef.scrollIntoView({
    top: "50px",
    behavior: "smooth",
  });
};

const props = defineProps<{
  descriptionRef?: any;
}>();
</script>

<template>
  <section class="hero">
    <div class="hero__main-content">
      <h1 class="hero__main-content__title">Marco Guglielmino</h1>
      <div class="hero__main-content__passions">
        <p
          class="hero__main-content__passions-passion"
          v-for="passion in info.passions"
        >
          {{ passion.title }}
        </p>
      </div>
      <atomic-button
        class="hero__main-content__btn"
        title="Discover More"
        @click="handleDiscoverBtnClick"
        >Discover More <i class="pi pi-chevron-down"
      /></atomic-button>
    </div>
    <video
      class="hero__video"
      autoplay
      loop
      muted
      playsinline
      poster="@/assets/poster-video.jpg"
    >
      <source :src="heroVideo" type="video/webm" />
      <source :src="heroVideoMp4" type="video/mp4" />
    </video>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/utils";
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 50px);
  margin-top: 50px;
  padding-bottom: 50px;
  color: rgb(var(--neutral));

  @include start-from(generic-desktop) {
    height: calc(100vh - 77px);
    margin-top: 77px;
    padding-bottom: 77px;
  }

  &__video {
    filter: blur(15px);
    transform: scale(1.2);
    position: fixed;
    top: 0;
    z-index: -1;
    height: calc(100vh - 77px);
    margin-top: 77px;
    width: 100%;
    object-fit: cover;

    @include start-from(generic-desktop) {
      transform: scale(1.09);
    }
  }

  &__main-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    z-index: 1;

    @include start-from(phone) {
      gap: 2px;
    }

    &__title {
      display: flex;
      font-size: 50px;
      font-family: "Raleway", sans-serif;
      font-weight: 900;
      text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.452);
      text-align: center;
      line-height: 40px;
      margin-bottom: 14px;

      @include start-from(phone) {
        font-size: 32px;
        align-self: center;
        margin-bottom: 0;
        line-height: 40px;
      }
    }

    &__passions {
      display: flex;
      justify-content: space-evenly;
      letter-spacing: 2px;

      @include start-from(phone) {
        font-size: 12px;
        letter-spacing: 0.8px;
      }
    }

    &__btn {
      margin-top: 14px;
    }
  }
}
</style>
