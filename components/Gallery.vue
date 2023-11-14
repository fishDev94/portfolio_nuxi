<script setup lang="ts">
const cardsLength = new Array(10);
</script>

<template>
  <section class="gallery">
    <atomic-carousel>
      <template #slides>
        <atomic-card
          v-for="(_, index) in cardsLength"
          :img-src="`https://picsum.photos/200/300?random=${index}`"
        />
      </template>
    </atomic-carousel>
  </section>
</template>

<style lang="scss" scoped>
.gallery {
  height: 600px;
  background-color: rgb(var(--primary));
  padding: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  overflow: hidden;
}
</style>
