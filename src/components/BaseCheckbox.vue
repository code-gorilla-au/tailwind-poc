<template>
  <div class="field">
    <label v-show="label && labelPosition === 'left'">{{ label }}</label>
    <div class="checkbox-container">
      <input
        type="checkbox"
        :class="['checkbox', isTouched]"
        @focus="clearErrors"
        @blur="handleInvlaid"
        v-bind="$attrs"
        :value="modelValue"
        @input="handleInput"
      />
    </div>
    <label v-show="label && labelPosition === 'right'">{{ label }}</label>
  </div>
</template>

<script>
import { useBaseInputs } from '@/lib/use/inputs';

export default {
  inheritAttrs: false,
  name: 'BaseCheckbox',
  props: {
    label: {
      type: String,
      default: '',
    },
    labelPosition: {
      type: String,
      required: false,
      default: 'left',
      validator(value) {
        const allowed = ['left', 'right'];
        return allowed.includes(value);
      },
    },
    modelValue: [String, Number, Boolean],
  },
  setup(props, ctx) {
    const base = useBaseInputs(ctx);
    return {
      valid: base.valid,
      touched: base.touched,
      isTouched: base.isTouched,
      invalidMessage: base.invalidMessage,
      handleInvlaid: base.handleInvlaid,
      handleInput: base.handleInput,
    };
  },
};
</script>

<style scoped>
.field {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--colour-neutral-default);
  margin: 0.5rem;
}
.checkbox-container {
  margin: 0em 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.checkbox {
  transition: 0.3s;
  -webkit-appearance: none;
  background-color: var(--colour-white-default);
  border: 1px solid var(--colour-success-default);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 9px;
  border-radius: 7px;
  display: inline-block;
  position: relative;
}
.checkbox:active .checkbox:checked:active {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px 1px 3px rgba(0, 0, 0, 0.1);
}
.checkbox:checked {
  background-color: var(--colour-primary-default);
  border: 1px solid var(--colour-primary-default);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05),
    inset 15px 10px -12px rgba(255, 255, 255, 0.1);
}
.checkbox:checked::after {
  content: '\2714';
  font-size: 14px;
  position: absolute;
  top: 0px;
  left: 3px;
  color: var(--colour-white-default);
}
</style>
