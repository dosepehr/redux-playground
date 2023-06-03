import { useSelector, useDispatch } from 'react-redux';
import { removeProduct } from './redux/store/Products';

const Products = () => {
    const dispatch = useDispatch();
    const store = useSelector((state) => state.products);
    return (
        <ul>
            {store.map((item) => (
                <li
                    key={item.id}
                    onClick={() => dispatch(removeProduct(item.id))}
                >
                    {item.title}
                </li>
            ))}
        </ul>
    );
};

export default Products;
