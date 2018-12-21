<template>
  <div>
    <h1>
      TAG PAGE
    </h1>
    <h2>
      {{ tag.name }}
    </h2>
  </div>
</template>

<script>
import { fetchTagBySlug } from '@/services/tags.service'

export default {
  async asyncData({ params: { slug } }) {
    const tag = await fetchTagBySlug(slug)
    return { tag }
  }
}
</script>

<style>
</style>
