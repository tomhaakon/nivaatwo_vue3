<template>
  <navBar class="mb-4" />

  <RouterView />

  <footerBar />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import navBar from "@/components/nav/navBar.vue";
import footerBar from "@/components/nav/footer.vue";
</script>
