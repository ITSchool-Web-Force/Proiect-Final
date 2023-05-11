
import Image from "next/image";

export default function Hero() {
    return (
<div className="relative z-20 flex items-center bg-white dark:bg-gray-800">
    <div className="container relative flex flex-col items-center justify-between px-6 py-8 mx-auto">
        <div className="flex flex-col">
            <h1 className="w-full text-4xl font-light text-center text-gray-800 uppercase sm:text-5xl dark:text-white">
                Taste the World's Finest
            </h1>
            <h2 className="w-full max-w-2xl py-8 mx-auto text-xl font-light text-center text-gray-500 dark:text-white">
            Our goal is to make our coffee a memorable addition to any experience, and to make the act of preparing and enjoying a cup of our coffee an experience in and of itself.
            </h2>
            <div className="flex items-center justify-center mt-4">
                <a href="#" className="px-4 py-2 mr-4 text-white uppercase bg-gray-800 border-2 border-transparent text-md hover:bg-gray-900">
                    Find more 
                </a>
            </div>
        </div>
        <div className="relative block w-full  mx-auto mt-6 md:mt-0">
            <Image src="/image/coffee9.jpg"  width={1000}
      height={500}
      alt="Picture of the author" className="object-cover w-full h-full" />
        </div>
    </div>
</div>

    )
}