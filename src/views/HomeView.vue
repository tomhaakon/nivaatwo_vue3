<template>
  <main>
    <!-- <p>{{ count }}</p>
    <button @click="counterIncrease">Increase count</button>
    <button @click="countDecrease">Decrease count</button> -->
    <div style="display: flex; flex-direction: column; width: 300px">
      <label for="email">Email</label>
      <input type="email" v-model="email" />
      <label for="password">Password</label>
      <input type="password" v-model="password" />
    </div>

    <button @click="handleLogin">Login</button>

    <div style="padding: 2rem; text-align: center" v-if="isShowing">
      email: {{ email }} password: {{ password }}
    </div>

    <pre>
      {{ email }}
      {{ password }}
    </pre>
    <h1 class="font-bold underline text-red-600">Hello world!</h1>
  </main>
</template>

<script setup>
import { ref } from "vue";
const count = ref(0);

const email = ref("");
const password = ref("");
const isShowing = ref(false);

const handleLogin = () => {
  isShowing.value = !isShowing.value;
};

// const counterIncrease = () => {
//   count.value++;
// };
// const countDecrease = () => {
//   count.value--;
// };
</script>

<style scoped>
div {
  background-color: red;
}
</style>
