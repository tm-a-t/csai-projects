<script setup lang="ts">
import {useData} from 'vitepress';

const {site} = useData();
</script>

<template>
  <a v-for="project in site.themeConfig.projects" :href="project.path" class="col-span-full sm:col-span-6 lg:col-span-4 cursor-pointer mb-8" >
    <img :src="project.data.picture" :alt="project.data.pictureAlt" class="w-full">
    <h4 class="sm:text-2xl mt-2">{{ project.data.title }}</h4>
  </a>
</template>

<style scoped>

</style>