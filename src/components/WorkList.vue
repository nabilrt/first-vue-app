<script setup>
import { ref, onMounted } from "vue";

const loading = ref(false);
const todos = ref([]);
const offset = ref(0);
const limit = ref(5);
const newLimit = ref(5);
onMounted(() => {
  loading.value = true;
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => {
      todos.value = data;
      loading.value = false;
    });
});
const onPrevClick = () => {
  if (offset.value > 0) {
    offset.value -= limit.value;
    newLimit.value = offset.value + limit.value;
  }
};
const onNextClick = () => {
  if (offset.value < todos.value.length) {
    offset.value += limit.value;
    newLimit.value = offset.value + limit.value;
  }
};
</script>

<template>
  <div class="font-bold text-xl text-center">My Work List</div>
  <div v-if="loading">Loading...</div>
  <div v-else>
    <table class="border border-violet-400 w-full">
      <thead class="p-4">
        <tr class="space-x-3">
          <th>Id</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody class="border border-violet-400">
        <tr
          v-for="(todo, index) in todos.slice(offset, newLimit)"
          :key="index"
          class="border border-violet-300 text-center"
        >
          <td class="underline">
            <router-link :to="`/todo/${todo.id}`">{{ todo.id }}</router-link>
          </td>
          <td>{{ todo.title.slice(0, 10) }}</td>
        </tr>
      </tbody>
    </table>
    <div class="flex justify-between items-center">
      <button
        class="p-3 bg-blue-500 text-white hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed"
        @click="onPrevClick"
        :disabled="offset === 0"
      >
        <font-awesome-icon :icon="['fas', 'backward']" />
      </button>
      <button
        class="p-3 bg-blue-500 text-white hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed"
        @click="onNextClick"
        :disabled="newLimit === todos.length"
      >
        <font-awesome-icon :icon="['fas', 'forward']" />
      </button>
    </div>
  </div>
</template>
