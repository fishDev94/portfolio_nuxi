<script setup lang="ts">
const section = ref();

defineExpose({
  section,
});
</script>

<template>
  <section class="experiences" ref="section">
    <h2>My Experiences</h2>
    <experience-slider />
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/utils.scss";
.experiences {
  padding-block: 70px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @include start-from(desktop) {
    scroll-margin-top: 50px;
  }

  h2 {
    @include start-from(phone) {
      font-size: 1.6rem;
    }

    color: rgb(var(--neutral));
    width: 1400px;
    padding-inline: 40px;
    margin: 0 auto;
    font-weight: 400;
    font-size: 2rem;
  }
}
</style>
