import Product from "../components/Product";
import { isLoggedIn, getToken } from "../services/auth";

const fetchProducts = async () => {
  const res = await fetch("http://localhost:8080/api/v1/products/findAll", { cache: 'no-store' }, {headers: {Authorization: getToken()}});
  return await res.json();
};

const Products = async () => {
  const products = await fetchProducts();
  // console.log(isLoggedIn());
  // console.log(getToken());
  return (
    <div>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
};

export default Products;
