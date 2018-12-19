const pkg = require('./package')
import axios from 'axios'

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Environment variables
  */
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    baseEndpoint: 'https://yamen.vimlyhost.com/wp/wp-json/',
    baseVersion: 'wp/v2'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['@/style/app.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    https: true
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    routes: async function() {
      const { data: pagesReq } = await axios.get(
        'https://yamen.vimlyhost.com/wp/wp-json/wp/v2/pages'
      )
      const { data: postsReq } = await axios.get(
        'https://yamen.vimlyhost.com/wp/wp-json/wp/v2/posts'
      )
      const pages = pagesReq.map(page => {
        return {
          route: `/${page.slug}`,
          payload: page
        }
      })
      const posts = postsReq.map(post => {
        return {
          route: `/blog/${post.slug}`,
          payload: post
        }
      })
      return [...pages, ...posts]
    }
  }
}
