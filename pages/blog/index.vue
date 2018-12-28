<template>
  <div>
    <h1>
      Blog
    </h1>
    <li 
      v-for="(post, slug) in posts" 
      :key="slug">
      <nuxt-link :to="`/article/${slug}`">
        {{ post.title.rendered }}
      </nuxt-link>
        
    </li>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { fetchArticles } from '@/services/articles.service'

export default {
  async asyncData({
    store: {
      state: { posts: storedArticles }
    }
  }) {
    let articles = {}
    if (Object.keys(storedArticles).length > 0) {
      articles = storedArticles
    } else {
      articles = await fetchArticles()
    }
    return { articles }
  },
  computed: {
    ...mapState({
      posts: 'posts'
    })
  }
}
</script>


<style>
</style>
