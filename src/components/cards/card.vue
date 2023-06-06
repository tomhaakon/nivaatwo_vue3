<template>
  <dialogWrapper />
</template>

<script setup>
import { ref } from "vue";
import dialogWrapper from "../dialogs/MyDialog.vue";
</script>

<!-- oppgave 7 & 8
<template>
  <div>
    <div>
      <div v-for="(item, index) in myEpicArray" :key="index">
        <div
          v-if="item.visMeg === 'ja'"
          class="drop-shadow-md mb-4 w-40 py-5 bg-slate-300"
        >
          <button class="font-bold text-xl">{{ item.title }}</button>
          <p>id:{{ index }}</p>
          <p>{{ item.description }}</p>
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
    visMeg: "ja",
  },
  {
    title: "knapp 2 ",
    description: "Info om knappen 2",
    image: "bilde2.jpg",
    visMeg: "nei",
  },
  {
    title: "knapp 3 ",
    description: "Info om knappen 3",
    image: "bilde3.jpg",
    visMeg: "ja",
  },
  {
    title: "knapp 4 ",
    description: "Info om knappen 4",
    image: "bilde4.jpg",
    visMeg: "ja",
  },
  {
    title: "knapp 5 ",
    description: "Info om knappen 5",
    image: "bilde5.jpg",
    visMeg: "ja",
  },
]);
</script>
 OPPGAVE 6
    ----------------------

    <template>
  <div class="drop-shadow-xl mb-4 w-40 py-5">
    <div class="md:flex d"></div>
    <h1 class="text-xl font-bold">{{ tittel }}</h1>
    <input
      v-model="tittel"
      type="text"
      class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";
const tittel = ref("skriv her");
</script> -->

<!--
    OPPGAVE 5


    ------------------
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
</script> -->
