<template>
  <div>
    <h1>
      {{ post.title.rendered }}
    </h1>
    <div v-html="post.content.rendered" />
  </div>
</template>

<script>
export default {
  async asyncData({
    params: { slug },
    store: {
      dispatch,
      state: { posts }
    }
  }) {
    return { post: posts[slug] }
  }
}
</script>

<style>
</style>
