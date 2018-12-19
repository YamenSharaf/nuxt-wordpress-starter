<template>
  <div>
    <h1>
      {{ payload.title.rendered }}
    </h1>
    <div v-html="payload.content.rendered" />
  </div>
</template>

<script>
export default {
  asyncData({ payload }) {
    let postData = payload
    return { postData }
  }
}
</script>

<style>
</style>
