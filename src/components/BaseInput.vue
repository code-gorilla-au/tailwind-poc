<template>
  <div class="field">
    <label v-show="label">{{ label }}</label>
    <input
      :class="[isTouched]"
      @focus="clearErrors"
      @blur="handleInvlaid"
      v-bind="$attrs"
      :value="modelValue"
      @input="handleInput"
    />
    <label class="error-validation" v-show="!valid">{{ invalidMessage }}</label>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  inheritAttrs: false,
  name: 'BaseInput',
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: [String, Number],
  },
  setup(props, { attrs, emit }) {
    const valid = ref(true);
    const touched = ref(false);
    const isTouched = computed(() => (touched.value ? 'touched' : ''));
    const invalidMessage = computed(() => {
      if (attrs?.title) {
        return attrs.title;
      }
      if (attrs?.type) {
        return `${attrs?.type} is Invalid`;
      }
      return 'Input is invalid';
    });
    function clearErrors() {
      valid.value = true;
      touched.value = false;
    }
    function handleInput(event) {
      emit('update:modelValue', event.target.value);
    }
    function handleInvlaid(event) {
      touched.value = true;
      const isValid = event.target.checkValidity();
      valid.value = isValid;
    }
    return {
      valid,
      touched,
      isTouched,
      invalidMessage,
      handleInvlaid,
      clearErrors,
      handleInput,
    };
  },
};
</script>

<style scoped>
.field {
  display: flex;
  flex-direction: column;
  margin: 1em 0em;
}
.field label {
  font-size: 0.8rem;
  margin-bottom: 3px;
  color: var(--colour-neutral-default);
}
input {
  outline: none;
  padding: 0.3em;
  font-size: 1em;
  box-shadow: none;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid;
  border-bottom-color: var(--colour-neutral-default);
  color: var(--colour-secondary-default);
}
.field input:focus {
  border-color: var(--colour-primary-default);
  transition: 0.5s;
}

.error-validation {
  color: var(--colour-danger-default);
}
.touched:required:valid {
  transition: 0.5s;
  color: var(--colour-neutral-default);
}

.touched:invalid {
  transition: 0.5s;
  border-color: var(--colour-danger-default);
}
.touched:required:invalid {
  transition: 0.5s;
  border-color: var(--colour-danger-default);
}
</style>
