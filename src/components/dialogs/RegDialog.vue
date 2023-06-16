<template>
  <div v-if="isRegDialogOpen" class="z-10">
    <div class="grid grid-cols-1 grid-rows-6 gap-2">
      <h1 class="text-2xl uppercase text-slate-200 font-bold">Register</h1>
      <input required placeholder="Enter Username" type="text" v-model="regUname" class="pl-1" />
      <input required placeholder="Enter Password" type="password" v-model="regPwd" class="pl-1" />
      <input
        required
        placeholder="Repeat Password"
        type="password"
        v-model="repeatRegPwd"
        class="pl-1"
      />
      <!-- errorMsg -->
      <span v-if="errorMsg" class="font-bold text-red-900">
        {{ errorMsg }}
      </span>
      <!-- buttons -->
      <button
        @click="fieldsCheck()"
        class="bg-slate-400 uppercase text-lg font-bold text-slate-100"
      >
        Register
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
// import

import { ref } from "vue";
import { useRouter } from "vue-router";

// refs
const regUname = ref("");
const regPwd = ref("");
const repeatRegPwd = ref("");
const errorMsg = ref("");
const regFailed = ref(false);
const router = useRouter();
// props & emits
const emit = defineEmits(["close-dialog"]);
const props = defineProps({
  isRegDialogOpen: {
    type: Boolean,
    required: true,
  },
});
const closeDialog = () => {
  emit("close-dialog");
};
const fieldsCheck = () => {
  // check if username is empty
  if (regUname.value === "") {
    regFailed.value = true;
    errorMsg.value = "Username is empty";
    // check if username exists
  } else if (regUname.value === localStorage.getItem("username")) {
    regFailed.value = true;
    errorMsg.value = "Username allready exists.";
    // check if passwords are empty
  } else if (regPwd.value === "" || repeatRegPwd.value === "") {
    regFailed.value = true;
    errorMsg.value = "Password is empty";
    // check if passwords are the same
  } else if (regPwd.value != repeatRegPwd.value) {
    regFailed.value = true;
    errorMsg.value = "Passwords did not match";
    // else if user is authentictaded
  } else if (localStorage.getItem("is-authenticated").valueOf === true) {
    regFailed.value = true;
    errorMsg.value = "You cannot register while you are logged in.";
    // else turn regFailed to false
  } else {
    regFailed.value = false;
    errorMsg.value = "";
    registerUser();
  }
};
const registerUser = () => {
  localStorage.setItem("username", regUname.value);
  localStorage.setItem("password", regPwd.value);
  closeDialog();
  router.push("/");
};
// localStorage.clear();
</script>
