<script setup lang="ts">
import {useData} from 'vitepress';
import Feed from './Feed.vue';

const {site, frontmatter} = useData();
</script>

<template>
  <div class="flex justify-center">
    <div class="grid grid-cols-12 gap-x-8 max-w-360 px-2 w-full">
      <nav class="col-span-full grid grid-cols-subgrid mt-8 mb-32 border-b-2 pb-1">
        <div class="col-span-6 sm:col-span-8 font-display">
            <h4>
              <a href="/" class="hover:bg-green-300 hover:text-zinc-950">CSAI Projects</a>
            </h4>
        </div>

        <div class="col-span-6 sm:col-span-4 font-display">
          <a href="https://lp.jetbrains.com/academy/csai-program/" target="_blank" class="hover:bg-green-300 hover:text-zinc-950">Program ></a>
        </div>
      </nav>

      <template v-if="frontmatter.home">
        <div class="col-span-full sm:col-span-8 mb-16">
          <h1 class="text-2xl sm:text-4xl">These projects were built by students of BSc in&nbsp;Computer Science and Artificial Intelligence</h1>
        </div>
        <div class="col-span-full"></div>

        <Feed/>
      </template>
      <template v-else>
        <div class="col-span-full xl:col-span-8 pt-1.5 mb-8 xl:mb-0">
          <h1 class="text-5xl md:text-7xl font-medium tracking-tight">{{ frontmatter.title }}</h1>
        </div>

        <div class="col-span-6 md:col-span-4 xl:col-span-2 font-display flex flex-col">
          <span>Project</span>
          <div class="flex flex-col">
            <span v-for="name in frontmatter.students" class="filled-line-breaks">
                <a class="link">{{ name }}</a>
            </span>
            <span class="filled-line-breaks"><a class="link">{{ frontmatter.type }}</a></span>
            <span class="filled-line-breaks"><a class="link">{{ frontmatter.term }}</a></span>
          </div>
        </div>

        <div class="col-span-6 md:col-span-4 xl:col-span-2 font-display flex flex-col gap-3">
          <div class="flex flex-col">
            Mentors
            <span v-for="name in frontmatter.mentors" class="filled-line-breaks">
              <a class="link">{{ name }}</a>
            </span>
          </div>
          <div class="flex flex-wrap gap-x-0.5">
            <span class="w-full">Keywords</span>
            <span v-for="keyword in frontmatter.keywords" class="filled-line-breaks">
              <a class="link">{{ keyword }}</a>
            </span>
          </div>
        </div>

        <div class="col-span-full mt-8">
          <img :src="frontmatter.picture" :alt="frontmatter.pictureAlt" class="w-full">
        </div>

        <article class="col-span-full grid grid-cols-subgrid">
          <Content class="content"/>
        </article>

        <div class="col-span-full mt-24 mb-4 border-b-2 pb-1">
          <h4 class="font-display">All projects</h4>
        </div>
        <Feed/>
      </template>
    </div>
  </div>

</template>

<style>
@import "tailwindcss";
</style>
