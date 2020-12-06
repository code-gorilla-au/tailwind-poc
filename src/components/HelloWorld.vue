<template>
<!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
<div class="flex flex-col items-center container mx-auto px-4">
  <BaseButton rounded v-for="button in buttons" :key="button" :type="button" >click me</BaseButton>
  <BaseButton v-for="button in buttons" :key="`${button}2`" :type="button" >click me</BaseButton>
</div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';

export default {
  name: 'HelloWorld',
  components: {
    BaseButton,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      buttons: [
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
        'neutral',
        'white',
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
