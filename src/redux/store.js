import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './store/Products';
import articlesReducer from './store/Articles';
import commentReducer from './store/Comments';
const store = configureStore({
    reducer: {
        products: productsReducer,
        articles: articlesReducer,
        comments: commentReducer,
    },
});

export default store;
