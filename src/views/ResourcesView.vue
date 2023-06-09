<template>
  <!-- root element -->
  <p>import ResourcesView.vue OK</p>
  <!-- <Table
    :showModal="showModal"
    :blabla="blabla"
    @closeModal="showModal = !showModal"
  ></Table> -->

  <!-- tabell -->
  <div class="p-20">
    <table class="bg-neutral-100 w-full">
      <thead>
        <tr class="shadow-md text-left">
          <th @click="sortData('title')" class="cursor-pointer">
            Title &#8597;
          </th>
          <th @click="sortData('description')" class="cursor-pointer">
            Description &#8597;
          </th>
          <th @click="sortData('link')" class="cursor-pointer">Link &#8597;</th>
          <th>
            <!-- søk input -->
            <div>
              <input
                type="search"
                placeholder="trykk her for å søke"
                v-model="search"
                class="bg-neutral-100 w-full p-2 indent-1 font-thin"
              />
              <div v-for="entry in sortedData" :key="entry.id"></div>
            </div>
            <!-- søk input slutt -->
          </th>
        </tr>
      </thead>
      <tbody
        v-for="car in sortedData"
        :key="car.id"
        class="divide-y-4 shadow-inner bg-white cursor-pointer"
      >
        <tr @click="triggerExpandRow(car.id)">
          <td class="w-1/4">{{ car.title }}</td>
          <td class="w-1/4">
            {{ car.description }}
          </td>
          <td class="w-1/4">{{ car.link }}</td>
          <td class="w-1/4">knapp</td>
        </tr>
        <tr
          v-if="expandedRowId === car.id"
          class="bg-neutral-100 text-slate-600 italic indent-3 cursor-text"
        >
          {{
            car.subValue
          }}
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
// import Table from "@/components/Table.vue";

// import data
import jsonData from "@/json/cars.json";
const myData = ref(jsonData);

// modal
// const showModal = ref(false);
// const openModal = (item) => {
//   blabla.value = item;
//   showModal.value = true;
// };
// const blabla = ref("");

// search

const search = ref("");
const searchedData = computed(() => {
  return myData.value.sort().filter((item) => {
    // søke kun på title-felt og description-felt
    const searchAbleData = item.title + item.description + item.link;
    return searchAbleData.toLowerCase().includes(search.value.toLowerCase());
  });
});

const sortParam = ref(""); // Selected sorting parameter

// Computed property for sorted data
const sortedData = computed(() => {
  if (sortParam.value === "title") {
    return [...searchedData.value].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  } else if (sortParam.value === "description") {
    return [...searchedData.value].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  } else {
    return searchedData.value;
  }
});

// Function to handle sorting
const sortData = (sortBy) => {
  sortParam.value = sortBy;
};

const expandedRowId = ref(null);

const triggerExpandRow = (id) => {
  if (expandedRowId.value === id) {
    expandedRowId.value = null;
  } else {
    expandedRowId.value = id;
  }
};
</script>
