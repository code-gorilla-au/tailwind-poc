<template>
  <label :value="label">
    <input
      v-bind="$attrs"
      type="checkbox"
      @input="emitInput"
      class="focus:ring-indigo-500 focus:border-indigo-500 block"
    />
  </label>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'BaseInput',
  props: {
    label: {
      type: String,
      required: false,
      default: '',
    },
  },
  setup(props, { emit }) {
    function emitInput(event) {
      emit('input', event.target.value);
    }

    return {
      emitInput,
    };
  },
};
</script>

<style></style>
