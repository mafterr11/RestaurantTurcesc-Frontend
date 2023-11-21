import Product from "../components/Product";
import { getToken } from "../services/auth";

const fetchProducts = async () => {
  const res = await fetch("http://localhost:8080/api/v1/products/findAll", { cache: 'no-store' }, {headers: {Authorization: getToken()}});
  return await res.json();
};

const Products = async () => {
  
  const products = await fetchProducts();
  return (
    <div className="bg-black/40 absolute top-0 left-0 right-0 sm:py-[10rem] sm:px-40">
        <h1 className="text-white text-center text-5xl mb-24">MENU DELIRIUM</h1>
      <div className='bg-black/60 pt-2'>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      </div>
    </div>
  );
};

export default Products;
