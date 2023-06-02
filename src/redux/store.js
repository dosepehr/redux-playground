import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

import productsReducer from './store/Products';
import articlesReducer from './store/Articles';
import commentReducer from './store/Comments';
const store = createStore(
    combineReducers({
        products: productsReducer,
        articles: articlesReducer,
        comments: commentReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
