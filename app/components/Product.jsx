const Product = ({ product }) => {
  return (
    <div className='my-12 px-24 pt-6'>
      <div>      
        <div className='flex justify-between'>
          <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
          <p className='text-lg'>{product.price} RON</p>
        </div>
        <span className='block h-[2px] w-full decoration-dashed bg-white content-none'></span>
      </div>
    </div>
  );
};

export default Product;

