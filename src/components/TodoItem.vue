<template>
  <li class="todo-item shadow-md">
    <span>{{ todo.name }}</span>
    <span class="todo-actions"><BaseCheckbox v-model="done"/> <IconTrash /></span>
  </li>
</template>

<script>
import { ref, watch } from 'vue';
import BaseCheckbox from '@/components/BaseCheckbox.vue';
import IconTrash from '@/components/IconTrash.vue';

export default {
  name: 'TodoItem',
  components: {
    BaseCheckbox,
    IconTrash,
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
.todo-actions {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
