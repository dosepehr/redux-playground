import { useSelector } from 'react-redux';
const Products = () => {
    const store = useSelector((state) => state.products);
    return (
        <ul>
            {store.map((item) => (
                <li key={crypto.randomUUID()}>{item}</li>
            ))}
        </ul>
    );
};

export default Products;
