<template>
  <NavBar />
  <Hero />
  <main>
    <description-section
      title="Musician"
      :img-src="musicianImg"
      :description="musicianDescription"
      type="illustration"
      position-img="right"
    />
    <SectionTwo />
  </main>
</template>

<script setup lang="ts">
import musicianImg from "@/assets/sectionOne.png";

const musicianDescription =
  ref(`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eaque,
        modi cumque sit provident vero facere laborum reiciendis doloremque
        neque nemo et nobis quod iusto ratione eveniet, placeat dolorem ipsa!`);
</script>

<style lang="scss" scoped>
main {
  background-color: white;
  height: 100vh;
}
</style>
