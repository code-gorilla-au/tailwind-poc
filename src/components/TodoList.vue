<template>
  <div class="todo-list mx-auto bg-gray-200">
    <p class="text-center"><b>Todos</b></p>
    <ul class="mx-auto flex flex-col justify-center items-center ">
      <slot />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
};
</script>

<style>
.todo-list {
  width: min(100%, 500px);
  padding: 1.5rem 1rem;
}
.todo-list ul li {
  margin: 0.2rem;
}
</style>
