<template>
    <button class="btn">{{ title }}</button>
</template>

<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>

<style lang="scss" scoped>
@import "@/assets/styles/utils";

    .btn {
      font-family: "Raleway", sans-serif;
      padding: 20px;
      border: none;
      border-radius: 4px;
      flex: 0 0 auto;
      width: 200px;
      align-self: center;
      background-color: #574940;
      font-weight: 800;
      font-size: 0.85rem;
      box-shadow: 0 0 12px 4px rgba(255, 255, 255, 0.082);
      cursor: pointer;
      transition: all 0.35s;

      &:hover {
        background-color: #776a62;
      }

      @include start-from(phone) {
        width: 130px;
        padding: 16px;
        font-size: 0.7rem;
        font-weight: 700;
      }
    }
</style>