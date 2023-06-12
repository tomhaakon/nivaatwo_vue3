<template>
  <main>
    <Table :tableData="jsonData" />
  </main>
</template>
<script setup>
import { ref } from "vue";
// import tabell component
import Table from "../components/Table.vue";
// import data til tabell
import jsonData from "../json/cars.json";
</script>
