<script setup lang="ts">
const props = defineProps<{ name: string }>();
</script>

<template>
  <span class="filled-line-breaks"><a class="link bg-white text-zinc-950" :href="'/all/' + props.name">{{ props.name }}</a></span>
</template>

<style scoped>

</style>