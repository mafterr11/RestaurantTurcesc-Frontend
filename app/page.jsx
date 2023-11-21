import Image from "next/image";
import Link from "next/link";
import pic1 from "../public/home-1.jpg";
import pic2 from "../public/home-2.jpg";

export default function Home() {
  return (
    <div className='lg:py-[10rem] lg:px-40 py-[4.3rem] bg-black/40'>
      <div className="bg-black/50 w-full pt-16">
        <div class="container flex items-center justify-center flex-col mx-auto px-2 text-white ">
          <div class="text-center w-full lg:w-2/3 ">
            <h1 class="sm:text-4xl text-3xl mb-4 font-medium">Welcome To Delirium Cuisine</h1>
            <p class="mb-8 leading-relaxed lg:text-lg">Even though it's situated in the heart of Bucharest, neighboring the
              old town, this restaurant enjoys an intimate location with a very
              elegant and welcoming interior.The restaurant's style mixes classic
              features with Turkish influences from where the cuisine originates,
              giving customers one-of-a-kind and memorable food experiences.</p>
            <Link class="btn w-2/4 border-[2px] border-black" href="/menu">Menu</Link>
          </div>
        </div>


        <div class="container flex md:flex-row flex-col items-center mx-auto lg:px-12 my-20 gap-24 text-white">
          <div class="lg:max-w-[40rem] overflow-auto lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="sm:text-4xl text-3xl mb-4 font-medium text-center ">Come Join Us!
            </h1>
            <p class="mb-8 leading-relaxed lg:text-lg">In the traditional Turkish wood-fired oven, we cook a variety of
              delicious dishes, such as Lahmacun, Pide, or Turkish bread. If
              you're looking for a restaurant where you can enjoy a true Turkish
              feast or excellent grilled dishes in an exclusive location</p>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 rotate-90">
          <Image
              src={pic1}
              quality={100}
              placeholder="blur"
              alt='Food picture'
              className="object-cover object-center rounded"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
}
