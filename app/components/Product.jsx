import Image from "next/image";

const Product = ({ product }) => {
  return (
    <div className='text-white bg-black/40 absolute top-0 bottom-0 right-0 left-0'>
      <div>
        <div>
          <Image />
        </div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>{product.quantity}</p>
      </div>
    </div>
  );
};

export default Product;
