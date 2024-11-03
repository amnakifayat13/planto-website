
import Image from "next/image"
export default function OurBest(){
    return(
        <div className="our-best-bg">
             {/* Our Best Heading */}
      <div className="flex justify-center  ">
        <h1 className="text-slate-300 text-lg sm:text-2xl md:text-xl lg:text-6xl lg:font-semibold border-green-600 border-x-2 rounded-2xl">
          Our Best O2
        </h1>
      </div>
      <div className="best inline  md:ml-10 md:flex  md:justify-center lg:flex justify-center mt-12 md:w-[720px] lg:w-[920px] lg:h-[270px] border-x-2 border-slate-300 rounded-xl lg:ml-48">
        <Image
        src="/img1.png"
        alt=""
        width={300}
        height={500}
        className=" mt-24 ml-20 lg:-mt-16 lg:w-96 lg:h-96  "
        />
        <div className="text-slate-300 text-center md:text-left -mt-16 lg:mt-4 md:mt-24  ">
            <p className="text-md md:text-2xl"> We have Small and Best O2 Plants Collection</p>
            <p className="mt-4 ">At O₂ Plants, we believe in the power of nature<br/> to rejuvenate
             and purify. Our mission is to bring the health benefits of oxygen<br/>
             -producing plants into your everyday spaces</p>
             <p className="mt-4">With O₂ Plants, you are investing in a greener, healthier, <br/>and more serene environment.

</p>
        </div>
      </div>

        </div>
    )
}