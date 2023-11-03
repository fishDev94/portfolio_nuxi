<template>
  <section class="hero">
    <div class="hero__main-content">
      <h1 class="hero__main-content__title">Marco Guglielmino</h1>
      <div class="hero__main-content__passions">
        <p
          class="hero__main-content__passions-passion"
          v-for="passion in passions"
        >
          {{ passion }}
        </p>
      </div>
      <button class="hero__main-content__discover-btn">Discover More</button>
    </div>
    <video class="hero__video" autoplay loop muted>
      <source :src="heroVideo" type="video/webm" />
    </video>
  </section>
</template>

<script setup lang="ts">
import heroVideo from "@/assets/hero-rendered-720p.webm";

const passions = ["Runner", "Software Engineer", "Musician"];
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 77px);
  margin-top: 77px;

  &__video {
    filter: blur(15px);
    transform: scale(1.08);
    position: fixed;
    top: 0;
    z-index: -1;
    height: calc(100vh - 77px);
    margin-top: 77px;
    width: 100%;
    object-fit: cover;
  }

  &__main-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    z-index: 1;

    &__title {
      display: flex;
      font-size: 50px;
      font-weight: 800;
      text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.452);
    }

    &__passions {
      display: flex;
      justify-content: space-evenly;
      letter-spacing: 2px;
    }

    &__discover-btn {
      padding: 20px;
      border: none;
      border-radius: 4px;
      flex: 0 0 auto;
      width: 200px;
      align-self: center;
      margin-top: 14px;
      background-color: #574940;
      font-weight: 800;
      font-size: 0.85rem;
      box-shadow: 0 0 12px 4px rgba(255, 255, 255, 0.082);
      cursor: pointer;
      transition: all 0.35s;

      &:hover {
        background-color: #776a62;
      }
    }
  }
}
</style>
