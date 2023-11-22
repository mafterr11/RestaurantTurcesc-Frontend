import CategoryList from "../components/CategoryList";

export const metadata = {
  title: "Menu - Delirium",
  description: "Turkish Delirium Menu Offerings, Authentic Turkish Dishes, Culinary Delights, Turkish Cuisine Selections, Gourmet Turkish Menu, Traditional Turkish Recipes, Chef's Specialties, Exquisite Turkish Flavors, Signature Dishes, Explore Turkish Culinary Creations",
};

const Menu = async () => {
  return (
    <div className='lg:py-[10rem] lg:px-40 pt-[4.3rem] bg-black/40'>
      <div className='bg-black/60 pt-2'>
        <h1 className=' text-center text-5xl mb-24 mt-16'>MENU DELIRIUM</h1>
        <CategoryList />
      </div>
    </div>
  );
};

export default Menu;
