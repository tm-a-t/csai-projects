<script setup lang="ts">

import ProjectList from './ProjectList.vue';
import {useData} from 'vitepress';
import {computed, onMounted, ref} from 'vue';

const {site} = useData();
const input = ref<HTMLInputElement>();
const inputValue = ref('');

const keywords = uniqueValues(site.value.themeConfig.projects.flatMap(p => p.data.keywords))
    .sort(compareAlphabetically);
const filteredKeywords = computed(() => filtered(keywords));

const people = uniqueValues(site.value.themeConfig.projects.flatMap(p => [...p.data.mentors, ...p.data.students]))
    .sort(compareLastWord);
const filteredPeople = computed(() => filtered(people));

const types = uniqueValues(site.value.themeConfig.projects.map(p => p.data.type))
    .sort(compareAlphabetically);
const filteredTypes = computed(() => filtered(types));

const terms = uniqueValues(site.value.themeConfig.projects.map(p => p.data.term))
  .sort(compareLastWord);
const filteredTerms = computed(() => filtered(terms));

const sortedProjects = [...site.value.themeConfig.projects]
    .sort((a, b) => compareAlphabetically(a.data.title, b.data.title));
console.log(sortedProjects, site.value.themeConfig.projects)
const filteredProjects = computed(() => sortedProjects.filter(p => p.data.title.toLowerCase().includes(inputValue.value.toLowerCase())))

function uniqueValues(array: Array<string>): Array<string> {
  return [...new Set(array)];
}

function compareAlphabetically(a: string, b: string) {
  return a.toLowerCase().localeCompare(b.toLowerCase());
}

function compareLastWord(a: string, b: string) {
  const aWords = a.split(' ');
  const bWords = b.split(' ');
  return aWords[aWords.length - 1].localeCompare(bWords[bWords.length - 1]) || compareAlphabetically(a, b);
}

function filtered(array: Array<string>) {
  return array.filter(item => item.toLowerCase().includes(inputValue.value.toLowerCase()));
}

onMounted(() => {
  input.value.focus();
});
</script>

<template>
  <div class="col-span-full">
    <input ref="input" v-model="inputValue"
           class="text-5xl sm:text-7xl font-medium tracking-tight -mx-0.5 w-full placeholder:text-zinc-700 focus:outline-0 focus:ring-0" type="text"
           placeholder="Search…">

    <div class="flex flex-col gap-y-2 mt-4 sm:mt-4">
      <div v-if="filteredKeywords.length">
        <ul class="flex flex-wrap gap-x-2">
          <li>
            <h2 class="font-display">Keywords:</h2>
          </li>
          <li class="" v-for="keyword in [...filteredKeywords]">
            <a :href="'/all/' + keyword" class="link">{{ keyword }}</a>
          </li>
        </ul>
      </div>

      <div v-if="filteredPeople.length">
        <ul class="flex flex-wrap gap-x-2">
          <li>
            <h2 class="font-display">People:</h2>
          </li>
          <li class="" v-for="person in filteredPeople">
            <a :href="'/all/' + person" class="link">{{ person }}</a>
          </li>
        </ul>
      </div>

      <div v-if="filteredTypes.length || filteredTerms.length">
        <ul class="flex flex-wrap gap-x-2">
          <li>
            <h2 class="font-display">Categories:</h2>
          </li>
          <li class="" v-for="type in [...filteredTypes, ...filteredTerms]">
            <a :href="'/all/' + type" class="link">{{ type }}</a>
          </li>
        </ul>
      </div>

      <div v-if="filteredKeywords.length || filteredPeople.length || filteredTypes.length || filteredTerms.length"
           class="hidden sm:block sm:my-4"></div>

      <div v-if="filteredProjects.length">
        <h2 class="sm:hidden font-display mt-8 mb-2 sm:mb-2" v-if="inputValue.length === 0">Projects</h2>
        <ProjectList :projects="filteredProjects"/>
      </div>

      <div v-if="filteredKeywords.length + filteredPeople.length + filteredTypes.length + filteredTerms.length + filteredProjects.length === 0">
        <span class="font-display">Nothing found.</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>