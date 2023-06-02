const addProduct = 'ADD_PRODUCT';
const removeProduct = 'REMOVE_PRODUCT';

export default (state = [], action) => {
    switch (action.type) {
        case addProduct: {
            let newProduct = action.payload;
            return [...state, newProduct];
        }
        case removeProduct: {
            return [...state].filter((product) => product.id !== action.id);
        }
        default: {
            return state;
        }
    }
};

export const addProductAction = (payload) => {
    return {
        type: addProduct,
        payload,
    };
};

export const removeProductAction = (id) => {
    return {
        type: removeProduct,
        id,
    };
};
