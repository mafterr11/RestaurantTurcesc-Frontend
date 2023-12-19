import Image from "next/image"
import pic1 from "../../public/g1.webp"
import pic2 from "../../public/g2.webp"
import pic3 from "../../public/g3.webp"
import pic4 from "../../public/g4.webp"
import pic5 from "../../public/g5.webp"
import pic6 from "../../public/g6.webp"
import pic7 from "../../public/g7.webp"
import pic8 from "../../public/g8.webp"

export const metadata = {
    title: "Gallery - Delirium",
    description: "Gastronomic Moments Captured, Flavors through Photography, Captivating Turkish Experiences, Colorful Turkish Gastronomy, Turkish Baklava, Turkish Delight Varieties, Lahmacun",
};

const Gallery = () => {
    return (
        <div className='lg:py-[10rem] lg:px-40 pt-[4.3rem]'>
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex flex-col items-center justify-center w-full mb-20 flex-wrap">
                        <h1 className="mb-8 text-3xl">Explore Our Food</h1>
                        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-center font-normal text-xl">Step into our gallery and discover the heart of Turkey. From lively markets to exquisite crafts, each picture tells a story of our culture. Join us on a visual journey through the essence of Turkish dining.</p>
                    </div>
                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-full">
                                <Image alt="gallery" className="rounded-lg w-full object-cover h-full object-center block" priority src={pic2} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <Image alt="gallery" className="rounded-lg w-full object-cover h-full object-center block" priority src={pic1} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <Image alt="gallery" className="rounded-lg w-full object-cover h-full object-center block" priority src={pic8} />
                            </div>
                            <div className="md:p-2 p-1 w-full">
                                <Image alt="gallery" className="rounded-lg w-full h-full object-cover object-center block" src={pic3} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-full">
                                <Image alt="gallery" className="rounded-lg w-full h-full object-cover object-center block" src={pic4} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <Image alt="gallery" className="rounded-lg w-full object-cover h-full object-center block" src={pic7} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2 h-[25.8%]">
                                <Image alt="gallery" className="rounded-lg w-full object-cover h-full object-center block pb-4" src={pic6} />
                                <Image alt="gallery" className="rounded-lg w-full object-cover h-full object-center block" src={pic5} />
                            </div>

                        </div>
                    </div>
                </div>
        </div>

    )
}

export default Gallery;
