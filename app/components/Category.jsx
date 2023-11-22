import ProductList from "./ProductList"

const Category = ({ category }) => {
  return (
    <div>
      <h1>{category.category.replace("_", " ")}</h1>
      <ProductList category={category.category} />
    </div>
  )
}

export default Category
