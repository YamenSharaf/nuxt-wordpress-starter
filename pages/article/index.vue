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

export default {
  computed: {
    ...mapState({
      posts: 'posts'
    })
  }
}
</script>


<style>
</style>
