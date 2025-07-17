---
project: false
---
<script setup>
  import ProjectList from '../../.vitepress/theme/ProjectList.vue';
</script>

<div class="col-span-full">
<h1 class="text-2xl sm:text-4xl">{{ $params.title }}</h1>
</div>

<ProjectList :projects="$params.projects" class="mt-12"/>
