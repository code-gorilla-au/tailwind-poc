<template>
  <ul class="mx-auto todo-list flex flex-col justify-center items-center bg-gray-200">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'TodoList',
};
</script>

<style>
.todo-list {
  width: min(100%, 500px);
  padding: 1rem;
}
.todo-list li {
  margin: 0.2rem;
}
</style>
