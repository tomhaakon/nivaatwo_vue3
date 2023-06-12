<template>
  <!-- tabell -->
  <div class="">
    <!-- søk input -->
    <div>
      <h1 class="text-xl font-bold text-slate-500 uppercase">Table of cars</h1>
    </div>
    <div>
      <input
        type="search"
        placeholder="trykk her for å søke"
        v-model="search"
        class="bg-neutral-100 p-2 indent-1 font-normal mb-5 float-right"
      />
      <div v-for="entry in sortedData" :key="entry.id"></div>
    </div>
    <!-- søk input slutt -->
    <table class="bg-neutral-100 w-full" ref="tableContainer">
      <thead>
        <tr class="shadow-md text-left">
          <th @click.stop="sortData('title')" class="cursor-pointer pl-4">
            Title &#8597;
          </th>

          <th @click.stop="sortData('link')" class="cursor-pointer pl-4">
            Link &#8597;
          </th>
        </tr>
      </thead>
      <tbody
        v-for="item in sortedData"
        :key="item.id"
        class="divide-y-4 shadow-inner bg-white cursor-pointer whitespace-nowrap"
      >
        <tr @click="triggerExpandRow(item.id)">
          <td class="w-64 pl-5">{{ item.title }}</td>

          <td class="w-full overflow-hidden pl-4">{{ item.link }}</td>
          <td class="w-48 text-right pr-5">
            <button @click.stop="openModal(item)">more info</button>
          </td>
        </tr>
        <tr
          v-if="expandedRowId === item.id"
          class="bg-neutral-100 text-slate-600 italic cursor-text col-span-2"
        >
          <td colspan="3" class="pl-5">
            {{ item.description }}
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <tableDialog
        :showModal="showModal"
        :dialogProps="dialogProps"
        @closeModal="showModal = !showModal"
      ></tableDialog>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import tableDialog from "@/components/dialogs/TableDialog.vue";
// refs
const tableContainer = ref(null);
const expandedRowId = ref(null);
const search = ref("");
const sortParam = ref(""); // Selected sorting parameter
const myData = ref(props.tableData);

const props = defineProps({
  tableData: {
    type: Object,
  },
});
// modal
const showModal = ref(false);
const openModal = (item) => {
  dialogProps.value = item;
  showModal.value = true;
};
const dialogProps = ref({});

// search

const searchedData = computed(() => {
  return myData.value.sort().filter((item) => {
    // søke kun på title-felt og description-felt
    const searchAbleData = item.title;
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
