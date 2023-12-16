<script lang="ts" setup>
import info from "@/data.json";
</script>

<template>
  <footer>
    <div class="footer--info">
      <div class="footer--info__about">
        <p>
          {{ info.footer.info }}
        </p>
        <p class="date">2023 - 2024</p>
      </div>
      <div class="footer--info__urls">
        <a v-for="url in info.footer.urls" :href="url.url">{{ url.name }}</a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/utils.scss";

footer {
  height: 100px;
  width: 100%;
  background-color: rgb(var(--primary-10));

  .footer--info {
    @include start-from(generic-desktop) {
      gap: 36px;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    height: 100%;
    gap: 20px;

    &__about {
      display: flex;
      flex-direction: column;
      text-align: center;
      gap: 6px;

      .date {
        font-family: Raleway, Arial, Helvetica, sans-serif;
        opacity: 0.7;
        font-weight: 300;
      }
    }

    &__urls {
      @include start-from(generic-desktop) {
        flex-direction: row;
      }

      display: flex;
      flex-direction: column;
      gap: 6px;

      a {
        text-decoration: underline;
      }
    }
  }
}
</style>
