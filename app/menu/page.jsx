import ProductList from "../components/ProductList";
import CategoryList from "../components/CategoryList";

const Products = async () => {
  return (
    <div className='lg:py-[10rem] lg:px-40 pt-[4.3rem] bg-black/40'>
      <div className='bg-black/60 pt-2'>
      <h1 className=' text-center text-5xl mb-24 mt-16'>MENU DELIRIUM</h1>
        <CategoryList />
        <ProductList />
      </div>
    </div>
  );
};

export default Products;
