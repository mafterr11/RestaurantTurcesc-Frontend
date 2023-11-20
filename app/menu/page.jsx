import Product from "../components/Product";
import { isLoggedIn, getToken } from "../services/auth";

const fetchProducts = async () => {
  const res = await fetch("http://localhost:8080/api/v1/products/findAll", { cache: 'no-store' });
  // console.log(res);
  return await res.json();
};

const Products = async () => {
  // PRIMA METODA
  const products = await fetchProducts();

  console.log(isLoggedIn());
  console.log(getToken());

  // A DOUA METODA
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const productsFromServer = await fetchProducts();
  //     setProducts(productsFromServer);
  //   };
  //   getProducts();
  // }, []);

  // const fetchProducts = async () => {
  //   const res = await fetch("http://localhost:8080/api/v1/products");
  //   return await res.json();
  // };
  return (
    <div>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
};

export default Products;
