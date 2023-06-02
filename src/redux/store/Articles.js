const addArticle = 'ADD_ARTICLE';
const removeArticle = 'REMOVE_ARTICLE';

export default (state = [], action) => {
    switch (action.type) {
        case addArticle: {
            let newArticle = action.payload;
            return [...state, newArticle];
        }
        case removeArticle: {
            return [...state].filter((article) => article.id !== action.id);
        }
        default: {
            return state;
        }
    }
};

export const addArticleAction = (payload) => {
    return {
        type: addArticle,
        payload,
    };
};

export const removeArticleAction = (id) => {
    return {
        type: removeArticle,
        id,
    };
};
