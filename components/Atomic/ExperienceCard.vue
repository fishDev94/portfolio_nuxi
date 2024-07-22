<template>
  <div class="card">
    <div class="card_main">
      <h2 class="card_main--title">
        {{ experience.jobTitle }} <span>@{{ experience.where }}</span>
      </h2>

      <p>
        <span>{{ experience.from }}</span> -
        <span>{{ experience.to }}</span>
      </p>
    </div>
    <div class="card_description">
      <p>{{ experience.description }}</p>
      <div class="more-information">
        <div v-if="experience.projects" class="projects">
          <h3>Projects:</h3>
          <ul class="projects-list">
            <li v-for="project in experience.projects">
              <a :href="project.url" target="__blank">{{ project.title }}</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Tools:</h3>
          <ul class="card_description--tool">
            <li v-for="tool in experience.tools">{{ tool }}</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section-esagon">
      <pattern-esagon-one class="esagon-one" />
      <pattern-esagon-two class="esagon-two" />
    </div>
    <div class="section-background"></div>
    <div class="section-vignette"></div>
    <div class="section-vignette-two"></div>
  </div>
</template>

<script setup lang="ts">
import type { Experience } from "@/types/experience";

defineProps<{
  experience: Experience;
}>();
</script>

<style lang="scss" scoped>
@import "@/assets/styles/utils";
.card {
  position: relative;
  flex: 0 0 auto;
  scroll-snap-align: start;
  width: 100vw;
  background-color: rgb(var(--secondary));
  overflow: hidden;

  @include start-from(generic-desktop) {
    display: flex;
    height: 550px;
  }

  &_main {
    background-color: rgb(var(--neutral));
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    height: 25vh;

    @include start-from(generic-desktop) {
      height: 100%;
      width: 50vw;
    }

    &--title {
      color: rgb(var(--primary));
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4px;
      flex-wrap: wrap;
      padding: 0 20px;

      @include start-from(generic-desktop) {
        flex-direction: row;
        align-items: flex-end;
      }

      span {
        font-size: 1.15rem;
      }
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
    z-index: 1;
    padding: 40px;
    background-color: rgb(var(--secondary));
    min-height: calc(75vh - 50px - 70px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 18px;
    color: rgb(var(--neutral));

    @include start-from(generic-desktop) {
      height: 100%;
      min-height: auto;
      width: 50vw;
      max-width: 720px;
      justify-content: center;
    }

    a {
      color: rgb(var(--neutral));
    }

    .more-information {
      display: flex;
      flex-direction: column;
      gap: 18px;

      @include start-from(generic-desktop) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 28px;
      }

      .projects-list {
        display: flex;
        gap: 12px;
        text-decoration: underline;

        @include start-from(generic-desktop) {
          flex-direction: column;
          gap: 2px;
        }
      }

      .card_description--tool {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
    }

    h3 {
      font-weight: 900;
      font-family: Raleway, Arial, sans-serif;
      margin-bottom: 2px;
    }
  }

  .section-background {
    position: absolute;
    top: 0;
    z-index: 0;
    height: 100%;
    width: 50%;
    opacity: 0.008;
    pointer-events: none;
    box-shadow: 2px 2px 5px;
    background: #fff;
    filter: contrast(7);
    --mask: linear-gradient(red, #{rgba(#000, 0.45)});

    @include start-from(phone) {
      height: 25vh;
      width: 100%;
    }

    &::before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      background: radial-gradient(#000, transparent) 0 0/ 1.4em 1.4em space;
      -webkit-mask: var(--mask);
      mask: var(--mask);
      content: "";
    }
  }

  .section-esagon {
    pointer-events: none;
    position: absolute;
    top: 0;
    opacity: 0.86;
    width: 50%;
    height: 100%;

    @include start-from(phone) {
      position: absolute;
      opacity: 1;
      bottom: auto;
      top: 0;
      width: 100%;
      height: 25vh;
    }

    .esagon-one {
      position: absolute;
      pointer-events: none;
      opacity: 0.04;
      width: 50%;
      left: -100px;
      height: auto;
      fill: rgb(var(--primary));

      @include start-from(phone) {
        left: 0;
        top: 0px;
      }
    }

    .esagon-two {
      position: absolute;
      pointer-events: none;
      opacity: 0.04;
      width: 40%;
      right: 0;
      bottom: 0;
      height: auto;
      fill: rgb(var(--primary));
    }
  }

  .section-vignette {
    position: absolute;
    pointer-events: none;
    z-index: 1;
    left: 0;
    width: 50vw;
    height: 100%;
    opacity: 0.2;
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

    @include start-from(phone) {
      width: 100%;
      height: 25vh;
      bottom: auto;
      top: 0;
    }
  }

  .section-vignette-two {
    pointer-events: none;
    position: absolute;
    z-index: 1;
    right: 0;
    width: 50vw;
    height: 100%;
    opacity: 0.2;
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

    @include start-from(phone) {
      width: 100%;
      height: calc(75vh - 50px);
      bottom: auto;
      top: 25vh;
    }
  }
}
</style>
