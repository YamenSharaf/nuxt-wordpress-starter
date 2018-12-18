<template>
  <div class="row">
    <div class="col-1-2">
      <h1>
        {{ pageData.title.rendered }}
      </h1>
    </div>
    <div class="col-1-2">
      <div v-html="pageData.content.rendered"/>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, error, payload, store }) {
    let pageData = payload
    if (!payload) pageData = await store.dispatch('fetchPage', params.slug)
    return { params, pageData }
  }
}
</script>
