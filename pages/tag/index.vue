<template>
  <div>
    <h1>
      TAGs PAGE
    </h1>
    <li 
      v-for="(tag, slug) in tags" 
      :key="slug">
      <a :href="`/tag/${slug}`"> {{ tag.name }} </a>
    </li>
  </div>
</template>

<script>
import { fetchTags } from '@/services/tags.service'

export default {
  async asyncData({ params: { slug } }) {
    const tags = await fetchTags()
    return { slug, tags }
  }
}
</script>

<style>
</style>
