import { getToken } from "../services/auth";
import Product from "../components/Product";

const fetchProducts = async (category) => {
  const res = await fetch(`http://localhost:8080/api/v1/products/category/${category}`,
    { cache: 'no-store' }, { headers: { Authorization: getToken() } });
  return await res.json();
};

const ProductList = async ({ category }) => {
  const products = await fetchProducts(category);
  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList;
