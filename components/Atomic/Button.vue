<template>
  <button class="btn-generic" aria-label="generic-button" role="button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/utils";

.btn-generic {
  font-family: "Raleway", sans-serif;
  padding: 20px;
  border: none;
  border-radius: 4px;
  flex: 0 0 auto;
  width: 200px;
  align-self: center;
  background-color: rgb(var(--primary));
  font-weight: 800;
  font-size: 0.85rem;
  box-shadow: 0 0 12px 4px rgba(var(--neutral), 0.082);
  cursor: pointer;
  transition: all 0.35s;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  box-shadow: inset 0 0 16px rgba(255, 255, 255, 0.066);

  :deep(svg) {
    height: 16px;
    transform: scale(1.4);
    margin-left: 5px;
    fill: rgba(var(--neutral));
  }

  &:hover {
    background-color: rgb(var(--hover-btn));
  }

  @include start-from(phone) {
    width: 130px;
    padding: 16px;
    font-size: 0.7rem;
    font-weight: 700;
  }
}
</style>
