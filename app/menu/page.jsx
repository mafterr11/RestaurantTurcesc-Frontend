// import { useEffect, useState } from "react";
// import Product from "../components/Product";

const Products = async () => {
  // PRIMA METODA

  const fetchProducts = async () => {
    const res = await fetch("https://jsonplaceholder.typico.com/posts");
    return await res.json();
  };
  const posts = await fetchProducts();

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
      {posts.map((post) => {
        return <p>{post.title}</p>;
      })}
      {/* {products.map((product) => (
        <Product product={product} />
      ))} */}
    </div>
  );
};

export default Products;
