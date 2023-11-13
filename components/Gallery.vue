<script setup lang="ts">
const cardsLength = new Array(4);
</script>

<template>
  <section class="gallery">
    <atomic-card
      v-for="(_, index) in cardsLength"
      :img-src="`https://picsum.photos/200/300?random=${index}`"
    />
  </section>
</template>

<style lang="scss" scoped>
.gallery {
  height: 600px;
  background-color: #574940;
  padding: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  overflow: hidden;
}
</style>
