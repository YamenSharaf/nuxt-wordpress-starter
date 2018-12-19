<template>
  <section>
    <a href="/blog"> Blog </a>
    <div>
      <logo/>
      <h1 class="title">{{ blogInfo.name }}</h1>
      <h2 class="subtitle">{{ blogInfo.description }}
      </h2>
      <div class="links">
        <nuxt-link
          v-for="(page, slug) in pages"
          :key="slug"
          :to="`/${slug}`"
          class="button--green home__link">{{ page.title.rendered }} </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Logo
  },
  computed: {
    ...mapState({
      blogInfo: 'blogInfo',
      pages: 'pages',
      flatPosts: 'flatPosts'
    })
  }
}
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.home {
  &__link {
    margin: 0 20px;
  }
}
</style>
