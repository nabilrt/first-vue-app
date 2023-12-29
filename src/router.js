import { createRouter, createWebHistory } from "vue-router";
import ViewTodoVue from "./components/ViewTodo.vue";
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: () => import("./components/HelloWorld.vue") },
    { path: "/todo/:id", component: ViewTodoVue },
  ],
});
