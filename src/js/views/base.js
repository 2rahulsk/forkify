export const elements = {

    search: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    results : document.querySelector('.results__list'),
    resultElement : document.querySelector('.results'),
    paginationButton : document.querySelector('.results__pages')
}

const DOMStrings = {
    loader : 'loader'
}

export const stopLoader = () => {
    const loader = document.querySelector(`.${DOMStrings.loader}`);

    if(loader) {
        loader.parentElement.removeChild(loader);
    }
 
};
export const showLoader = (parent) => {

    const loader = `<div class = "loader">
                        <svg>
                            <use href="img/icons.svg#icon-cw"></use>
                        </svg>
                    </div>`;
    
    parent.insertAdjacentHTML('afterbegin',loader);
    
};