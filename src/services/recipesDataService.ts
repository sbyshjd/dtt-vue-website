import Axios from 'axios';

export default class RecipesDataService {
  service = Axios.create({
    baseURL: 'https://api.spoonacular.com/recipes/',
  });

  getAll(cuisine: string) {
    return this.service
      .get(`complexSearch/?apiKey=3b528d02e11547d080c7879993c01d7e&cuisine=${cuisine}&number=10`)
      .then((res: any) => res.data);
  }
}
