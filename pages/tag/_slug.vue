<template>
  <div>
    <h1 class="tag-name">
      TAG : {{ tag.name }}
    </h1>
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

<style lang="scss" scoped>
.tag-name {
  font-size: 2em;
}
</style>
