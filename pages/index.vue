<template>
  <NavBar @clickMenu="(e) => handleClick(e)" />
  <Hero :description-ref="descriptionRef" />
  <main>
    <description-section
      ref="descriptionRef"
      :title="info.passions[0].title"
      :img-src="info.passions[0].img"
      :description="info.passions[0].description"
      type="illustration"
      position-img="right"
      :buttons="info.passions[0].buttons"
      @button-click="(value) => handleClick(value)"
    />
    <gallery ref="projectsRef" :data-card="projects" title="My Projects" />
    <description-section
      :title="info.passions[1].title"
      :img-src="info.passions[1].img"
      :description="info.passions[1].description"
      type="illustration"
      position-img="left"
    />
    <gallery :data-card="runGallery" title="Gallery" type="photo" />
    <description-section
      :title="info.passions[2].title"
      :img-src="info.passions[2].img"
      :description="info.passions[2].description"
      :buttons="info.passions[2].buttons"
      type="illustration"
      position-img="right"
      @button-click="(_, button) => urlButtonClick(button!)"
    />
    <section class="bg-section">
      <div class="bg-section__overlay"></div>
      <video-section />
      <experiences-section ref="experienceSliderRef" />
      <about-me :info="info.aboutMe" />
    </section>
  </main>
  <atomic-arrow-up ref="arrowUp" />
  <footer-section />
</template>

<script setup lang="ts">
import info from "@/data.json";
import { projects, runGallery } from "@/projects.json";
import type { ButtonInfo } from "~/types/buttonInfo";

useHead({
  title: "Marco Guglielmino",
  meta: [
    {
      name: "Marco Guglielmino",
      content: "Software Engineer - Runner - Musician",
    },
  ],
});

const projectsRef = ref();
const experienceSliderRef = ref();
const descriptionRef = ref();
const arrowUp = ref();

onMounted(() => {
  window.addEventListener("scroll", showArrowUp);
});

onBeforeRouteLeave(() => {
  window.removeEventListener("scroll", showArrowUp);
});

const showArrowUp = () => {
  if (window.scrollY > 800 && arrowUp.value.$el) {
    arrowUp.value.$el.style.opacity = 1;
    arrowUp.value.$el.style.pointerEvents = "all";
  } else if (arrowUp.value.$el) {
    arrowUp.value.$el.style.opacity = 0;
    arrowUp.value.$el.style.pointerEvents = "none";
  }
};

const urlButtonClick = (button: ButtonInfo) => {
  window.open(button.url, "__blank");
};

const handleClick = (val: string) => {
  switch (val) {
    case "home":
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      break;
    case "projects":
      projectsRef.value.galleryRef?.scrollIntoView({ behavior: "smooth" });
      break;
    case "experiences":
      experienceSliderRef.value.section?.scrollIntoView({
        behavior: "smooth",
      });
      break;
    case "about":
      console.log(val);
    default:
      break;
  }
};
</script>

<style lang="scss" scoped>
main {
  .bg-section {
    position: relative;
    background-color: rgba(var(--primary));
    overflow: hidden;
    box-sizing: border-box;

    &__overlay {
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
}
</style>
