<script setup lang="ts">
import {ProjectInfo} from '../projects';

defineProps<{ projects: ProjectInfo[] }>();
</script>

<template>
  <div class="flex flex-col gap-y-4 col-span-12">
    <a v-for="project in projects" :href="project.path" class="complex-link">
      <h4 class="font-display"><span class="complex-link-piece">{{ project.data.title }}</span></h4>
      <div class="complex-link-piece inline">
        {{ project.data.students.join(", ") }}.
        {{ project.data.term }} {{ project.data.type }}
      </div>
    </a>
  </div>
</template>

<style scoped>

</style>