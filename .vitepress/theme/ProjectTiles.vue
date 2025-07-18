<script setup lang="ts">
import {useData} from 'vitepress';

const {site} = useData();

const lgClasses = [
  'lg:col-span-6 lg:text-3xl', 'lg:col-span-3 lg:text-xl', 'lg:col-span-3 lg:text-xl',
  'lg:col-span-3 lg:text-xl', 'lg:col-span-5 lg:text-2xl', 'lg:col-span-4 lg:text-2xl',
  'lg:col-span-3 lg:text-xl', 'lg:col-span-3 lg:text-xl', 'lg:col-span-3 lg:text-xl', 'lg:col-span-3 lg:text-xl',
];
</script>

<template>
  <div v-for="(project, index) in site.themeConfig.projects" :class="'col-span-full sm:col-span-6 sm:text-2xl mb-8 ' + lgClasses[index % lgClasses.length]">
    <a :href="project.path" class="complex-link">
      <img :src="project.data.picture" :alt="project.data.pictureAlt" class="w-full">
      <h4 class="mt-2">
        <span class="complex-link-piece">{{ project.data.title }}</span>
      </h4>
    </a>
  </div>
</template>

<style scoped>

</style>