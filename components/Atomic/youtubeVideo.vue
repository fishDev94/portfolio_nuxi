<script lang="ts" setup>
import LiteYouTubeEmbed from "vue-lite-youtube-embed";
import "vue-lite-youtube-embed/style.css";
defineProps<{
  title: string;
}>();
</script>

<template>
  <section class="youtube">
    <h3>{{ title }}</h3>
    <LiteYouTubeEmbed
      id="urfqORZL1u0"
      title="Marco Guglielmino - Alive (Official Video)"
    />
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/utils";

.youtube {
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;

  h3 {
    font-size: 1.3rem;
    width: 100%;
    text-align: left;
  }

  iframe {
    width: 100%;
    height: 30vh;

    @include start-from(generic-desktop) {
      height: 420px;
      width: 700px;
    }
  }
}
</style>
