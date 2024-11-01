import Image from "next/image"

export default function Main() {
    return (
        // Upper Section
        <div className="bg-img overflow-hidden">
            <div className="sm:flex sm:justify-between">
                {/* Left Section with Title, Text, and Button */}
                <div className="text-slate-300 ml-4 sm:ml-6 md:ml-10 lg:ml-20">
                    <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-6xl font-semibold pt-8 sm:pt-10 md:pt-12">
                        Breath Natural
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base mt-2">
                        Transform your space into a thriving sanctuary of green!
                    </p>
                    <button className="mt-4 border-2 border-slate-300 w-40 sm:w-48 md:w-56 h-10 rounded text-slate-300">
                        Explore
                    </button>
                </div>

                {/* Right Section with Image and Box */}
                <div className="flex justify-center md:flex flex-col items-center mt-20 sm:mt-16 md:mt-20 relative">
                    <div className="relative">
                        <Image
                            src="/img1.png"
                            alt="img1"
                            width={150}
                            height={150}
                            className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-10 sm:w-40 sm:h-40"
                        />
                        <div className="custom-box flex flex-col items-center p-4 pt-12 relative z-0 bg-slate-800 rounded-lg text-center">
                            <p className="text-xs sm:text-sm text-slate-300">Trendy House Plant</p>
                            <h2 className="text-sm sm:text-md text-slate-300">Calathea Plant</h2>
                            <button className="text-xs sm:text-sm mt-2 border border-slate-300 h-6 px-4 rounded text-slate-300">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Review Section */}
            <div className="review text-slate-300 ml-4 sm:ml-10 md:ml-20 -mt-96 md:-mt-96 sm:-mt-48 lg:-mt-96 border-slate-300 border-x-2">
                <div className="flex items-center">
                    <Image
                        className="review-img w-10 h-10 sm:w-12 sm:h-12"
                        src="/img12.png"
                        alt="img12"
                        width={50}
                        height={50}
                    />
                    <div className="ml-4 sm:ml-6 mt-2 sm:mt-4">
                        <p className="text-sm sm:text-base">Aleena Patel</p>
                        <p className="text-yellow-300 text-xs sm:text-sm md:text-base">
                            &#9733;&#9733;&#9733;&#9733;&#9733;
                        </p>
                    </div>
                </div>

                <div className="text-xs sm:text-sm ml-2 sm:ml-6 mt-2">
                    <p>
                        {  `"At Planto, we nurture every leaf to bring nature’s beauty into your home."`}
                    </p>
                </div>
            </div>

            {/* Our Trendy Plants Heading */}
            <div className="flex justify-center lg:justify-center mt-6 lg:mt-2 sm:mt-8 md:mt-10">
                <h1 className="text-slate-300 text-lg sm:text-2xl md:text-3xl lg:text-6xl lg:font-semibold border-green-600 border-x-2 rounded-2xl">
                    Our Trendy Plants
                </h1>
            </div>

            {/* plant2 and box */}
            <div className="flex justify-center lg:justify-center items-center  mt-2 md:mt-20 relative sm:ml-6">
                <div className="box-bg inline lg:flex items-center bg-opacity-70 rounded-3xl p-4 pt-12 relative z-0 lg:h-48 w-52 sm:h-96 md:w-4/5 border-slate-300 border-x-2">
                    {/* Left Section: Image */}
                    <div className="flex-shrink-0 mr-6 -mt-10 md:ml-48">
                        <Image
                            src="/img7.png"
                            alt=""
                            width={200} // Increased width
                            height={200} // Increased height
                            className="md:w-6/12 lg:w-full lg:h-96 object-cover sm:w-20 sm:h-20 md:h-48 "
                        />
                    </div>

                    {/* Right Section: Text Content */}
                    <div className="text-slate-300 flex flex-col md:ml-48 -mt-8">
                        <h2 className="text-lg md:text-2xl font-semibold">For Small Desk Ai Plant</h2>
                        <p className="mt-2 text-md text-xs">
                            Bring elegance and tranquility to any space<br/> with our lush decorative plants.
                        </p>
                        <h2 className="text-md lg:mt-4 md:text-2xl font-semibold">Rs. 599/-</h2>

                        {/* Buttons */}
                        <div className="mt-4 flex">
                            <button className="border-slate-300 border-2 text-white py-1 px-4 rounded">Explore</button>
                            <button className="border-slate-300 border-2 ml-4 text-white py-1 px-4 rounded">..</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* plant3 and box */}
            <div className="flex justify-center items-center mt-4 sm:mt-16 md:mt-8 relative ml-6">
                <div className="box-bg inline lg:flex items-center bg-opacity-70 rounded-3xl p-4 pt-12 relative  z-0 lg:h-48 w-52 sm:h-96 md:w-4/5 border-slate-300 border-x-2">
                   

                    {/* Left Section: Text Content */}
                    <div className="text-slate-300 flex flex-col md:ml-48 -mt-8 lg:ml-32 md:mt-4 lg:-mt-10">
                        <h2 className="text-lg md:text-2xl font-semibold">For Small Desk Ai Plant</h2>
                        <p className="mt-2 text-md text-xs">
                            Bring elegance and tranquility to any space<br/> with our lush decorative plants.
                        </p>
                        <h2 className="text-md lg:mt-4 md:text-2xl font-semibold">Rs. 599/-</h2>

                        {/* Buttons */}
                        <div className="mt-4 flex">
                            <button className="border-slate-300 border-2 text-white py-1 px-4 rounded">Explore</button>
                            <button className="border-slate-300 border-2 ml-4 text-white py-1 px-4 rounded">..</button>
                        </div>
                    </div>
                     {/* Right Section: Image */}
                     <div className="flex-shrink-0 mr-6 mt-4 md:ml-60 ">
                        <Image
                            src="/img8.png"
                            alt=""
                            width={200} // Increased width
                            height={200} // Increased height
                            className="md:w-6/12 lg:w-full lg:h-96 object-cover sm:w-20 sm:h-20 md:h-48 "
                        />
                    </div>
                </div>
            </div>
            
        </div>
    )
}
