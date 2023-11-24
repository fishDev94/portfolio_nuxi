<script lang="ts" setup>
defineProps<{
  title: string;
}>();
</script>

<template>
  <section class="youtube">
    <h2>{{ title }}</h2>
    <iframe
      src="https://www.youtube.com/embed/urfqORZL1u0?si=uPiTaBimtAHxAHYq"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/utils";

.youtube {
  display: flex;
  flex-direction: column;
  gap: 18px;
  h2 {
    width: 100%;
    text-align: left;
  }

  iframe {
    width: 100%;
    height: 50vh;

    @include start-from(generic-desktop) {
      height: 450px;
      width: 700px;
    }
  }
}
</style>
