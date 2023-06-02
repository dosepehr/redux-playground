const addProduct = 'ADD_PRODUCT';
const removeProduct = 'REMOVE_PRODUCT';

export default reducer = (state = [], action) => {
    switch (action.type) {
        case addProduct: {
            let newProduct = action.payload;
            return [...state, newProduct];
        }
        case removeProduct: {
            return [...state].filter((product) => product.id !== action.id);
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
