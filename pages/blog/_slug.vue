<template>
  <div>
    <h1>
      {{ postData.title.rendered }}
    </h1>
    <div v-html="postData.content.rendered" />
  </div>
</template>

<script>
export default {
  async asyncData({ params, error, payload, store }) {
    let postData = payload
    if (!payload) postData = await store.dispatch('fetchPost', params.slug)
    return { params, postData }
  }
}
</script>

<style>
</style>
