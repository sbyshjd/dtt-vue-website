import Axios from 'axios';

export default class RecipesDataService {
  service = Axios.create({
    baseURL: 'https://api.spoonacular.com/recipes/',
  });

  getAll() {
    return this.service
      .get('random?apiKey=3b528d02e11547d080c7879993c01d7e&number=20')
      .then((res: any) => res.data);
  }

  getRandom() {
    return this.service
      .get('random?apiKey=3b528d02e11547d080c7879993c01d7e&number=3')
      .then((res: any) => res.data);
  }
}
