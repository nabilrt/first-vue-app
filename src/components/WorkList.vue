<script setup>
import { ref } from "vue";

const allTodos = ref([
  {
    id: 1,
    task: "Clean Home",
    isCompleted: false,
  },
  {
    id: 2,
    task: "Do Homework",
    isCompleted: true,
  },
  {
    id: 3,
    task: "Learn Vue",
    isCompleted: true,
  },
]);

function changeStatus(index) {
  const status = allTodos.value[index].isCompleted;
  allTodos.value[index].isCompleted = !status;
}
</script>

<template>
  <div class="font-bold text-xl text-justify">My Work List</div>
  <div v-for="(item, index) in allTodos">
    <input
      type="checkbox"
      name=""
      id=""
      :checked="item.isCompleted"
      @change="changeStatus(index)"
    />
    <span :class="item.isCompleted ? 'line-through' : ''"
      >{{ item.id }} - {{ item.task }}</span
    >
  </div>
</template>
