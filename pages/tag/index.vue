<template>
  <div>
    <h1>
      TAGs PAGE
    </h1>
    <li 
      v-for="(tag, slug) in tags" 
      :key="slug">
      <nuxt-link :to="`/tag/${slug}`"> {{ tag.name }} </nuxt-link>
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
