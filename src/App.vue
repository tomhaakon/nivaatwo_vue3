<template>
  <NavBar class="" />

  <RouterView class="p-5 mb-32" />

  <FooterBar class="" />
</template>

<script setup>
import { RouterView } from "vue-router";
import NavBar from "@/components/nav/NavBar.vue";
import FooterBar from "@/components/nav/Footer.vue";
</script>
