<template>
  <NavBar @clickMenu="(e) => handleClick(e)" />
  <Hero />
  <main>
    <description-section
      :title="info.softwareEngineer.title"
      :img-src="info.softwareEngineer.img"
      :description="info.softwareEngineer.description"
      type="illustration"
      position-img="right"
      :btn-text="info.softwareEngineer.btnText"
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
  </main>
</template>

<script setup lang="ts">
import info from "@/data.json";
import { projects, runGallery } from "@/projects.json";

const projectsRef = ref();

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
      console.log(val);
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
  height: 100vh;
}
</style>
