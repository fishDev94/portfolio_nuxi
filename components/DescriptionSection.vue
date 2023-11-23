<template>
  <section
    ref="sectionRef"
    :id="title"
    class="section-description"
    :style="`flex-direction: ${flexDirection}`"
  >
    <div class="section-description__filter"></div>
    <img
      class="section-description__img"
      :src="useAssets(imgSrc)"
      :alt="imgSrc"
    />
    <div class="section-description__container">
      <h2>{{ title }}</h2>
      <div
        class="section-description__container--description"
        v-html="description"
      ></div>
      <div class="section-description__container--button-container">
        <atomic-button
          v-if="buttons"
          v-for="button in buttons"
          class="section-description__container--button-container__btn"
          :id="button.title"
          @click="(e: Event) => handleClick(e, button)"
          >{{ button.title }}
          <i
            v-if="button.title === 'Youtube'"
            class="pi pi-youtube"
            style="transform: scale(2) translate(0, 0.8px); margin-left: 10px"
          />
          <svg
            v-else-if="button.title === 'Spotify'"
            clip-rule="evenodd"
            fill-rule="evenodd"
            version="1.1"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"
            />
          </svg>
        </atomic-button>
      </div>
    </div>
    <div class="section-esagon" :style="backgroundPosition">
      <pattern-esagon-one class="esagon-one" />
      <pattern-esagon-two class="esagon-two" />
    </div>
    <div class="section-background"></div>
    <div class="section-vignette" :style="backgroundPosition"></div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ButtonInfo } from "@/types/buttonInfo";
/** 
/ type: define the type of section
/ @illustration with image on left side and description on right side
/ @description with Title on left side and description on right side
/
/  positionImg: define the position of the img in the section
*/

const sectionRef = ref(null);

const props = defineProps<{
  title: string;
  description: string;
  imgSrc: string;
  buttons?: ButtonInfo[];
  type: "illustration" | "description";
  positionImg?: "left" | "right";
}>();

defineExpose({
  sectionRef,
});

const emit = defineEmits<{
  (e: "buttonClick", value: string, button?: ButtonInfo): void;
}>();

const flexDirection = computed(() => {
  let direction = "row";
  props.positionImg === "right" && (direction = "row-reverse");

  return direction;
});

const backgroundPosition = computed(() => {
  return props.positionImg === "right" ? "left: 0" : "right: 0; left: auto";
});

const handleClick = ({ target }: Event, button: ButtonInfo) => {
  const value = (target as HTMLButtonElement)!.id.toLocaleLowerCase();
  emit("buttonClick", value, button);
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/utils";
.section-description {
  position: relative;
  display: flex;
  height: 600px;
  background-color: rgb(240, 240, 240);

  @include start-from(phone) {
    flex-direction: column !important;
    height: calc(100vh - 50px);
  }

  &__filter {
    position: absolute;
    z-index: 2;
    background-color: rgb(var(--primary));
    opacity: 0.6;
    width: 50%;
    height: 100%;

    @include start-from(phone) {
      height: 250px;
      width: 100%;
    }
  }

  &__img {
    width: 50%;
    object-fit: cover;
    z-index: 2;

    @include start-from(phone) {
      width: auto;
      flex: 0 0 auto;
      height: 250px;
    }
  }

  &__container {
    display: flex;
    z-index: 2;
    flex-direction: column;
    gap: 16px;
    padding: 70px;
    justify-content: center;
    width: 50%;
    color: rgb(var(--primary));

    @include start-from(phone) {
      width: 100%;
      padding: 30px 50px;
      height: 100%;
    }

    h2 {
      font-size: 32px;
      color: rgb(var(--primary));
    }

    &--description {
      color: rgb(var(--primary));
      font-size: 1.1rem;
      letter-spacing: 0.8px;

      :deep(.link),
      :deep(strong) {
        color: rgb(var(--primary));
        font-weight: 900;
      }
    }

    &--button-container {
      display: flex;
      justify-content: flex-end;
      gap: 12px;

      &__btn {
        align-self: flex-end;
      }
    }
  }

  .section-background {
    position: absolute;
    top: 0;
    z-index: 0;
    height: 100%;
    width: 100%;
    opacity: 0.008;
    // height: 90vh;
    box-shadow: 2px 2px 5px;
    background: #fff;
    filter: contrast(7);
    --mask: linear-gradient(red, #{rgba(#000, 0.45)});

    &::before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: radial-gradient(#000, transparent) 0 0/ 1.4em 1.4em space;
      -webkit-mask: var(--mask);
      mask: var(--mask);
      content: "";
    }
  }

  .section-esagon {
    @include start-from(phone) {
      position: absolute;
      opacity: 1;
      bottom: 0;
      top: auto;
      width: 100%;
      height: 60%;
    }

    position: absolute;
    top: 0;
    opacity: 0.86;
    width: 50%;
    height: 100%;

    .esagon-one {
      @include start-from(phone) {
        left: 0;
        top: 0px;
      }

      position: absolute;
      opacity: 0.04;
      width: 50%;
      left: -100px;
      height: auto;
      fill: rgb(var(--primary));
    }

    .esagon-two {
      position: absolute;
      opacity: 0.04;
      width: 40%;
      right: 0;
      bottom: 0;
      height: auto;
      fill: rgb(var(--primary));
    }
  }

  .section-vignette {
    @include start-from(phone) {
      width: 100%;
      height: 60%;
      bottom: 0;
      top: auto;
    }

    position: absolute;
    z-index: 1;
    left: 0;
    width: 50%;
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
  }
}
</style>
