import Image from "next/image";
import pic1 from "../public/home-1.jpg";
import pic2 from "../public/home-2.jpg";
export default function Home() {
  return (
    <div className='mt-[20rem]'>
      <div className='sm:px-40 sm:mb-[27rem]'>
        <div className=' max-w-[40rem] overflow-auto border-black border-opacity-86 rounded-15 rounded-md shadow-standard p-5 bg-black bg-opacity-70 text-white  sm:relative sm:border-[1px] sm:mx-12'>
          <h1 className='font-bold text-3xl text-center mb-5'>
            Welcome To Delirium Cuisine
          </h1>
          <p>
            Even though it's situated in the heart of Bucharest, neighboring the
            old town, this restaurant enjoys an intimate location with a very
            elegant and welcoming interior.The restaurant's style mixes classic
            features with Turkish influences from where the cuisine originates,
            giving customers one-of-a-kind and memorable food experiences.
          </p>
        </div>
        <div className='rotate-90 mt-1 sm:absolute sm:bottom-2 sm:right-80'>
          <Image
            src={pic1}
            quality={100}
            className='w-[250px] rounded-md sm:w-[500px] sm:border-[1px] sm:border-solid sm:border-black'
            alt='Food picture'
          />
        </div>
      </div>

      <div className='sm:px-40 sm:mb-[27rem] sm: pb-[20rem]'>
        <div className='mb-1 sm:relative sm:ml-32'>
          <Image
            src={pic2}
            quality={100}
            className='w-[400px] rounded-md sm:w-[500px] sm:border-[1px] sm:border-solid sm:border-black'
            alt='Food picture'
          />
        </div>
        <div className=' max-w-[40rem] overflow-auto border-black border-opacity-86 rounded-15 rounded-md shadow-standard p-5 bg-black bg-opacity-70 text-white  sm:absolute sm:top-[80rem] sm:right-[25rem] sm:border-[1px]'>
          <h1 className='font-bold text-3xl text-center mb-5'>
            Come Join Us!
          </h1>
          <p>
            In the traditional Turkish wood-fired oven, we cook a variety of
            delicious dishes, such as Lahmacun, Pide, or Turkish bread. If
            you're looking for a restaurant where you can enjoy a true Turkish
            feast or excellent grilled dishes in an exclusive location
          </p>
        </div>
      </div>
    </div>
  );
}
