<script setup lang="ts">
import { experiences } from "@/projects.json";

const scroller = ref();
const scrollLeft = ref(0);
const index = ref(0);

onMounted(() => {
  scroller.value.addEventListener("scrollend", updateScrollValue);
});

const updateScrollValue = () => {
  const card = scroller.value.children[0].clientWidth ?? 0;

  scrollLeft.value = scroller.value.scrollLeft;

  index.value = Math.floor(scrollLeft.value / card);
};
</script>

<template>
  <section class="experiences">
    <div class="experiences-scroller" ref="scroller">
      <atomic-experience-card
        v-for="experience in experiences"
        :experience="experience"
      />
    </div>
    <div class="experiences__pagination-container">
      <span
        v-for="(_, idx) in Array(experiences.length)"
        :class="isIndexVisible(idx, index)"
      ></span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/utils";
.experiences {
  position: relative;

  &-scroller {
    display: flex;
    overflow: scroll;
    scroll-snap-type: x mandatory;
    scroll-snap-stop: always;
    -webkit-overflow-scrolling: touch;
  }

  &__pagination-container {
    position: absolute;
    display: flex;
    gap: 6px;
    justify-content: center;
    align-items: center;
    top: 20vh;
    height: 40px;
    width: 100%;

    @include start-from(generic-desktop) {
      display: none;
    }

    span {
      display: block;
      height: 6px;
      width: 6px;
      background-color: rgba(0, 0, 0, 1);
      opacity: 0.2;
      border-radius: 100%;
      transition: all 0.25s;

      &.active {
        opacity: 0.7;
        transform: scale(1.7);
      }
    }
  }
}
</style>
