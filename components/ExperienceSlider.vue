<script setup lang="ts">
import { experiences } from "@/projects.json";

const scroller = ref();
const scrollLeft = ref(0);
const index = ref(0);

defineExpose({
  scroller,
});

onMounted(() => {
  if ("onscrollend" in window) {
    scroller.value.addEventListener("scrollend", updateScrollValue);
  } else {
    scroller.value.onscroll = () => {
      clearTimeout((window as any).scrollEndTimer);
      (window as any).scrollEndTimer = setTimeout(updateScrollValue, 100);
    };
  }
});

onBeforeRouteLeave(() => {
  scroller.value.removeEventListener("scrollend", updateScrollValue);
});

const updateScrollValue = () => {
  const card = scroller.value.children[0].clientWidth ?? 0;

  scrollLeft.value = scroller.value.scrollLeft;

  index.value = Math.floor(scrollLeft.value / card);
};

const handleClick = (direction: string) => {
  const card = scroller.value.children[0].clientWidth ?? 0;

  scroller.value.scroll({
    top: 0,
    left: scroller.value.scrollLeft + card,
  });

  if (direction === "next") {
    ++index.value;
    scroller.value.scroll({
      top: 0,
      left: scroller.value.scrollLeft + card,
    });
  } else {
    --index.value;
    scroller.value.scroll({
      top: 0,
      left: scroller.value.scrollLeft - card,
    });
  }
};

const isMaxScrollValue = computed(() => {
  return index.value === experiences.length - 1;
});

const isMinScrollValue = computed(() => {
  return index.value === 0;
});
</script>

<template>
  <section class="experiences--slider">
    <div class="experiences--slider__scroller" ref="scroller">
      <atomic-experience-card
        v-for="experience in experiences"
        :experience="experience"
      />
    </div>
    <div class="experiences--slider__navigation-container">
      <button
        :class="`${isMinScrollValue ? 'inactive' : ''}`"
        @click="handleClick('previous')"
        aria-label="arrow-left"
      >
        <i class="pi pi-angle-left"></i>
      </button>
      <button
        :class="`${isMaxScrollValue ? 'inactive' : ''}`"
        @click="handleClick('next')"
        aria-label="arrow-right"
      >
        <i class="pi pi-angle-right"></i>
      </button>
    </div>
    <div class="experiences--slider__pagination-container">
      <span
        v-for="(_, idx) in Array(experiences.length)"
        :class="isIndexVisible(idx, index)"
      ></span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/utils";
.experiences--slider {
  position: relative;

  @include start-from(generic-desktop) {
    box-shadow: 0 0 18px rgba(0, 0, 0, 0.298);
  }

  &__scroller {
    display: flex;
    overflow: scroll;
    height: max-content;
    scroll-snap-type: x mandatory;
    scroll-snap-stop: always;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
  }

  &__navigation-container {
    @include start-from(phone) {
      display: none;
    }

    position: absolute;
    pointer-events: none;
    z-index: 2;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    top: (225px + 20px);

    button {
      pointer-events: all;
      cursor: pointer;
      width: 40px;
      height: 40px;
      border-radius: 100%;
      border: 0;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.537);

      &.inactive {
        opacity: 0;
        pointer-events: none;
      }

      i {
        color: rgb(var(--secondary));
        font-size: 1.2rem;
      }
    }
  }

  &__pagination-container {
    position: absolute;
    display: flex;
    z-index: 2;
    gap: 6px;
    justify-content: center;
    align-items: center;
    top: 20vh;
    height: 40px;
    width: 100%;

    @include start-from(generic-desktop) {
      bottom: 0;
      top: auto;
      right: 25vw;
      width: auto;
    }

    span {
      display: block;
      height: 6px;
      width: 6px;
      background-color: rgba(0, 0, 0, 1);
      opacity: 0.2;
      border-radius: 100%;
      transition: all 0.25s;

      @include start-from(generic-desktop) {
        background-color: rgba(var(--neutral), 1);
        height: 7px;
        width: 7px;
      }

      &.active {
        opacity: 0.7;
        transform: scale(1.7);
      }
    }
  }
}
</style>
