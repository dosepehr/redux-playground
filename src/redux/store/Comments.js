const addComment = 'ADD_COMMENT';
const removeComment = 'REMOVE_COMMENT';

export default (state = [], action) => {
    switch (action.type) {
        case addComment: {
            let newComment = action.payload;
            return [...state, newComment];
        }
        case removeComment: {
            return [...state].filter((comment) => comment.id !== action.id);
        }
        default: {
            return state;
        }
    }
};

export const addCommentAction = (payload) => {
    return {
        type: addComment,
        payload,
    };
};

export const removeCommentAction = (id) => {
    return {
        type: removeComment,
        id,
    };
};
