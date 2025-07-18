<script setup lang="ts">
import {ProjectInfo} from '../projects';

defineProps<{ projects: ProjectInfo[] }>();
</script>

<template>
  <div class="flex flex-col gap-y-2 sm:gap-y-4 col-span-12">
    <a v-for="project in projects" :href="project.path" class="complex-link sm:leading-[1.2]">
      <h4 class="sm:text-4xl"><span class="complex-link-piece">{{ project.data.title }}</span></h4>
      <div class="sm:text-4xl complex-link-piece inline italic">
        {{ project.data.students.join(", ") }}
<!--        {{ project.data.term }} {{ project.data.type }}-->
      </div>
    </a>
  </div>
</template>

<style scoped>

</style>