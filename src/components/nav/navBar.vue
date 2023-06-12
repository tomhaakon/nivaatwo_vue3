<template>
  <nav>
    <div
      class="h-20 w-full bg-slate-500 text-2xl uppercase text-white font-semibold"
    >
      <div class="w-full flex place-content-center pt-0">
        <router-link to="/" class="px-5 pt-2"
          ><span class="text-5xl p-0 text-slate-800">&#9284;</span></router-link
        >
        <router-link to="/resources" class="px-5 pt-5"> resources </router-link>
        <router-link to="/cards" class="px-5 pt-5"> cards </router-link>
        <router-link to="/profile" class="px-5 pt-5"> profile </router-link>
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
