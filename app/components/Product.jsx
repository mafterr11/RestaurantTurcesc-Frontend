import Image from "next/image";

const Product = ({ product }) => {
  return (
    <div className='my-12 px-24 pt-6'>
      <div className='text-white'>
        <div className='flex justify-between'>
          <div>
            <h3>{product.name}</h3>
          </div>
          <p className='text-lg'>{product.price} RON</p>
        </div>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default Product;
