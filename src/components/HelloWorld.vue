<script setup>
import { ref } from "vue";
import WorkList from "./WorkList.vue";

const count = ref(0);

function increaseCount() {
  count.value += 1;
}
function decreaseCount() {
  count.value -= 1;
}
function resetCount() {
  count.value = 0;
}
</script>

<template>
  <div
    class="p-8 w-1/4 m-auto mt-72 border-2 text-center h-1/2 flex flex-col justify-center items-center space-y-5"
  >
    <p class="font-semibold text-black text-2xl">Count: {{ count }}</p>
    <div class="flex space-x-2 mt-4">
      <button
        class="py-2 px-3 bg-green-400 hover:bg-green-700 text-white w-full rounded-md"
        @click="increaseCount"
      >
        Increase
      </button>
      <button
        class="py-2 px-3 bg-yellow-400 disabled:bg-yellow-200 hover:bg-yellow-600 text-white w-full rounded-md"
        @click="decreaseCount"
        :disabled="count === 0"
      >
        Decrease
      </button>
      <button
        class="py-2 px-3 bg-red-400 disabled:bg-red-300 hover:bg-red-600 text-white w-full rounded-md"
        @click="resetCount"
        :disabled="count === 0"
      >
        Reset
      </button>
    </div>
    <WorkList />
  </div>
</template>
