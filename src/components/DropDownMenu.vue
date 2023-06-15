<template>
  <!-- dropdown meny -->
  <div ref="dropdownMenu">
    <div class="w-full pl-96 flex justify-center absolute">
      <!-- dropdown for user that is not logged in -->
      <div class="w-32 bg-slate-400" v-if="!isUserLoggedIn">
        <button class="h-10 w-32 uppercase text-white font-bold" @click.stop="openLoginDialog()">
          login
        </button>
        <button class="h-10 w-32 uppercase text-white font-bold" @click.stop="openRegDialog()">
          register
        </button>
      </div>
      <!-- dropdrown menu for user that is logged in -->
      <!-- <div class="w-32 bg-slate-400">
        <button class="h-10 w-32 uppercase text-white font-bold">Profile</button>
        <button class="h-10 w-32 uppercase text-white font-bold" @click="logOut()">Logout</button>
      </div> -->
    </div>
  </div>
  <!-- Dialoger -->
  <!-- login -->
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import router from "../router";

// refs
const dropdownMenu = ref(null);
const isDropdownOpen = ref(false);
const isUserLoggedIn = ref(false);

// props & emits
const props = defineProps({
  toggleDropdown: {
    type: Boolean,
  },
});

// dropdown
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
  console.log("DropDownMenu.vue: hei");
};
// onMounted(() => {
//   document.addEventListener("click", handleClickOutside);
// });

// onUnmounted(() => {
//   document.removeEventListener("click", handleClickOutside);
// });
// // steng dropdown hvis du trykker utenfor
// const handleClickOutside = (event) => {
//   if (dropdownMenu.value && !dropdownMenu.value.contains(event.target)) {
//     isDropdownOpen.value = false;
//   }
// };

// const logOut = () => {
//   localStorage.setItem("is-authenticated", false);
//   isDropdownOpen.value = false;
//   router.push("/");
// };
</script>
