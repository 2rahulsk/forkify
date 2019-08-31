import * as base from './views/base';
import * as searchView from './views/searchView';
import Search from './models/Search'

const state = {
}

const getRecipeFromSearch = async() => {

        //1. read the input from search text field
        const query = searchView.getItem();
        
        if(query) {
            
            //call the search model and pass the query to it
        state.search = new Search(query);
        
        //clears the input and the html content
        searchView.clearInput();
        searchView.clearRecipeContent();
        base.showLoader(base.elements.resultElement);
        await state.search.getRecipe();
        base.stopLoader();
        searchView.renderRecipes(state.search.recipes,1);
    }
    
}

base.elements.search.addEventListener('submit',(e) => {
    e.preventDefault();
    getRecipeFromSearch();
});

base.elements.paginationButton.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-inline');
    console.log(btn);
    if(btn) {
        console.log(btn.dataset.goto);
        const page = parseInt(btn.dataset.goto,10);
        searchView.clearRecipeContent();
        searchView.renderRecipes(state.search.recipes,page);
    }
});