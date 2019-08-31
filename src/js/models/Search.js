//ba8b5947170b36d01664857834d365c4
//7060f185ba016c98a70366f73c90a5aa
import axios from 'axios';

export default class Search {

    constructor(query) {
        this.query = query;
    }

    async getRecipe(){
  
        const key = 'ba8b5947170b36d01664857834d365c4';
        const result = await (axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`));
        this.recipes = result.data.recipes;
        console.log(this.recipes);
    }
}