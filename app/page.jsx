import Image from "next/image";
import pic1 from "../public/home-1.jpg"
export default function Home() {
  return (
    <div>
      <div>
      <div className=' max-w-[40rem] overflow-auto border-2 border-black rounded-md border-opacity-86 shadow-standard p-5 rounded-15  bg-black bg-opacity-70 text-white sm:mx-60 relative'>
        <h1 className='font-bold text-3xl text-center mb-5'>Welcome To Delirium Cuisine</h1>
        <p>
          Even though it's situated in the heart of Bucharest, neighboring the
          old town, this restaurant enjoys an intimate location with a
          very elegant and welcoming interior.The restaurant's style mixes
          classic features with Turkish influences from where the cuisine
          originates, giving customers one-of-a-kind and memorable food
          experiences.
        </p>
      </div>
      <div className='rotate-90 mt-2 sm:absolute sm:bottom-2 sm:right-80'>
      <Image
        src={pic1}
        quality={100}
        className='w-[250px] rounded-md sm:w-[500px]'
        alt="Food picture"
      />
      </div>
      </div>
    </div>
  );
}

