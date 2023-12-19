const Product = ({ product }) => {
  return (
    <div className='my-12 md:px-24 px-2 pt-6'>
      <div>
        <div className='flex justify-between items-baseline'>
          <div className="whitespace-nowrap md:text-xl">
            <h3>{product.name}</h3>
          </div>
          <div className='dots'/>
          <div className="whitespace-nowrap">
            <p className='text-lg'>{product.price} RON</p>
          </div>
        </div>
        <div className="text-accent">
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;

