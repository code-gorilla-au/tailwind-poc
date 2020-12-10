import { ref, computed } from 'vue';

export const useBaseInputs = (ctx) => {
  const valid = ref(true);
  const touched = ref(false);
  const isTouched = computed(() => (touched.value ? 'touched' : ''));
  const isInvalid = computed(() => (valid.value ? '' : 'invalid'));

  const invalidMessage = computed(() => {
    if (ctx.attrs?.title) {
      return ctx.attrs.title;
    }
    if (ctx.attrs?.required === '') {
      return `${ctx.attrs?.type} is required`;
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
    isInvalid,
    invalidMessage,
    handleInvlaid,
    clearErrors,
    handleInput,
  };
};

export const checkboxInput = () => { };
