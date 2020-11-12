import Axios from 'axios';

export default class RecipesDataService {
  service = Axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1/',
  });

  getAll() {
    return this.service
      .get('filter.php?c=Seafood')
      .then((res: any) => res.data);
  }

  getByIngredient(ingredient: string) {
    return this.service
      .get(`filter.php?i=${ingredient}`)
      .then((res: any) => res.data);
  }

  /*
  *the API could get the recipes by area or by category.
  *So we make the getSimilar function by using this two API queries.
  *The recipes we get from the API have the same area or the same category as the one we click.
  *To make the getSimilar function more random, each time we call this function,
  *we randomly choose one of these two API queries.
  */
  getSimilar(area: string, category: string) {
    if (Math.random() >= 0.5) {
      return this.service
        .get(`filter.php?a=${area}`)
        .then((res: any) => res.data);
    }
    return this.service
      .get(`filter.php?c=${category}`)
      .then((res: any) => res.data);
  }

  getRandom() {
    return this.service
      .get('random.php')
      .then((res: any) => res.data);
  }

  getInfoById(id: string) {
    return this.service
      .get(`lookup.php?i=${id}`)
      .then((res: any) => res.data);
  }
}
