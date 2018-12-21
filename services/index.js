import axios from 'axios'
import wpConfig from '../wordpress.config'
import { flattenArray } from '../helpers/general.helper'

export function getBlogBase() {
  if (wpConfig.https) return `https://${wpConfig.baseUrl}`
  return `http://${wpConfig.baseUrl}`
}

export function getBaseEndpoint() {
  return `${getBlogBase()}/wp-json`
}

export function getFullEndpoint(resource) {
  return `${getBaseEndpoint()}/wp/v2/${resource}`
}

export function getInitialRoutes() {
  return new Promise(async (resolve, reject) => {
    try {
      const typesResponse = await Promise.all(
        wpConfig.types.map(type => axios.get(wpConfig.apiBase + type))
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
        ...flattenArray([pages]).map(({ value: pageSlug }) => `/${pageSlug}`),
        ...flattenArray([posts]).map(
          ({ value: postSlug }) => `/article/${postSlug}`
        ),
        ...flattenArray(rest).map(({ label, value }) => `/${label}/${value}`)
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
