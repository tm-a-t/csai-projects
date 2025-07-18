<script setup lang="ts">
import {Content, useData} from 'vitepress';
import ProjectTiles from './ProjectTiles.vue';
import TagLink from './TagLink.vue';
import Search from './Search.vue';

const {page, frontmatter} = useData();
</script>

<template>
  <div class="flex justify-center pb-4">
    <div class="grid grid-cols-12 gap-x-8 max-w-360 px-2 w-full">
      <nav class="col-span-full grid grid-cols-subgrid mt-8 mb-32 border-b-2 pb-1">
        <div class="col-span-6 sm:col-span-8 font-display">
            <h4>
              <a href="/" class="link">CSAI Projects</a>
            </h4>
        </div>

        <div class="col-span-6 sm:col-span-4 font-display">
          <a href="/all" class="link">Search</a>
        </div>
      </nav>

      <template v-if="frontmatter.home">
        <div class="col-span-full sm:col-span-8 mb-24">
          <h1 class="text-2xl sm:text-4xl">These projects were built by students of BSc in&nbsp;Computer Science and Artificial Intelligence.</h1>
          <div class="flex flex-wrap mt-2 gap-x-2 sm:mt-4 sm:gap-x-3">
            <a href="/all" class="font-display link">Search></a>
            <a href="https://github.com/tm-a-t/csai-projects" target="_blank" class="font-display link">Source></a>
            <a href="https://lp.jetbrains.com/academy/csai-program/" target="_blank" class="font-display link">CSAI></a>
          </div>

        </div>
        <div class="col-span-full"></div>

        <ProjectTiles/>
      </template>
      <template v-if="frontmatter.search">
        <Search/>
      </template>
      <template v-if="page.isNotFound">
        <div class="col-span-full">
          <span class="text-7xl mr-4">404.</span>
          <a href="/" class="font-display link">Home></a>
        </div>
      </template>
      <template v-else-if="frontmatter.project === false">
        <Content class="grid grid-cols-subgrid col-span-full [&>*]:grid [&>*]:grid-cols-subgrid [&>*]:col-span-full"/>
      </template>
      <template v-else>
        <div class="col-span-full xl:col-span-8 pt-1.5 mb-8 xl:mb-0">
          <h1 class="text-5xl md:text-7xl font-medium tracking-tight -mx-0.5">{{ frontmatter.title }}</h1>
        </div>

        <div class="col-span-6 md:col-span-4 xl:col-span-2 font-display flex flex-col">
          <span>Project</span>
          <div class="flex flex-col">
            <TagLink v-for="name in frontmatter.students" :name="name"/>
            <TagLink :name="frontmatter.type"/>
            <TagLink :name="frontmatter.term"/>
          </div>
        </div>

        <div class="col-span-6 md:col-span-4 xl:col-span-2 font-display flex flex-col gap-3">
          <div class="flex flex-col">
            Mentors
            <TagLink v-for="name in frontmatter.mentors" :name="name"/>
          </div>
          <div class="flex flex-wrap gap-x-0.5">
            <span class="w-full">Keywords</span>
            <TagLink v-for="name in frontmatter.keywords" :name="name"/>
          </div>
        </div>

        <div class="col-span-full mt-8">
          <img :src="frontmatter.picture" :alt="frontmatter.pictureAlt" class="w-full">
        </div>

        <article class="col-span-full grid grid-cols-subgrid">
          <Content class="content"/>
        </article>

        <div class="col-span-full mt-16 sm:mt-48 mb-4 border-b-2 pb-1">
          <h4 class="font-display">All projects</h4>
        </div>
        <ProjectTiles/>
      </template>
    </div>
  </div>

</template>

<style>
@import "tailwindcss";
</style>
