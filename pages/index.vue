<template>
  <NavBar @clickMenu="(e) => handleClick(e)" />
  <Hero :description-ref="descriptionRef" />
  <main>
    <description-section
      ref="descriptionRef"
      :title="info.softwareEngineer.title"
      :img-src="info.softwareEngineer.img"
      :description="info.softwareEngineer.description"
      type="illustration"
      position-img="right"
      :buttons="info.softwareEngineer.buttons"
      @button-click="(value) => handleClick(value)"
    />
    <gallery ref="projectsRef" :data-card="projects" title="My Projects" />
    <description-section
      :title="info.runner.title"
      :img-src="info.runner.img"
      :description="info.runner.description"
      type="illustration"
      position-img="left"
    />
    <gallery :data-card="runGallery" title="Gallery" type="photo" />
    <description-section
      :title="info.musician.title"
      :img-src="info.musician.img"
      :description="info.musician.description"
      :buttons="info.musician.buttons"
      type="illustration"
      position-img="right"
      @button-click="(_, button) => urlButtonClick(button!)"
    />
    <video-section />
    <experience-slider ref="experienceSliderRef" />
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
  console.log((arrowUp.value.$el.style.display = "block"));
});

onBeforeRouteLeave(() => {
  window.removeEventListener("scroll", showArrowUp);
});

const showArrowUp = () => {
  if (window.scrollY > 800) {
    arrowUp.value.$el.style.opacity = 1;
    arrowUp.value.$el.style.pointerEvents = "all";
  } else {
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
      experienceSliderRef.value.scroller?.scrollIntoView({
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
  background-color: rgb(var(--neutral));
  // height: 100vh;
}
</style>
