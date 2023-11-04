<template>
  <section class="section-one" :style="`flex-direction: ${flexDirection}`">
    <img class="section-one__img" :src="imgSrc" alt="section-one-img" />
    <div class="section-one__container">
      <h2>{{ title }}</h2>
      <p>
        {{ description }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
/** 
/ type: define the type of section
/ @illustration with image on left side and description on right side
/ @description with Title on left side and description on right side
/
/  positionImg: define the position of the img in the section
*/

const props = defineProps<{
  title: string;
  description: string;
  imgSrc: string;
  type: "illustration" | "description";
  positionImg?: "left" | "right";
}>();

const flexDirection = computed(() => {
  let direction = "row";
  props.positionImg === "right" && (direction = "row-reverse");

  return direction;
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/utils";
.section-one {
  display: flex;
  height: 600px;
  background-color: rgb(240, 240, 240);

  @include start-from(phone) {
    flex-direction: column !important;
    height: auto;
  }

  &__img {
    width: 50%;

    @include start-from(phone) {
      width: auto;
    }
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
    justify-content: center;
    width: 50%;
    color: #574940;

    @include start-from(phone) {
      width: 100%;
    }

    h2 {
      font-size: 32px;
      color: #574940;
    }

    p {
      color: #574940;
      font-size: 1.1rem;
      letter-spacing: 0.8px;
    }
  }
}
</style>
