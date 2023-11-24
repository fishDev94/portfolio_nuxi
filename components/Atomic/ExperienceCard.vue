<template>
  <div class="card">
    <div class="card_main">
      <h2>{{ experience.jobTitle }}</h2>

      <p>
        <span>{{ experience.from }}</span> -
        <span>{{ experience.to }}</span>
      </p>
    </div>
    <div class="card_description">
      <p>{{ experience.description }}</p>
      <div v-if="experience.projects" class="projects">
        <h4>Projects:</h4>
        <ul class="projects-list">
          <li v-for="project in experience.projects">
            <a :href="project.url" target="__blank">{{ project.title }}</a>
          </li>
        </ul>
      </div>
      <div>
        <h4>Tools:</h4>
        <ul class="card_description--tool">
          <li v-for="tool in experience.tools">{{ tool }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Experience } from "@/types/experience";

defineProps<{
  experience: Experience;
}>();
</script>

<style lang="scss" scoped>
.card {
  flex: 0 0 auto;
  scroll-snap-align: start;
  width: 100vw;

  &_main {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    height: 25vh;

    h2 {
      color: rgb(var(--primary));
    }

    p {
      display: flex;
      gap: 12px;
    }

    p,
    span {
      font-weight: 300;
      color: rgb(var(--primary-10));
    }
  }

  &_description {
    padding: 40px;
    background-color: rgb(var(--primary));
    min-height: calc(75vh - 50px);
    display: flex;
    flex-direction: column;
    gap: 18px;

    .projects-list {
      display: flex;
      gap: 12px;
      text-decoration: underline;
    }

    &--tool {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    h4 {
      font-weight: 900;
      font-family: Raleway, Arial, sans-serif;
      margin-bottom: 2px;
    }
  }
}
</style>
