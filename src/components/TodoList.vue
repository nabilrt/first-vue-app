<script setup>
defineProps({
  todos: {
    task: String,
    date: String,
    isCompleted: Boolean,
  },
});
</script>

<template>
  <div>
    <p
      class="font-semibold text-xl"
      :class="todos.isCompleted ? 'line-through' : ''"
    >
      {{ todos.task }}
    </p>
    <p class="" :class="todos.isCompleted ? 'line-through' : ''">
      {{ todos.date }}
    </p>
  </div>
</template>
