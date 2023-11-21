import ProductList from "../components/ProductList";
import CategoryList from "../components/CategoryList";

const Products = async () => {
  return (
    <div className='bg-black/40 absolute top-0 left-0 right-0 sm:py-[10rem] sm:px-40'>
      <h1 className=' text-center text-5xl mb-24'>MENU DELIRIUM</h1>
      <div className='bg-black/60 pt-2'>
        <CategoryList />
        <ProductList />
      </div>
    </div>
  );
};

export default Products;
