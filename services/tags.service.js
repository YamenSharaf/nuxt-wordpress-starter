import axios from 'axios'
import { getFullEndpoint } from './index'
import { Tags } from '../models/tags.model'

export async function fetchTags() {
  const { data: tagsArray } = await axios.get(getFullEndpoint('tags'))
  const { tags } = new Tags(tagsArray)
  return tags
}

export async function fetchTagBySlug(slug) {
  const { data: tagArray } = await axios.get(
    `${getFullEndpoint('tags')}?slug=${slug}`
  )
  const [tag] = tagArray
  return tag
}
