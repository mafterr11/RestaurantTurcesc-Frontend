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
    <div className='lg:py-[10rem] lg:px-40 pt-[4.3rem]'>
      <div className=" w-full py-16">
        <div className="container flex items-center justify-center flex-col mx-auto px-2 mb-24 md:mb-0">
          <div className="text-center w-full lg:w-2/3 ">
            <h1 className="sm:text-4xl text-3xl mb-4 font-medium">Welcome To <span className="text-accent">Delirium Cuisine</span></h1>
            <p className="mb-8 leading-relaxed lg:text-lg">Even though it's situated in the heart of <span className="text-accent">Bucharest</span>, neighboring the
              old town, this restaurant enjoys an <span className="text-accent">intimate location</span> with a very
              elegant and welcoming interior. The restaurant's style mixes classic
              features with <span className="text-accent">Turkish influences</span> from where the cuisine originates,
              giving customers one-of-a-kind and <span className="text-accent">memorable</span> food experiences.</p>
            <Link className="btn w-2/4 hover:bg-black hover:text-white transition-all ease-in-out duration-300" href="/menu">Menu</Link>
          </div>
        </div>


        <div className="container flex md:flex-row flex-col items-center mx-auto lg:px-12 px-2 my-12 lg:gap-24">
          <div className="lg:max-w-[40rem] overflow-auto lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left lg:mb-16 md:mb-0 items-center text-center">
            <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-center ">Come <span className="text-accent">Join</span> Us!
            </h1>
            <p className=" leading-relaxed lg:text-lg">If you're looking for a restaurant where you can enjoy a true <span className="text-accent">Turkish feast</span> or excellent grilled dishes in an exclusive location, our traditional <span className="text-accent">Turkish wood-fired</span> oven creates a variety of delicious dishes, including Lahmacun, Pide, or Turkish bread, delivering <span className="text-accent">authentic flavors</span> that will delight your taste buds</p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-4/6 rotate-90 ">
            <Image
              src={pic1}
              quality={100}
              placeholder='blur'
              alt='Food picture'
              className="object-cover object-center rounded"
            />
          </div>
        </div>

        <div className="container flex md:flex-row flex-col-reverse items-center mx-auto lg:px-12 px-2 lg:mt-24 lg:gap-24 ">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
            <Image
              src={pic2}
              quality={100}
              placeholder='blur'
              alt='Food picture'
              className="object-cover object-center rounded"
            />
          </div>
          <div className="lg:max-w-[60rem] overflow-auto lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start lg:mb-16 md:mb-0 mb-8 items-center md:text-left text-center">
            <h1 className="sm:text-4xl text-3xl my-4 font-medium text-center"><span className="text-accent">Turkish</span> Dining Experience
            </h1>
            <p className="leading-relaxed lg:text-lg"><span className="text-accent">Step</span> into a world of choice as you select from our <span className="text-accent">finest cuts</span> of meat, handpicked to meet your preferences. Our unique offering allows you to witness the artistry of our chefs in action as they expertly grill and prepare your <span className="text-accent">chosen meat</span> right before your eyes, infusing each dish with care and precision.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
