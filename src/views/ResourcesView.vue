<template>
  <div>
    <input type="text" v-model="searchQuery" placeholder="Search..." />
    <table>
      <thead>
        <tr>
          <th @click="sort('name')">Name</th>
          <th @click="sort('age')">Age</th>
          <th @click="sort('email')">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredItems" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from "vue";

export default {
  setup() {
    const data = reactive({
      items: [
        { id: 1, name: "John Doe", age: 25, email: "john@example.com" },
        { id: 2, name: "Jane Smith", age: 30, email: "jane@example.com" },
        { id: 3, name: "Bob Johnson", age: 35, email: "bob@example.com" },
      ],
      sortBy: "",
      sortDirection: "asc",
      searchQuery: "",
    });

    const sort = (column) => {
      if (data.sortBy === column) {
        data.sortDirection = data.sortDirection === "asc" ? "desc" : "asc";
      } else {
        data.sortBy = column;
        data.sortDirection = "asc";
      }
    };

    const filteredItems = computed(() => {
      let items = [...data.items];
      if (data.searchQuery) {
        items = items.filter((item) => {
          const searchValue = data.searchQuery.toLowerCase();
          return (
            item.name.toLowerCase().includes(searchValue) ||
            item.age.toString().includes(searchValue) ||
            item.email.toLowerCase().includes(searchValue)
          );
        });
      }
      if (data.sortBy) {
        items.sort((a, b) => {
          const fieldA = a[data.sortBy];
          const fieldB = b[data.sortBy];

          if (data.sortDirection === "asc") {
            return fieldA.localeCompare(fieldB);
          } else {
            return fieldB.localeCompare(fieldA);
          }
        });
      }
      return items;
    });

    return {
      ...toRefs(data),
      sort,
      filteredItems,
    };
  },
};
</script>
