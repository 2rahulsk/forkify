
import axios from 'axios';

export default class Search {

    constructor(query) {
        this.query = query;
    }

    async getRecipe(){
        const key = '7060f185ba016c98a70366f73c90a5aa';
        const result = await (axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`));

        console.log(result.data.recipes);
    }
}