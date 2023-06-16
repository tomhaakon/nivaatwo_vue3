<template>
  <div v-if="isLoginDialogOpen">
    <div class="grid grid-cols-1 grid-rows-4 gap-2">
      <h1 class="text-2xl uppercase text-slate-200 font-bold">login dialog</h1>
      <!-- input -->
      <input type="text" v-model="unameLoginField" placeholder="username" class="pl-1" />
      <input type="password" v-model="pwdLoginField" placeholder="password" class="pl-1" />
      <!--  error msg -->
      <span v-if="errorMsg" class="font-bold text-red-900">
        {{ errorMsg }}
      </span>
      <!-- knapper -->
      <button
        @click.stop="triggerLogin()"
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
// imports
import { ref } from "vue";

//refs
const unameLoginField = ref("");
const pwdLoginField = ref("");
const errorMsg = ref("");
//prop & emits
const emit = defineEmits(["close-dialog", "login-success", "is-authenticated"]);
const props = defineProps({
  isLoginDialogOpen: {
    type: Boolean,
    required: true,
  },
});
// functions
const closeDialog = () => {
  emit("close-dialog", true);
};
const triggerLogin = () => {
  if (
    unameLoginField.value === localStorage.getItem("username") &&
    pwdLoginField.value === localStorage.getItem("password")
  ) {
    localStorage.setItem("is-authenticated", true);
    closeDialog();
    location.href = "/";
  } else {
    localStorage.setItem("is-authenticated", false);
    emit("is-authenticated", false);
    errorMsg.value = "Wrong username or password";
  }
};
</script>
