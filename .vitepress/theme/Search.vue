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
    .sort(compareLastWord);
const filteredTypes = computed(() => filtered(types));

const terms = uniqueValues(site.value.themeConfig.projects.map(p => p.data.term))
  .sort(compareAlphabetically);
const filteredTerms = computed(() => filtered(terms));

const filteredProjects = computed(() => site.value.themeConfig.projects.filter(p => p.data.title.toLowerCase().includes(inputValue.value.toLowerCase())))

function uniqueValues(array: Array<string>): Array<string> {
  return [...new Set(array)];
}

function compareAlphabetically(a: string, b: string) {
  return a.toLowerCase().localeCompare(b.toLowerCase());
}

function compareLastWord(a: string, b: string) {
  const aWords = a.split(' ');
  const bWords = b.split(' ');
  return aWords[aWords.length - 1].localeCompare(bWords[bWords.length - 1]);
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
           class="text-2xl sm:text-4xl w-full placeholder:text-zinc-600 focus:outline-0" type="text"
           placeholder="Search...">

    <div class="flex flex-col gap-y-4 mt-4">
      <div v-if="filteredKeywords.length">
        <ul class="flex flex-wrap gap-x-2">
          <li>
            <h2 class="font-display">Keywords:</h2>
          </li>
          <li class="" v-for="keyword in filteredKeywords">
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

      <div v-if="filteredTypes.length">
        <ul class="flex flex-wrap gap-x-2">
          <li>
            <h2 class="font-display">Types:</h2>
          </li>
          <li class="" v-for="type in filteredTypes">
            <a :href="'/all/' + type" class="link">{{ type }}</a>
          </li>
        </ul>
      </div>

      <div v-if="filteredTerms.length">
        <ul class="flex flex-wrap gap-x-2">
          <li>
            <h2 class="font-display">Terms:</h2>
          </li>
          <li class="" v-for="term in filteredTerms">
            <a :href="'/all/' + term" class="link">{{ term }}</a>
          </li>
        </ul>
      </div>

      <div class="sm:mt-2" v-if="filteredProjects.length">
        <ProjectList :projects="filteredProjects"/>
      </div>
    </div>


  </div>
</template>

<style scoped>

</style>