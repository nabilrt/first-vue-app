<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const id = ref(route.params.id);
const loading = ref(false);
const todo = ref({});
onMounted(() => {
  loading.value = true;
  fetch(`https://jsonplaceholder.typicode.com/todos/${id.value}`)
    .then((res) => res.json())
    .then((data) => {
      todo.value = data;
      loading.value = false;
    });
});
</script>

<template>
  <h3>View Todo {{ id }}</h3>
  <div v-if="loading">Loading...</div>
  <div v-else>
    <div class="border border-violet-400 p-3">
      <div>Id: {{ todo.id }}</div>
      <div>Title: {{ todo.title }}</div>
      <div>Completed: {{ todo.completed }}</div>
    </div>
  </div>
</template>
