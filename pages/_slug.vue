<template>
  <div class="row">
    <div class="col-1-2">
      <h1>
        {{ page.title.rendered }}
      </h1>
    </div>
    <div class="col-1-2">
      <div v-html="page.content.rendered"/>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({
    params: { slug },
    store: {
      dispatch,
      state: { pages }
    }
  }) {
    return { page: pages[slug] }
  }
}
</script>
