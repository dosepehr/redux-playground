import { createStore, combineReducers } from 'redux';

import productsReducer from './store/Products';
import articlesReducer from './store/Articles';
import commentReducer from './store/Comments';

const store = createStore(
    combineReducers({
        products: productsReducer,
        articles: articlesReducer,
        comments: commentReducer,
    })
);

export default store;
