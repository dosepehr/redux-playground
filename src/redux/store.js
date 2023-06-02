import { createStore, combineReducers } from 'redux';

import articlesReducer from './store/Articles';
import commentReducer from './store/Comments';
import productsReducer from './store/Products';

const store = createStore(
    combineReducers({
        productsReducer,
        commentReducer,
        articlesReducer,
    })
);

export default store;
