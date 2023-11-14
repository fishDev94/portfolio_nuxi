<template>
  <NavBar />
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
    <gallery :data-card="projects.projects" />
  </main>
</template>

<script setup lang="ts">
import info from "@/data.json";
import projects from "@/projects.json";
</script>

<style lang="scss" scoped>
main {
  background-color: rgb(var(--neutral));
  height: 100vh;
}
</style>
