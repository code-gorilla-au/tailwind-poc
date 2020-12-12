<template>
  <li class="todo-item shadow-md">
    <span>{{ todo.name }}</span>
    <BaseCheckbox v-model="done" />
  </li>
</template>

<script>
import { ref, watch } from 'vue';
import BaseCheckbox from '@/components/BaseCheckbox.vue';

export default {
  name: 'TodoItem',
  components: {
    BaseCheckbox,
  },
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const done = ref(false);
    watch(
      () => done.value,
      (value) => {
        const newTodo = {
          name: props.todo.name,
          checked: value,
        };
        emit('update-todo', newTodo);
      },
    );
    return {
      done,
    };
  },
};
</script>

<style scoped>
.todo-item {
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--colour-white-default);
  border-radius: 7px;
}
.todo-item span {
  margin-left: 1em;
}
</style>
