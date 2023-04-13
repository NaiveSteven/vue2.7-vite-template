<template>
  <div>
    <iframe class="iframe-style" :src="route.meta.url" />
  </div>
</template>

<script setup>
  const route = useRoute();
</script>
<style lang="scss" scoped>
  .iframe-style {
    width: 100%;
    height: calc(100vh - 82px);
  }
</style>
