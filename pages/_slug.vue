<template>
  <div class="row">
    <div class="col-1-2">
      <h1>
        {{ payload.title.rendered }}
      </h1>
    </div>
    <div class="col-1-2">
      <div v-html="payload.content.rendered"/>
    </div>
  </div>
</template>

<script>
export default {
  asyncData({ params, error, payload }) {
    return { params, payload }
  }
}
</script>
