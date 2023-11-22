import ProductList from "./ProductList"

const Category = ({ category }) => {
  return (
    <div>
      <h1>{category.category}</h1>
      <ProductList />
    </div>
  )
}

export default Category
