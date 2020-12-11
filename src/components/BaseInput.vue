<template>
  <div :class="['field', isTouched, isInvalid]">
    <label class="input-label" v-show="label">{{ label }}</label>
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
      isInvalid: base.isInvalid,
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
  margin: 1.2rem 1em;
}
.field.touched.invalid {
  margin-bottom: 0rem;
}
.input-label {
  font-size: var(--font-sm);
  margin-bottom: 3px;
  color: var(--colour-neutral-default);
}
input {
  transition: 0.3s;
  outline: none;
  font-size: var(--font-md);
  background-color: transparent;
  border: 1px solid;
  border-radius: 7px;
  padding: 0.25em 0.5em;
  border-color: var(--colour-neutral-default);
  color: var(--colour-secondary-default);
}

.field input:focus {
  outline: none;
  border-color: var(--colour-primary-default);
  box-shadow: 0 0 5px var(--colour-primary-default);
}

.error-validation {
  color: var(--colour-danger-default);
  font-size: var(--font-sm);
  margin: 0;
  padding: 0;
  display: inline-block;
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
