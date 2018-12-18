<template>
  <div>
    <h1>
      SLUG {{ params.slug }} {{ payload.title.rendered }}
    </h1>
    <p v-html="payload.content.rendered"/>
  </div>
</template>

<script>
export default {
  asyncData({ params, error, payload }) {
    return { params, payload }
  }
}
</script>
