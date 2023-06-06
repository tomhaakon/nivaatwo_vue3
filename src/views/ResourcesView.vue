<template>
  <!-- root element -->
  <p>import ResourcesView.vue OK</p>
  <Table
    :showModal="showModal"
    :blabla="blabla"
    @closeModal="showModal = !showModal"
  ></Table>

  <!-- tabell -->
  <div class="p-20">
    <table class="bg-neutral-100 w-full">
      <thead>
        <tr class="shadow-md text-left">
          <th @click="sortData('title')">Title &#8597;</th>
          <th @click="sortData('description')">Description &#8597;</th>
          <th @click="sortData('link')">Link &#8597;</th>
          <th>
            <!-- søk input -->
            <div>
              <input
                type="search"
                placeholder="trykk her for å søke"
                v-model="search"
                class="bg-neutral-100 w-full"
              />
              <div
                v-for="entry in (filteredData, sortedData)"
                :key="entry.id"
              ></div>
            </div>
            <!-- søk input slutt -->
          </th>
        </tr>
      </thead>
      <tbody v-for="car in filteredData">
        <tr>
          <td class="w-1/4">{{ car.title }}</td>
          <td class="w-1/4">{{ car.description }}</td>
          <td class="w-1/4">{{ car.link }}</td>
          <td class="w-1/4">knapp</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import Table from "@/components/Table.vue";

// import data
import jsonData from "@/json/cars.json";

const myData = ref(jsonData);

// modal
const showModal = ref(false);
const openModal = (item) => {
  blabla.value = item;
  showModal.value = true;
};
const blabla = ref("");

// search
const search = ref("");
const filteredData = computed(() => {
  return myData.value.filter((car) => {
    return car.title.toLowerCase().includes(search.value.toLowerCase());
  });
});

// sortering
const sortedData = ref("");
const sortList = computed(() => {
  if (this.sortedbyASC) {
    this.sortedData.sort((x, y) => (x[sortBy] > y[sortBy] ? -1 : 1));
    this.sortedbyASC = false;
  } else {
    this.sortedData.sort((x, y) => (x[sortBy] < y[sortBy] ? -1 : 1));
    this.sortedbyASC = true;
  }
});
</script>
