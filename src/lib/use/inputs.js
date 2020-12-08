import { ref, computed } from 'vue';

export const baseInputs = (ctx) => {
  const valid = ref(true);
  const touched = ref(false);
  const isTouched = computed(() => (touched.value ? 'touched' : ''));
  const invalidMessage = computed(() => {
    if (ctx.attrs?.title) {
      return ctx.attrs.title;
    }
    if (ctx.attrs?.type) {
      return `${ctx.attrs?.type} is Invalid`;
    }
    return 'Input is invalid';
  });
  function clearErrors() {
    valid.value = true;
    touched.value = false;
  }
  function handleInput(event) {
    ctx.emit('update:modelValue', event.target.value);
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
};

export const checkboxInput = () => { };
