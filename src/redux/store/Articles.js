const addArticle = 'ADD_ARTICLE';
const removeArticle = 'REMOVE_ARTICLE';

export default reducer = (state = [], action) => {
    switch (action.type) {
        case addArticle: {
            let newArticle = action.payload;
            return [...state, newArticle];
        }
        case removeArticle: {
            return [...state].filter((Article) => Article.id !== action.id);
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
