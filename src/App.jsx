import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    addProductAction,
    getProductsFromServerAction,
} from './redux/store/Products';
import './App.css';
import Products from './Products';
export default function App() {
    const dispatch = useDispatch();
    const [productName, setProductName] = useState('');

    return (
        <>
            <h1>React-Redux</h1>
            <input
                type='text'
                name=''
                id=''
                onChange={(e) => setProductName(e.target.value)}
            />
            <button onClick={() => dispatch(addProductAction(productName))}>
                add product
            </button>
            <button
                onClick={() =>
                    dispatch(
                        getProductsFromServerAction(
                            'https://fakestoreapi.com/products'
                        )
                    )
                }
            >
                get data from API
            </button>
            <Products />
        </>
    );
}

