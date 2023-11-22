import { getToken } from "../services/auth";
import Category from "./Category";

const fetchCategories = async () => {
    const res = await fetch("http://localhost:8080/api/v1/category/findAll", { cache: 'no-store' }, {headers: {Authorization: getToken()}});
    return await res.json();
  };

const CategoryList = async() => {
  const categories = await fetchCategories();
  return (
    <div>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  )
}

export default CategoryList
