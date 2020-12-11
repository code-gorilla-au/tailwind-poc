<template>
  <TodoLayout>
    <h1 class="text-center">Title Headers</h1>
    <div class="searchText flex justify-center items-center">
      <span>Add Todo</span>
      <BaseInput required v-model="newTodo" type="text" />
    </div>
    <ul class="flex justify-center items-center">
      <li v-for="todo in todos" :key="todo.name">
        {{ todo.name }}
        <BaseCheckbox labelPosition="right" v-model="todo.checked" label="Done" />
      </li>
    </ul>
  </TodoLayout>
</template>

<script>
import TodoLayout from '@/layouts/TodoLayout.vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseCheckbox from '@/components/BaseCheckbox.vue';

import { ref } from 'vue';

export default {
  name: 'TodoView',
  components: {
    TodoLayout,
    BaseInput,
    BaseCheckbox,
  },
  setup() {
    const todos = ref([{ name: '', checked: false }]);
    const newTodo = ref('');
    return {
      todos,
      newTodo,
    };
  },
};
</script>

<style></style>
