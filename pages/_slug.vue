<template>
  <h1>
    SLUG {{ params.slug }} {{ payload.title.rendered }}
  </h1>
</template>

<script>
export default {
  asyncData({ params, error, payload }) {
    return { params, payload }
  }
}
</script>
