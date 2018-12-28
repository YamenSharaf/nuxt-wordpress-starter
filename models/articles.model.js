export class Articles {
  constructor(data = []) {
    this.articles = data.reduce((map, article) => {
      map[article.slug] = article
      return map
    }, {})
  }
}
