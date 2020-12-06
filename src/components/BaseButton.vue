<template>
  <button
    type="button"
    :class="['base-button', `bg-${type}`, 'hover:bg-red-400', 'active:bg-green-700']">
    <slot/>
  </button>
</template>

<script>

export default {
  name: 'BaseButton',
  props: {
    type: {
      type: String,
      required: false,
      default: 'primary',
    },
  },
};
</script>

<style>
.base-button {
  @apply flex items-center justify-center p-4 rounded-md text-lg focus:outline-none font-extrabold transition duration-150 ease-in-out
}
.bg-primary {
  color: var(--colour-white-default);
}
.bg-secondary {
  color: var(--colour-white-default);
}
.bg-success {
  color: var(--colour-success-default);
}
.bg-warning {
  color: var(--colour-warning-default);
}
.bg-danger {
  color: var(--colour-danger-default);
}
.bg-neutral {
  color: var(--colour-neutral-default);
}
.bg-white {
  color: var(--colour-white-default);
}
</style>
