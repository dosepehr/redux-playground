import { useSelector } from 'react-redux';
const Products = () => {
    const store = useSelector((state) => state.products);
    return (
        <ul>
            {store.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    );
};

export default Products;
