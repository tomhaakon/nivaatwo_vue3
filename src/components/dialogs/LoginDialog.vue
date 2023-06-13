<template>
  <div v-if="isLoginDialogOpen" class="z-10">
    <div class="grid grid-cols-1 grid-rows-4 gap-2">
      <h1 class="text-2xl uppercase text-slate-200 font-bold">login dialog</h1>
      <input placeholder="username" class="pl-1" /><input
        placeholder="password"
        class="pl-1"
      />
      <button
        @click="closeDialog()"
        class="bg-slate-400 uppercase text-lg font-bold text-slate-100"
      >
        login
      </button>
      <button
        @click="closeDialog()"
        class="bg-slate-400 uppercase text-lg font-bold text-slate-100"
      >
        close
      </button>
    </div>
  </div>
</template>
<script setup>
import { getCurrentInstance } from "vue";
const emit = defineEmits(["close-dialog"]);
const props = defineProps({
  isLoginDialogOpen: {
    type: Boolean,
    required: true,
  },
});
const closeDialog = () => {
  emit("close-dialog");
};
</script>
