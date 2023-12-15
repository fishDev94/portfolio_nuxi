<template>
  <section class="video-section">
    <div class="video-section__container">
      <atomic-youtube-video title="Alive (Official Music Video)" />
      <div class="video-section__container--text">
        <p>Text and Music by: Marco Guglielmino.</p>
        <p>Produced by: Artix Records, Marco Guglielmino.</p>
        <p>Piano: Fabrizio Averna.</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/utils.scss";
.video-section {
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 18px;
    padding: 20px;
    z-index: 1;
    height: 100%;

    &--text {
      width: 100%;
    }

    @include start-from(generic-desktop) {
      flex-direction: row;
      gap: 70px;
      max-width: 1440px;
      padding: 70px;
      margin: 0 auto;
    }
  }
}
</style>
