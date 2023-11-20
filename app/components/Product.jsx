import Image from "next/image";

const Product = ({ product }) => {
  return (
    <div>
      <div className="text-white">
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
