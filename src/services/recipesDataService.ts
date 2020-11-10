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
