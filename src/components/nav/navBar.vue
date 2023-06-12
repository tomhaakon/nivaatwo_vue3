<template>
  <nav>
    <div
      class="h-20 w-full bg-slate-500 text-2xl uppercase text-white font-semibold overflow-y-scroll"
    >
      <div class="w-full flex place-content-center pt-5">
        <div>
          <router-link to="/" class="px-5"> Logo </router-link>
          <router-link to="/resources" class="px-5"> resources </router-link>
          <router-link to="/cards" class="px-5"> cards </router-link>
          <router-link to="/profile" class="px-5"> profile </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
// const headerLinks = [
//   {
//     title: "logo",
//     path: "/",
//   },
//   {
//     title: "resources",
//     path: "/resources",
//   },
// ];
</script>
