<template>
  <div :class="['page']">
    <Sidebar />
    <div class="main-view"><slot /></div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'TodoLayout',
  components: {
    Sidebar,
  },
};
</script>

<style lang="scss">
.page {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: 100%;
  & .main-view {
    min-height: 90%;
    min-width: 50%;
    flex-grow: 999;
  }
}
</style>
