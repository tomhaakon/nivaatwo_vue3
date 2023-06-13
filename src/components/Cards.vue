<template>
  <div>
    <div class="">
      <h1 class="text-xl font-bold text-slate-500 uppercase">Cards</h1>
    </div>
    <div class="grid grid-cols-3 gap-4 place-content-center mt-16">
      <div v-for="(item, index) in myEpicArray" :key="index" class="">
        <div
          v-if="item.isShowing"
          class="drop-shadow-md w-full bg-slate-300 rounded p-2"
        >
          <button class="font-bold text-xl">{{ item.title }}</button>
          <p>id:{{ index }}</p>
          <p>{{ item.description }}</p>
        </div>
        <div v-else class="text-center h-full bg-slate-50">
          <p class="pt-8 text-slate-400 italic rounded">
            Dette kortet er skjult
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const myEpicArray = ref([
  {
    title: "knapp 1 ",
    description: "Info om knappen 1",
    image: "bilde1.jpg",
    isShowing: true,
  },
  {
    title: "knapp 2 ",
    description: "Info om knappen 2",
    image: "bilde2.jpg",
    isShowing: false,
  },
  {
    title: "knapp 3 ",
    description: "Info om knappen 3",
    image: "bilde3.jpg",
    isShowing: true,
  },
  {
    title: "knapp 4 ",
    description: "Info om knappen 4",
    image: "bilde4.jpg",
    isShowing: true,
  },
  {
    title: "knapp 5 ",
    description: "Info om knappen 5",
    image: "bilde5.jpg",
    isShowing: true,
  },
]);
</script>
