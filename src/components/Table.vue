<template>
  <!-- root element -->
  <p>import ResourcesView.vue OK</p>

  <!-- <Table
    :showModal="showModal"
    :blabla="blabla"
    @closeModal="showModal = !showModal"
  ></Table> -->

  <!-- tabell -->
  <div class="p-20 h-screen">
    <table class="bg-neutral-100 w-full" ref="tableContainer">
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
                class="bg-neutral-100 w-full p-2 indent-1 font-normal"
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
import { ref, computed, onMounted, onUnmounted } from "vue";

// refs

let myData = ref(props.tableData);
const tableContainer = ref(null);
const expandedRowId = ref(null);
const search = ref("");
const sortParam = ref(""); // Selected sorting parameter

const props = defineProps({
  tableData: {
    type: Object,
  },
});
// modal
// const showModal = ref(false);
// const openModal = (item) => {
//   blabla.value = item;
//   showModal.value = true;
// };
// const blabla = ref("");

// search

const searchedData = computed(() => {
  return myData.value.sort().filter((item) => {
    // søke kun på title-felt og description-felt
    const searchAbleData = item.title + item.description + item.link;
    return searchAbleData.toLowerCase().includes(search.value.toLowerCase());
  });
});

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

// open row
const triggerExpandRow = (id) => {
  if (expandedRowId.value === id) {
    expandedRowId.value = null;
  } else {
    expandedRowId.value = id;
  }
};

// Function to handle clicking outside the table
const handleOutsideClick = (event) => {
  if (!tableContainer.value.contains(event.target)) {
    expandedRowId.value = null; // Collapse the expanded row
  }
};

// Add event listener to the document body
onMounted(() => {
  document.body.addEventListener("click", handleOutsideClick);
});

// Remove event listener when the component is unmounted
onUnmounted(() => {
  document.body.removeEventListener("click", handleOutsideClick);
});
</script>
