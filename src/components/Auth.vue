<template></template>
<script setup>
import { ref } from "vue";

// refs
const isUserLoggedIn = ref("");
// get status of client
const authStatus = ref(localStorage.getItem("is-authenticated")).value;
console.log(authStatus);
</script>
