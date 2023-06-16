<template>
  <div>
    <div class="">
      <h1 class="text-xl font-bold text-slate-500 uppercase">Profile</h1>
    </div>

    <!-- if user is logged in -->
    <div v-if="authenticated === 'true'" class="p-5">
      <div class="font-thin">
        authenticated:<span class="font-medium">{{ authenticated }}</span>
      </div>
      <div class="font-thin">
        username: <span class="font-medium">{{ username }}</span>
      </div>
      <div>
        <span class="font-thin">password:</span
        ><span v-if="!hiddenPwd" class="font-thin cursor-pointer" @click="showPassword()">
          <span class="font-light text-sm">(click to show password)</span>
        </span>
        <span @click="showPassword()" v-else
          >{{ pwd }}
          <span class="font-light text-sm cursor-pointer">(click again to hide)</span></span
        >
      </div>
    </div>
    <!-- if not -->
    <div v-else>Sorry you have to log in to view your profile.</div>
  </div>
</template>
<script setup>
import { ref } from "vue";

//refs
const hiddenPwd = ref(false);

const username = ref(localStorage.getItem("username")).value;
const pwd = ref(localStorage.getItem("password")).value;
const authenticated = ref(localStorage.getItem("is-authenticated")).value;

const showPassword = () => {
  hiddenPwd.value = !hiddenPwd.value;
};
</script>
