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
import { useBaseInputs } from '@/lib/use/inputs';

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
  setup(props, ctx) {
    const base = useBaseInputs(ctx);
    return {
      valid: base.valid,
      touched: base.touched,
      isTouched: base.isTouched,
      invalidMessage: base.invalidMessage,
      handleInvlaid: base.handleInvlaid,
      clearErrors: base.clearErrors,
      handleInput: base.handleInput,
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
label {
  font-size: 0.8rem;
  margin-bottom: 3px;
  color: var(--colour-neutral-default);
}
input {
  transition: 0.5s;
  outline: none;
  font-size: 1rem;
  box-shadow: none;
  background-color: transparent;
  border: 1px solid;
  border-radius: 7px;
  padding: 0.25em 0.5em;
  border-color: var(--colour-neutral-default);
  color: var(--colour-secondary-default);
}

.field input:focus {
  border-color: var(--colour-primary-default);
}

.error-validation {
  color: var(--colour-danger-default);
}
.touched:required:valid {
}

.touched:invalid {
  border-color: var(--colour-danger-default);
}
.touched:required:invalid {
  border-color: var(--colour-danger-default);
}
</style>
