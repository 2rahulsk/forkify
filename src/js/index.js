import * as base from './views/base';
import * as searchView from './views/searchView';
import Search from './models/Search'

const state = {
}

const getRecipeFromSearch = () => {
    //1. read the input from search text field
    const query = searchView.getItem();
    //console.log(query);
    //call the search model and pass the query to it
    state.search = new Search(query);
    search.getRecipe();
}

base.elements.search.addEventListener('submit',(e) => {
    e.preventDefault();
    getRecipeFromSearch();
})