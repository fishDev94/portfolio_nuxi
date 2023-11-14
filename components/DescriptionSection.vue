<template>
  <section class="section-one" :style="`flex-direction: ${flexDirection}`">
    <div class="section-one__filter"></div>
    <img class="section-one__img" :src="useAssets(imgSrc)" :alt="imgSrc" />
    <div class="section-one__container">
      <h2>{{ title }}</h2>
      <p>
        {{ description }}
      </p>
      <AtomicButton v-if="btnText" class="section-one__btn" :title="btnText" />
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
  btnText?: string;
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

    @include start-from(phone) {
      width: auto;
      flex: 0 0 auto;
      height: 250px;
    }
  }

  &__container {
    display: flex;
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

    p {
      color: rgb(var(--primary));
      font-size: 1.1rem;
      letter-spacing: 0.8px;
    }
  }

  &__btn {
    align-self: flex-end;
  }
}
</style>
