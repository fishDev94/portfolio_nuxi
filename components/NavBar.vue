<template>
  <nav>
    <Logo class="logo" />
    <HamMen :set-active-menu="setActiveMenu" :is-menu-active="isActive" />
    <ul class="menu-list" :class="`${isActive ? 'active' : ''}`">
      <li v-for="item in menu">{{ item }}</li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const menu = ["Home", "My Projects", "Experiences", "About Me"];

const isActive = ref(false);

function setActiveMenu(): void {
  isActive.value = !isActive.value;
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/utils";
nav {
  position: fixed;
  top: 0;
  z-index: 9;
  width: 100%;
  display: flex;
  background-color: rgb(var(--primary));
  padding-inline: 20px;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.205);

  @include start-from("generic-desktop") {
    height: 77px;
  }

  .logo {
    width: 30px;
    height: 30px;
  }

  .menu-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    position: absolute;
    text-align: center;
    top: 49px;
    left: 0;
    padding-block: 0;
    padding-inline: 20px;
    height: 0px;
    overflow: hidden;
    background-color: inherit;
    width: 100%;
    transition: all 0.35s;
    font-size: 1rem;
    opacity: 0;

    @include start-from("generic-desktop") {
      flex-direction: row;
      position: static;
      height: auto;
      padding: auto;
      width: auto;
      text-align: auto;
      gap: 26px;
      color: rgb(var(--neutral));
      letter-spacing: 0.8px;
      font-size: 0.9rem;
      opacity: 1;
    }

    &.active {
      height: 147px;
      padding-block: 20px;
      opacity: 1;
    }

    li {
      cursor: pointer;
      list-style: none;
      transition: all 0.35s;
      width: max-content;

      &:hover {
        color: white;
        transform: scale(1.05);
      }
    }
  }
}
</style>
