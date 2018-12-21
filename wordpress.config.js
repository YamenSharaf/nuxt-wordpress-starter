import axios from 'axios'
const flat = arr => [].concat(...arr)

export const config = {
  base: 'https://yamen.vimlyhost.com/wp',
  apiVer: '/v2',
  apiBase: 'https://yamen.vimlyhost.com/wp/wp-json/wp/v2/'
}

export const types = ['pages', 'posts', 'categories', 'tags']

export function getInitialRoutes() {
  return new Promise(async (resolve, reject) => {
    try {
      const typesResponse = await Promise.all(
        types.map(type => axios.get(config.apiBase + type))
      )
      const [pages, posts, ...rest] = typesResponse.map(response =>
        response.data.map(type => {
          const value = type.slug
          const label = type.type
            ? type['type']
            : type['taxonomy'] === 'post_tag'
              ? 'tag'
              : type['taxonomy']
          return {
            value,
            label
          }
        })
      )

      const routes = [
        ...flat([pages]).map(({ value: pageSlug }) => `/${pageSlug}`),
        ...flat([posts]).map(({ value: postSlug }) => `/article/${postSlug}`),
        ...flat(rest).map(({ label, value }) => `/${label}/${value}`)
      ]
      resolve(routes)
    } catch (error) {
      reject(
        new Error(
          `Error while generating routes

          ${error.response.data.message}
          ${error}`
        )
      )
    }
  })
}

export default { config, types }
