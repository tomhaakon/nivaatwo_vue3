<template>
  <div class="md:flex md:gap-4">
    <div class="shadow mb-4 md:mb-0" v-for="person in people" :key="person.id">
      <img src="../../assets/img_avatar.png" alt="" class="w-full" />
      <div class="py-2 px-4">
        <p class="font-bold text-4xl">{{ person.name }}</p>
        <p>{{ person.text }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const people = ref([
  { name: "tom", text: "tesdgg", id: 0 },
  { name: "per", text: "asfgasgga", id: 1 },
  { name: "ole", text: "blalblabal", id: 2 },
  { name: "jan", text: "b23", id: 2 },
  { name: "kåre", text: "awdw22222bal", id: 2 },
]);
</script>
