<template>
  <TodoLayout>
    <h1 class="text-center">Title Headers</h1>
    <div class="searchText flex justify-center items-center">
      <span>Add Todo</span>
      <BaseInput @keydown.enter="addTodo" v-model="newTodo" type="text" />
    </div>
    <TodoList>
      <TodoItem
        v-for="todo in todos"
        v-bind:key="todo.name"
        :todo="todo"
        @update-todo="updateTodo"
      />
    </TodoList>
  </TodoLayout>
</template>

<script>
import TodoLayout from '@/layouts/TodoLayout.vue';
import BaseInput from '@/components/BaseInput.vue';
import TodoItem from '@/components/TodoItem.vue';
import TodoList from '@/components/TodoList.vue';

import { ref } from 'vue';

export default {
  name: 'TodoView',
  components: {
    TodoLayout,
    BaseInput,
    TodoItem,
    TodoList,
  },
  setup() {
    const todos = ref([
      { name: 'fire', checked: false },
      { name: 'water', checked: false },
      { name: 'earth', checked: false },
    ]);
    const newTodo = ref('');
    function updateTodo(todo) {
      const index = todos.value.findIndex((item) => item.name === todo.name);
      todos.value.splice(index, 1, todo);
    }
    function addTodo() {
      const todo = {
        name: newTodo.value,
        checked: false,
      };
      todos.value.push(todo);
      newTodo.value = '';
    }
    return {
      todos,
      newTodo,
      updateTodo,
      addTodo,
    };
  },
};
</script>

<style></style>
