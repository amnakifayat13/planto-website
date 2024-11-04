import Image from "next/image"
export default function Review(){
    return(
        <div className="review-bg">
             {/* Customer Review Heading */}
      <div className="flex justify-center  ">
        <h1 className="text-slate-300 text-lg sm:text-2xl md:text-xl lg:text-6xl lg:font-semibold border-green-600 border-x-2 rounded-2xl">
          Customer Review
        </h1>
      </div>
          {/* Review Section */}
<div className="grid grid-cols-1 justify-center ml-[30px] sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-8">
    <div className="review1 text-slate-300 p-4 border-slate-300 border-x-2 rounded-lg">
        <div className="flex items-center w-48">
            <Image
                className="review-img1 w-12 h-12 md:w-16 md:h-16"
                src="/img10.png"
                alt="img12"
                width={50}
                height={50}
            />
            <div className="ml-4">
                <p className="text-sm md:text-base">Maxn Raval</p>
                <p className="text-yellow-300 text-xs md:text-sm">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            </div>
        </div>
        <div className="text-xs md:text-sm -mt-4">
            <p>At Planto, we nurture every leaf to bring nature’s beauty into your home.</p>
        </div>
    </div>

    <div className="review1 text-slate-300 p-4 border-slate-300 border-x-2 rounded-lg">
        <div className="flex items-center">
            <Image
                className="review-img1 w-12 h-12 md:w-16 md:h-16"
                src="/img9.png"
                alt="img12"
                width={50}
                height={50}
            />
            <div className="ml-4">
                <p className="text-sm md:text-base">Venely K</p>
                <p className="text-yellow-300 text-xs md:text-sm">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            </div>
        </div>
        <div className="text-xs md:text-sm -mt-4">
            <p>At Planto, we nurture every leaf to bring nature’s beauty into your home.</p>
        </div>
    </div>

    <div className="review1 text-slate-300 p-4 border-slate-300 border-x-2 rounded-lg">
        <div className="flex items-center">
            <Image
                className="review-img1 w-12 h-12 md:w-16 md:h-16"
                src="/img11.png"
                alt="img12"
                width={100}
                height={100}
            />
            <div className="ml-4">
                <p className="text-sm md:text-base">Lii Thakur</p>
                <p className="text-yellow-300 text-xs md:text-sm">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            </div>
        </div>
        <div className="text-xs md:text-sm -mt-4">
            <p>At Planto, we nurture every leaf to bring nature’s beauty into your home.</p>
        </div>
    </div>
</div>

        </div>
    )
}