<template>
  <div v-if="isLoginDialogOpen" class="z-10">
    <div class="grid grid-cols-1 grid-rows-4 gap-2">
      <ChildComponent ref="myChild" />
      <h1 class="text-2xl uppercase text-slate-200 font-bold">login dialog</h1>
      <!-- input -->
      <input type="text" v-model="unameLoginField" placeholder="username" class="pl-1" />
      <input type="password" v-model="pwdLoginField" placeholder="password" class="pl-1" />
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
      <div>
        {{ unameLoginField }} <br />
        {{ pwdLoginField }}
      </div>
      <!-- testing -->
    </div>
  </div>
</template>
<script setup>
// imports
import { ref } from "vue";
import ChildComponent from "@/components/Notify.vue";

const myChild = ref(null);

const childMethod = () => {
  myChild.value.childMethod();
};

//refs
const unameLoginField = ref("");
const pwdLoginField = ref("");

//prop & emits
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
    unameLoginField.value === localStorage.getItem("username") &&
    pwdLoginField.value === localStorage.getItem("password")
  ) {
    localStorage.setItem("is-authenticated", true);

    console.log("logged in");
    closeDialog();
    // location.href = "/";

    childMethod();
  } else {
    localStorage.setItem("is-authenticated", false);
    emit("is-authenticated", false);
    console.log("feil brukernanv og paswd");
  }
};
</script>
