<template>
    <div>
      <p>This event: {{ $route.params.id }}</p>
    </div>
</template>

<script setup>
  const nuxt = useNuxtApp();

  console.log(nuxt);
</script>

<style lang="scss" scoped>

</style>
