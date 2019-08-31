import * as base from './base';

export const getItem = () => base.elements.searchInput.value;

export const clearInput = () => {

    base.elements.searchInput.value = '';
};

export const clearRecipeContent = () => {

    base.elements.results.innerHTML = '';
    base.elements.paginationButton.innerHTML = '';
};

const limitRecipeName = (name,limit = 17) => {
    const newTitle = []; // declaring array and object as const, 
                        // but we could stille mutate the values

    if(name.length > 17) {

        const arr = name.split(' ');

        arr.reduce((acc,cur) => {

            if(acc + cur.length <= limit) {
                newTitle.push(cur);
            } 
            return acc + cur.length;
        },0);
        return `${newTitle.join(' ')}...`;
    }
};

const renderRecipe = (recipe) => {

    const markup = `<li>
                <a class="results__link " href="${recipe.recipe_id}">
                    <figure class="results__fig">
                        <img src="${recipe.image_url}" alt="${limitRecipeName(recipe.title)}">
                    </figure>
                    <div class="results__data">
                        <h4 class="results__name">${limitRecipeName(recipe.title)}</h4>
                        <p class="results__author">${recipe.publisher}</p>
                    </div>
                </a>
                 </li>
                `;
    base.elements.results.insertAdjacentHTML('beforeend',markup);
};

const createButtons = (page,type) => `
                <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page-1 : page + 1} >
                <span>Page ${type === 'prev' ? page-1 : page + 1}</span>
                <svg class="search__icon">
                    <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
                </svg>
                </button>
            `;

const renderButtons = (page,results,resultsPerPage) => {
    const pages = Math.ceil(results/resultsPerPage);
    let button;
    if(page === 1 && pages > 1) {
        // show only one button to go to next page
       button = createButtons(page,'next');
    } else if (page < pages) {
        // show both buttons
       button =  `${createButtons(page,'prev')}
         ${createButtons(page,'next')}`;
    } else if(page === pages && pages > 1) {
        // show only one button to go to previous page
        button = createButtons(page,'prev');
    }
    base.elements.paginationButton.insertAdjacentHTML('afterbegin',button);
};

export const renderRecipes = (recipes,page, resultsPerPage = 10) => {

    const start = (page-1)*resultsPerPage;
    const end = resultsPerPage*page;
    recipes.slice(start,end).forEach(renderRecipe);

    //render Buttons for pagination
    renderButtons(page,recipes.length,resultsPerPage)
};