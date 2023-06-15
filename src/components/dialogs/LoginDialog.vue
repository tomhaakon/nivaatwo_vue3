<template>
  <div v-if="isLoginDialogOpen" class="z-10">
    <div class="grid grid-cols-1 grid-rows-4 gap-2">
      <h1 class="text-2xl uppercase text-slate-200 font-bold">login dialog</h1>
      <!-- input -->
      <input type="text" v-model="unameLoginField" placeholder="username" class="pl-1" />
      <input type="password" v-model="pwdLoginField" placeholder="password" class="pl-1" />
      <!-- knapper -->
      <button
        @click="triggerLogin()"
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
      <div>
        {{ unameLoginField }} <br />
        {{ pwdLoginField }}
      </div>
    </div>
  </div>
</template>
<script setup>
// imports
import { ref } from "vue";
//refs
const unameLoginField = ref("");
const pwdLoginField = ref("");

const emit = defineEmits(["close-dialog", "login-success", "is-authenticated"]);
const props = defineProps({
  isLoginDialogOpen: {
    type: Boolean,
    required: true,
  },
});
const closeDialog = () => {
  emit("close-dialog", true);
};
const triggerLogin = () => {
  if (
    unameLoginField === sessionStorage.getItem("username") &&
    pwdLoginField === sessionStorage.getItem("password")
  ) {
    localStorage.setItem("is-authenticated", true);
    emit("login-success", true);
  } else {
    localStorage.setItem("authenticated", false);
    emit("is-authenticated", false);
    console.log("feil brukernanv og paswd");
  }
};
</script>
