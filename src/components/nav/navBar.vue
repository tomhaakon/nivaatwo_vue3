<template>
  <main>
    <nav>
      <div
        class="h-20 w-full bg-slate-500 text-2xl uppercase text-white font-semibold"
      >
        <div class="w-full flex place-content-center pt-0">
          <router-link to="/" class="px-5 pt-2"
            ><span class="text-5xl p-0 text-slate-800"
              >&#9284;</span
            ></router-link
          >
          <router-link to="/resources" class="px-5 pt-5">
            resources
          </router-link>
          <router-link to="/cards" class="px-5 pt-5"> cards </router-link>
          <p class="px-5 pt-5" @click.stop="toggleDropdown">profile</p>
        </div>
      </div>
      <!-- dropdown meny -->
      <div v-show="isDropdownOpen" ref="dropdownMenu">
        <div class="w-full pl-96 flex justify-center absolute">
          <div class="w-32 bg-slate-400">
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
      <!-- Dialoger -->
      <div class="w-full justify-center flex">
        <LoginDialog
          :isLoginDialogOpen="isLoginDialogOpen"
          @close-dialog="closeLoginDialog"
          @login-success="loginStatus"
          class="absolute w-80 pb-10 bg-slate-500 p-5 top-1/4 z-20"
        />
        <RegDialog
          :isRegDialogOpen="isRegDialogOpen"
          @close-dialog="closeRegDialog"
          class="absolute w-80 pb-10 bg-slate-500 p-5 top-1/4 z-20"
        />
      </div>
    </nav>
    <div v-if="loginSuccess">Hei</div>
    <div
      v-if="isLoginDialogOpen || isRegDialogOpen"
      class="fixed inset-0 bg-black opacity-50 z-10"
    ></div>
  </main>
</template>
<script setup>
// imports
import { ref, onMounted, onUnmounted } from "vue";
import LoginDialog from "@/components/dialogs/LoginDialog.vue";
import RegDialog from "@/components/dialogs/RegDialog.vue";

// refs
const dropdownMenu = ref(null);
const isDropdownOpen = ref(false);
const isLoginDialogOpen = ref(false);
const isRegDialogOpen = ref(false);

const loginSuccess = ref(false);

// dropdown
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
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
  isLoginDialogOpen.value = false;
};
const closeRegDialog = () => {
  isRegDialogOpen.value = false;
};
const loginStatus = () => {
  loginSuccess.value = true;
  console.log(loginSuccess.value);
};
</script>
