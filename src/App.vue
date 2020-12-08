<template>
  <TodoView />
</template>

<script>
import TodoView from '@/views/Todo.vue';

export default {
  name: 'App',
  components: {
    TodoView,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
