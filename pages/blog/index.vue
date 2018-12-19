<template>
  <div>
    <h1>
      Blog
    </h1>
    <li 
      v-for="post in posts" 
      :key="post.slug">
      <a :href="post.slug">
        {{ post.title.rendered }}
      </a>
        
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
