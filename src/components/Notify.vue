<template>
  <div v-show="showNote === 'true'">
    <div class="w-full bg-green-500 text-center absolute z-30">
      <h1 class="font-bold pb-2 text-3xl text-white">Login sucess!</h1>
    </div>
  </div>
</template>
<script setup>
import { ref, defineExpose } from "vue";

let showNote = ref("").value;

const childMethod = () => {
  showNote = true;
  console.log("showNote:", showNote);
};

defineExpose({
  childMethod,
});
</script>
