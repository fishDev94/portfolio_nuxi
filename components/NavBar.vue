<template>
  <nav>
    <Logo class="logo" />
    <ul class="menu-list">
      <li v-for="item in menu">{{ item }}</li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const menu = ["Home", "My Projects", "Experiences", "About Me"];
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-inline: 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9;
  height: 77px;
  background-color: #574940;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.205);

  .logo {
    width: 30px;
    height: 30px;
  }

  .menu-list {
    display: flex;
    gap: 26px;
    color: rgb(240, 240, 240);
    letter-spacing: 0.8px;
    font-size: 0.9rem;

    li {
      cursor: pointer;
      list-style: none;
      transition: all 0.35s;

      &:hover {
        color: white;
        transform: scale(1.05);
      }
    }
  }
}
</style>
