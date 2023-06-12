<template>
  <div
    v-for="(item, index) in myEpicArray"
    :key="index"
    v-if="item.visMeg === 'ja'"
    class="drop-shadow-md mb-4 w-28 py-5 bg-slate-300"
  >
   
      <button
        @click="openModal(item)"
        class="relative drop-shadow-sm p-2 bg-slate-200 text-xl"
      >
        {{ item.title }}
      </button>
   
  </div>

  <MyDialog
    :showModal="showModal"
    :blabla="blabla"
    @closeModal="showModal = !showModal"
  />
</template>

<script setup>
import { ref } from "vue";
import MyDialog from "../components/dialogs/TableDialog.vue";
const showModal = ref(false);
const blabla = ref("");
const openModal = (item) => {
  blabla.value = item;
  showModal.value = true;
};
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
