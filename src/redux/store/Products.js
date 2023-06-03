import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'Products',
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            let newProduct = {
                title: action.payload,
                id: crypto.randomUUID(),
            };
            state.push(newProduct);
        },
        removeProduct: (state, action) => {
            return state.filter((product) => product.id !== action.payload);
        },
    },
});

export const { addProduct, removeProduct } = slice.actions;
export default slice.reducer;
