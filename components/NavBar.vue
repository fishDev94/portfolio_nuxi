<template>
  <nav>
    <main-logo class="logo" @click="handleClick('home')" />
    <atomic-ham-men
      :set-active-menu="setActiveMenu"
      :is-menu-active="isActive"
    />
    <ul class="menu-list" :class="`${isActive ? 'active' : ''}`">
      <li v-for="item in menu" @click="handleClick(item.id)">
        {{ item.title }}
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { menu } from "@/projects.json";

const emit = defineEmits<{
  (e: "clickMenu", value: string): void;
}>();

const isActive = ref(false);

function setActiveMenu(): void {
  isActive.value = !isActive.value;
}

const handleClick = (value: string) => {
  isActive.value = false;
  emit("clickMenu", value);
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/utils";
nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100vw;
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
    color: rgb(var(--neutral));

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
      text-transform: capitalize;

      &:hover {
        color: white;
        transform: scale(1.05);
      }
    }
  }
}
</style>
