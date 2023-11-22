import ProductList from "./ProductList"

const Category = ({ category }) => {
  return (
    <div>
      <h1 className="md:pt-12 text-3xl text-center underline underline-offset-[0.7rem]">{category.category.replace("_", " ")}</h1>
      <ProductList category={category.category} />
    </div>
  )
}

export default Category
