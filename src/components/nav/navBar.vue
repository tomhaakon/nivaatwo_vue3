<template>
  <main>
    <nav>
      <div
        class="h-20 w-full bg-slate-500 text-2xl uppercase text-white font-semibold"
      >
        <div class="w-full flex place-content-center pt-0">
          <router-link to="/" class="px-5 pt-2">
            <span class="text-5xl p-0 text-slate-800">&#9284;</span>
          </router-link>
          <router-link to="/resources" class="px-5 pt-5">
            resources
          </router-link>
          <router-link to="/cards" class="px-5 pt-5"> cards </router-link>
          <p class="px-5 pt-5 cursor-pointer" @click.stop="toggleDropdown">
            profile
          </p>
        </div>
      </div>
      <!-- dropdown meny -->
      <div v-show="isDropdownOpen" ref="dropdownMenu">
        <div class="w-full pl-96 flex justify-center absolute z-20">
          <!-- dropdrown menu for user that is logged in -->
          <div v-if="loggedIn" class="w-32 bg-slate-400">
            <button
              class="h-10 w-32 uppercase text-white font-bold"
              @click="router.push('/profile')"
            >
              Profile
            </button>
            <button
              class="h-10 w-32 uppercase text-white font-bold"
              @click="logOut()"
            >
              Logout
            </button>
          </div>
          <!-- dropdown for user that is not logged in -->
          <div class="w-32 bg-slate-400" v-else>
            <button
              class="h-10 w-32 uppercase text-white font-bold"
              @click.stop="openLoginDialog()"
            >
              login
            </button>
            <button
              class="h-10 w-32 uppercase text-white font-bold"
              @click.stop="openRegDialog()"
            >
              register
            </button>
          </div>
        </div>
      </div>
    </nav>
    <!-- login success -->
    <div
      ref="loginSuccessBox"
      v-show="openLoginSuccess"
      class="w-full bg-green-500 text-center absolute z-10"
    >
      <h1 class="font-bold pb-2 text-3xl text-white">Login sucess!</h1>
    </div>
    <div
      ref="logoutSuccessBox"
      v-show="openLogoutSuccess"
      class="w-full bg-red-400 text-center absolute z-10"
    >
      <h1 class="font-bold pb-2 text-3xl text-white">
        You sucessfylly logged out! Bye
      </h1>
    </div>
    <div
      ref="regSuccessBox"
      v-show="openRegSuccess"
      class="w-full bg-green-500 text-center absolute z-10"
    >
      <h1 class="font-bold pb-2 text-3xl text-white">
        Successfully registered new user! You can now log in.
      </h1>
    </div>
    <!-- Dialoger -->
    <!-- login -->
    <div class="w-full justify-center flex">
      <LoginDialog
        :isLoginDialogOpen="isLoginDialogOpen"
        @close-dialog="closeLoginDialog"
        @login-success="triggerLoginSuccess"
        class="absolute w-80 pb-10 bg-slate-500 p-5 top-1/4 z-20"
      />
      <!-- reg -->
      <RegDialog
        :isRegDialogOpen="isRegDialogOpen"
        @close-dialog="closeRegDialog"
        @reg-success="regSuccess"
        class="absolute w-80 pb-10 bg-slate-500 p-5 top-1/4 z-20"
      />
    </div>
  </main>
</template>
<script setup>
// imports
import { ref, onMounted, onUnmounted } from "vue";
import LoginDialog from "@/components/dialogs/LoginDialog.vue";
import RegDialog from "@/components/dialogs/RegDialog.vue";
import router from "../../router";

// refs
const dropdownMenu = ref(null);
const isDropdownOpen = ref(false);
const isLoginDialogOpen = ref(false);
const isRegDialogOpen = ref(false);
const openLoginSuccess = ref();
const loginSuccessBox = ref(false);
const openLogoutSuccess = ref();
const logoutSuccessBox = ref(false);
const openRegSuccess = ref();
const regSuccessBox = ref(false);

let loggedIn = ref(localStorage.getItem("is-authenticated")).value;

const checkIfLoggedIn = () => {
  loggedIn = ref(localStorage.getItem("is-authenticated")).value;
};

// dropdown
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
  if (
    openLogoutSuccess.value ||
    openLoginSuccess.value ||
    openRegSuccess.value
  ) {
    if (openLoginSuccess.value) {
      openLoginSuccess.value = false;
    } else if (openLogoutSuccess.value) {
      openLogoutSuccess.value = false;
    } else if (openRegSuccess.value) {
      openRegSuccess.value = false;
    }
  }
};
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
// steng dropdown hvis du trykker utenfor
const handleClickOutside = (event) => {
  if (dropdownMenu.value && !dropdownMenu.value.contains(event.target)) {
    isDropdownOpen.value = false;
  }
  // if (loginSuccessBox.value && !loginSuccessBox.value.contains(event.target)) {
  //   openLoginSuccess.value = false;
  // }
};
// open dialogs
const openLoginDialog = () => {
  isLoginDialogOpen.value = !isLoginDialogOpen.value;
  isDropdownOpen.value = false;
};
const openRegDialog = () => {
  isRegDialogOpen.value = !isRegDialogOpen.value;
  isDropdownOpen.value = false;
};

// close dialogs
const closeLoginDialog = () => {
  checkIfLoggedIn();
  isLoginDialogOpen.value = false;
};
const closeRegDialog = () => {
  isRegDialogOpen.value = false;
};
const logOut = () => {
  localStorage.removeItem("is-authenticated");
  isDropdownOpen.value = false;
  triggerLogoutSuccess();
  checkIfLoggedIn();
};
// note
const regSuccess = () => {
  openRegSuccess.value = true;
  setTimeout(() => {
    openRegSuccess.value = false;
  }, 3000);
};
const triggerLoginSuccess = () => {
  openLoginSuccess.value = true;
  setTimeout(() => {
    openLoginSuccess.value = false;
  }, 3000);
};
const triggerLogoutSuccess = () => {
  openLogoutSuccess.value = true;
  setTimeout(() => {
    openLogoutSuccess.value = false;
  }, 3000);
};
</script>
