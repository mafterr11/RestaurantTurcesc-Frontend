import Image from "next/image";
import Link from "next/link";
import pic1 from "../public/home-1.jpg";
import pic2 from "../public/home-2.jpg";

export const metadata = {
  description: "Turkish Delirium",
  keywords: "Authentic Turkish Cuisine, Cultural Dining Experience, Turkish Delirium Menu Showcase, Fine Dining Hospitality, Gourmet Turkish Delights, Chef's Recommendations, Turkish Culinary Excellence, Explore Turkish Flavors, Restaurant's Cultural Fusion, Savor Authentic Turkish Dining",
};

export default function Home() {
  return (
    <div className='lg:py-[10rem] lg:px-40 pt-[4.3rem] bg-black/40'>
      <div className="bg-black/50 w-full py-16">
        <div className="container flex items-center justify-center flex-col mx-auto px-2 mb-24 md:mb-0 ">
          <div className="text-center w-full lg:w-2/3 ">
            <h1 className="sm:text-4xl text-3xl mb-4 font-medium">Welcome To Delirium Cuisine</h1>
            <p className="mb-8 leading-relaxed lg:text-lg">Even though it's situated in the heart of Bucharest, neighboring the
              old town, this restaurant enjoys an intimate location with a very
              elegant and welcoming interior. The restaurant's style mixes classic
              features with Turkish influences from where the cuisine originates,
              giving customers one-of-a-kind and memorable food experiences.</p>
            <Link className="btn w-2/4" href="/menu">Menu</Link>
          </div>
        </div>


        <div className="container flex md:flex-row flex-col items-center mx-auto lg:px-12 px-2 my-12 lg:gap-24">
          <div className="lg:max-w-[40rem] overflow-auto lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left lg:mb-16 md:mb-0 items-center text-center">
            <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-center ">Come Join Us!
            </h1>
            <p className=" leading-relaxed lg:text-lg">If you're looking for a restaurant where you can enjoy a true Turkish feast or excellent grilled dishes in an exclusive location, our traditional Turkish wood-fired oven creates a variety of delicious dishes, including Lahmacun, Pide, or Turkish bread, delivering authentic flavors that will delight your taste buds</p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-4/6 rotate-90 border-black/70 border-[1px] border-solid">
            <Image
              src={pic1}
              quality={100}
              placeholder='blur'
              alt='Food picture'
              className="object-cover object-center rounded-[50%]"
            />
          </div>
        </div>

        <div className="container flex md:flex-row flex-col-reverse items-center mx-auto lg:px-12 px-2 lg:mt-24 lg:gap-24 ">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full border-black/70 border-[1px] border-solid">
            <Image
              src={pic2}
              quality={100}
              placeholder='blur'
              alt='Food picture'
              className="object-cover object-center rounded-[50%]"
            />
          </div>
          <div className="lg:max-w-[60rem] overflow-auto lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start lg:mb-16 md:mb-0 mb-8 items-center md:text-left text-center">
            <h1 className="sm:text-4xl text-3xl my-4 font-medium text-center">Turkish Dining Experience
            </h1>
            <p className="leading-relaxed lg:text-lg">Step into a world of choice as you select from our finest cuts of meat, handpicked to meet your preferences. Our unique offering allows you to witness the artistry of our chefs in action as they expertly grill and prepare your chosen meat right before your eyes, infusing each dish with care and precision. Delight in the immersive experience of watching your meal come to life, adding an extra layer of excitement to your dining adventure.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
