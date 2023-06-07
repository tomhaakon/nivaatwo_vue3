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
          <th class="w-1/4" @click="sortData('title')">Title &#8597;</th>
          <th class="w-1/4" @click="sortData('description')">
            Description &#8597;
          </th>
          <th class="w-1/4" @click="sortData('link')">Link &#8597;</th>
          <th>
            <!-- søk input -->
            <div>
              <input
                type="search"
                placeholder="trykk her for å søke"
                v-model="search"
                class="bg-neutral-100 p-2"
              />
              <div
                v-for="entry in (filteredData, sortedData)"
                :key="entry.id"
              ></div>
            </div>
            <!--  slutt søk input -->
          </th>
        </tr>
      </thead>
      <tbody v-for="car in filteredData">
        <tr>
          <td>{{ car.title }}</td>
          <td>{{ car.description }}</td>
          <td>{{ car.link }}</td>
          <td>knapp</td>
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
    const searchData = car.title + car.description + car.link;
    return searchData.toLowerCase().includes(search.value.toLowerCase());
  });
});

// sortering
</script>
