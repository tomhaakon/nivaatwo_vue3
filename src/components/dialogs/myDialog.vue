<template>
  <div
    v-if="showModal"
    class="bg-white rounded-md shadow-md p-5 absolute top-1/2 left-1/2 w-[400px] transform -translate-x-1/2 -translate-y-1/2"
  >
    <h1>heihei fra myDialog.vue</h1>
    <p>Her skal info fra parent vises</p>
    {{ blabla }}

    <button
      @click="$emit('closeModal')"
      class="drop-shadow-sm p-2 bg-slate-200"
    >
      Close me
    </button>
  </div>
</template>
<script setup>
// import { defineProps } from "vue";
const props = defineProps({
  showModal: {
    type: Boolean,
    required: true,
  },
  blabla: {
    type: Object,
  },
});
</script>
