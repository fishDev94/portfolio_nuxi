<template>
  <section class="video-section">
    <div class="video-section__container">
      <atomic-youtube-video title="Alive (Official Music Video)" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.video-section {
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    z-index: 1;
    height: 100%;
  }
}
</style>
