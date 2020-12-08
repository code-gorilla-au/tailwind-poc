<template>
  <div class="sidebar outer-shadow-sm">
    <nav>
      <p>todo</p>
      <p>profile</p>
      <p>settings</p>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style lang="scss">
.sidebar {
  background-color: var(--colour-secondary-default);
  color: var(--colour-white-default);
  flex-basis: 20rem;
  display: flex;
  flex-grow: 1;
}
</style>
