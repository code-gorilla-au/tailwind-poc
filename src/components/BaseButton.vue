<template>
  <button
    type="button"
    class="base-button">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
};
</script>

<style>
.base-button {
  @apply  flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out
}
</style>
