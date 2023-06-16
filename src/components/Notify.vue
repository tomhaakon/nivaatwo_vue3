<template>
  <div v-if="showNote === 'true'" class="w-full bg-green-500 text-center absolute z-30">
    <h1 class="font-bold pb-2 text-3xl text-white">Login sucess!</h1>
  </div>
</template>
<script setup>
import { ref, defineExpose } from "vue";

let showNote = ref(false).value;

const childMethod = () => {
  showNote.value = !showNote.value;
};

defineExpose({
  childMethod,
});
</script>
