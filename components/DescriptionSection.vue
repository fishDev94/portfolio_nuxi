<template>
  <section
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
      <AtomicButton
        v-if="btnText"
        class="section-description__btn"
        :title="btnText"
        :id="btnText"
        @click="(e: Event) => handleClick(e)"
      />
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

const emit = defineEmits<{
  (e: "buttonClick", value: string): void;
}>();

const flexDirection = computed(() => {
  let direction = "row";
  props.positionImg === "right" && (direction = "row-reverse");

  return direction;
});

const backgroundPosition = computed(() => {
  return props.positionImg === "right" ? "left: 0" : "right: 0; left: auto";
});

const handleClick = ({ target }: Event) => {
  const value = (target as HTMLButtonElement)!.id.toLocaleLowerCase();
  emit("buttonClick", value);
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
  }

  &__btn {
    align-self: flex-end;
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
