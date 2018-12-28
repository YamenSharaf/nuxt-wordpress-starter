import axios from 'axios'
import { getFullEndpoint } from './index'
import { Articles } from '../models/articles.model'

export async function fetchArticles() {
  const { data: articlesArray } = await axios.get(getFullEndpoint('posts'))
  const { articles } = new Articles(articlesArray)
  return articles
}

export async function fetchArticleBySlug(slug) {
  const { data: articlesArray } = await axios.get(
    `${getFullEndpoint('posts')}?slug=${slug}`
  )
  const [article] = articlesArray
  return article
}
