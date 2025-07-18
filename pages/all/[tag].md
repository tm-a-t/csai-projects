---
project: false
---
<script setup>
  import ProjectList from '../../.vitepress/theme/ProjectList.vue';
</script>

<div class="col-span-full">
<h1 class="font-display">{{ $params.title }}</h1>
</div>

<ProjectList :projects="$params.projects" class="mt-4 sm:mt-8"/>
