export class Tags {
  constructor(data = []) {
    this.tags = data.reduce((map, tag) => {
      map[tag.slug] = tag
      return map
    }, {})
  }
}
