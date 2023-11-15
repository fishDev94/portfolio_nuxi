<template>
  <NavBar @clickMenu="(e: string) => handleClickMenu(e)" />
  <Hero />
  <main>
    <description-section
      :title="info.softwareEngineer.title"
      :img-src="info.softwareEngineer.img"
      :description="info.softwareEngineer.description"
      type="illustration"
      position-img="right"
      :btn-text="info.softwareEngineer.btnText"
    />
    <gallery
      ref="projectsRef"
      :data-card="projects.projects"
      title="My Projects"
    />
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";

import info from "@/data.json";
import projects from "@/projects.json";

const projectsRef = ref();

defineExpose({
  projectsRef,
});

const handleClickMenu = (val: string) => {
  if (val === "Home") {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  if (val === "My Projects") {
    projectsRef.value.galleryRef?.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style lang="scss" scoped>
main {
  background-color: rgb(var(--neutral));
  height: 100vh;
}
</style>
