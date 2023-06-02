const addProduct = 'ADD_PRODUCT';
const removeProduct = 'REMOVE_PRODUCT';
const getProductsSuccess = 'GET_PRODUCTS_SUCCESS';

export default (state = [], action) => {
    switch (action.type) {
        case addProduct: {
            let newProduct = action.payload;
            return [...state, newProduct];
        }
        case removeProduct: {
            return [...state].filter((product) => product.id !== action.id);
        }
        case getProductsSuccess: {
            return [...state, ...action.payload];
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

export const getProductsSuccessAction = (data) => {
    return {
        type: getProductsSuccess,
        payload: data,
    };
};
export const getProductsFromServerAction = (url) => {
    return (dispatch, getState) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => dispatch(getProductsSuccessAction(data)));
    };
};
