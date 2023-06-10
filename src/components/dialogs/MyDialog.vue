<template>
  <div
    v-if="showModal"
    class="bg-white rounded-md shadow-md p-5 absolute top-1/2 left-1/2 w-[400px] transform -translate-x-1/2 -translate-y-1/2"
  >
    <article>
      <h1 class="text-xl font-bold">{{ blabla.title }}</h1>
      <p>{{ blabla.description }}</p>
      <p class="line-clamp-10">bilde: {{ blabla.image }}</p>

      <button
        @click="$emit('closeModal')"
        class="drop-shadow-sm p-2 m-2 bg-slate-200 float-right"
      >
        Close me
      </button>
    </article>
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
