<template>
  <section class="video-section">
    <div class="video-section__overlay"></div>
    <div class="video-section__container">
      <atomic-youtube-video title="Alive (Official Music Video)" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.video-section {
  position: relative;
  background-color: rgba(var(--primary));
  width: 100%;
  height: 600px;

  &__overlay {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.3;
    width: 100%;
    height: 100%;
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
