import Image from "next/image"
import pic1 from "../../public/g1.jpg"
import pic2 from "../../public/g2.jpg"
import pic3 from "../../public/g3.jpg"
import pic4 from "../../public/g4.jpg"
import pic5 from "../../public/g5.jpg"
import pic6 from "../../public/g6.jpg"
import pic7 from "../../public/g7.jpg"
import pic8 from "../../public/g8.jpg"
import pic9 from "../../public/g9.jpg"

const page = () => {
    return (
        <div className='lg:py-[10rem] lg:px-40 pt-[4.3rem] bg-black/40'>
            <div className="bg-black/60">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex w-full mb-20 flex-wrap">
                        <h1 className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-center font-normal">Step into our gallery and discover the heart of Turkey. From lively markets to exquisite crafts, each picture tells a story of our culture. Join us on a visual journey through the essence of Turkish dining.</h1>
                    </div>
                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-full">
                                <Image alt="gallery" quality={100} className="w-full object-cover h-full object-center block" src={pic9} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <Image alt="gallery" quality={100} className="w-full object-cover h-full object-center block" src={pic1} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <Image alt="gallery" quality={100} className="w-full object-cover h-full object-center block" src={pic8} />
                            </div>
                            <div className="md:p-2 p-1 w-full">
                                <Image alt="gallery" quality={100} className="w-full h-full object-cover object-center block" src={pic3} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-full">
                                <Image alt="gallery" quality={100} className="w-full h-full object-cover object-center block" src={pic4} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <Image alt="gallery" quality={100} className="w-full object-cover h-full object-center block" src={pic7} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2 h-[25.8%]">
                                <Image alt="gallery" quality={100} className="w-full object-cover h-full object-center block pb-4" src={pic6} />
                                <Image alt="gallery" quality={100} className="w-full object-cover h-full object-center block" src={pic5} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default page
