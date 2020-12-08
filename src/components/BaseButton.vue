<template>
  <button type="button" :class="[renderBase, `bg-${type}`, `hover:bg-${type}-400`, renderRounded]">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    type: {
      type: String,
      required: false,
      default: 'blue',
    },
    rounded: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    renderRounded() {
      return this.rounded === '' ? 'rounded-full' : '';
    },
    renderBase() {
      return 'flex items-center justify-center p-4 rounded-md text-lg focus:outline-none font-extrabold transition duration-150 ease-in-out';
    },
  },
};
</script>

<style>
.bg-primary {
  color: var(--colour-white-default);
}
.bg-secondary {
  color: var(--colour-white-default);
}
.bg-success {
  color: var(--colour-white-default);
}
.bg-warning {
  color: var(--colour-white-default);
}
.bg-danger {
  color: var(--colour-white-default);
}
.bg-neutral {
  color: var(--colour-white-default);
}
.bg-white {
  color: var(--colour-white-default);
}
</style>
