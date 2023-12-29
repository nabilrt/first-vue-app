<script setup>
import { ref, onMounted } from "vue";
import TodoList from "./TodoList.vue";

const task = ref("");
const date = ref("");
const dateRef = ref(null);
const errorMessage = ref("");

const todolist = ref([]);
const addTodo = () => {
  if (task.value === "" || date.value === "") {
    setTimeout(() => (errorMessage.value = "Please fill all the fields"), 1000);
  } else {
    todolist.value.push({
      task: task.value,
      date: date.value,
      isCompleted: false,
    });
    task.value = "";
    date.value = "";
  }
};

const completeTodo = (index) => {
  const status = todolist.value[index].isCompleted;
  todolist.value[index].isCompleted = !status;
};

const deleteTodo = (index) => {
  todolist.value.splice(index, 1);
};
onMounted(() => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;
  dateRef.value.min = today;
});
</script>

<template>
  <div class="space-y-2">
    <h3 class="font-semibold text-2xl">To-do App</h3>
    <form action="" class="space-x-1 flex">
      <input
        type="text"
        v-model="task"
        placeholder="Enter Task"
        @focus="errorMessage=''"
        class="p-3 border border-blue-500 rounded-lg"
      />
      <input
        type="date"
        v-model="date"
        ref="dateRef"
        @focus="errorMessage=''"
        class="p-3 border border-blue-500 rounded-lg"
      />
      <button
        type="button"
        @click="addTodo"
        class="p-3 bg-blue-500 text-white rounded-xl hover:bg-blue-700"
      >
        Add
      </button>
    </form>
    <div v-if="errorMessage!==''" class="text-red-700">Please Fill in All the Fields</div>
    <div class="space-y-2">
      <div
        v-for="(todo, index) in todolist"
        :key="index"
        class="flex justify-between items-center border border-blue-500 rounded-lg p-3"
      >
        <TodoList :todos="todo" />
        <div class="space-x-2">
          <button
            type="button"
            class="p-2 text-white rounded-lg"
            :class="
              todo.isCompleted
                ? 'bg-yellow-400 hover:bg-yellow-600'
                : 'bg-teal-500 hover:bg-teal-700'
            "
            @click="completeTodo(index)"
          >
            <span v-if="todo.isCompleted">
              <font-awesome-icon :icon="['fas', 'xmark']" />
            </span>
            <span v-else>
              <font-awesome-icon :icon="['fas', 'check']" size="lg" />
            </span>
          </button>
          <button
            type="button"
            class="p-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
            @click="deleteTodo(index)"
          >
            <font-awesome-icon :icon="['fas', 'trash']" size="lg" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
