<template>
  <div class="carousel">
    <div class="carousel__scroller" ref="carousel">
      <slot name="slides"></slot>
    </div>
    <div class="carousel__navigation-container">
      <button
        :class="`${isMinScrollValue ? 'inactive' : ''}`"
        @click="handleClick('previous')"
      >
        <i class="pi pi-angle-left"></i>
      </button>
      <button
        :class="`${isMaxScrollValue ? 'inactive' : ''}`"
        @click="handleClick('next')"
      >
        <i class="pi pi-angle-right"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const carousel = ref(null);
const clientWidth = ref(1);
const scrollLeft = ref(0);
const scrollWidth = ref(0);

onMounted(() => {
  (carousel.value! as HTMLDivElement)?.addEventListener("scroll", (e) => {
    updateScrollValue(e);
  });
});

onBeforeRouteLeave(() => {
  (carousel.value! as HTMLDivElement)?.removeEventListener("scroll", (e) => {
    updateScrollValue(e);
  });
});

const handleClick = (direction: "previous" | "next") => {
  const carouselEl = carousel.value! as HTMLDivElement;
  const isPrev = direction === "previous";
  const cardWidth = carouselEl.children[0].getBoundingClientRect().width ?? 0;
  const scrollLeft = carouselEl.scrollLeft + (isPrev ? -cardWidth : cardWidth);

  carouselEl.scroll({ left: scrollLeft, top: 0 });
};

const updateScrollValue = (e: Event): void => {
  const targetScrollPosition = e.target as HTMLDivElement;

  clientWidth.value = targetScrollPosition.clientWidth;
  scrollLeft.value = targetScrollPosition.scrollLeft;
  scrollWidth.value = targetScrollPosition.scrollWidth;
};

const isMaxScrollValue = computed((): boolean => {
  const scrollDimension = scrollWidth.value - clientWidth.value;

  if (scrollDimension > scrollLeft.value) {
    return scrollDimension === Math.ceil(scrollLeft.value);
  } else if (scrollDimension < scrollLeft.value) {
    return scrollDimension === Math.floor(scrollLeft.value);
  } else if (scrollDimension === scrollLeft.value) {
    return true;
  } else {
    return false;
  }
});

const isMinScrollValue = computed((): boolean => {
  return scrollLeft.value === 0;
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/utils";
.carousel {
  position: relative;
  max-width: 1440px;
  margin: auto;
  overflow: hidden;

  &__scroller {
    margin: 0 20px;
    // max-width: 1440px;
    display: flex;
    gap: 24px;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }

    @include start-from(phone) {
      margin: auto;
    }
  }

  &__navigation-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // max-width: 100%;
    height: calc(100% - 20px);
    pointer-events: none;

    button {
      position: relative;
      border-radius: 100%;
      width: 40px;
      height: 40px;
      border: 0;
      cursor: pointer;
      pointer-events: all;

      @include start-from(phone) {
        display: none;
      }

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
}
</style>

<style lang="scss">
.card {
  scroll-snap-align: start;
}
</style>
