import Image from "next/image";


export default function Footer() {
  return (
    <div className="footer flex flex-col items-center gap-0 md:flex-row md:gap-4 lg:gap-24 bg-slate-900 p-4 ">
      {/* Logo and Description Section */}
      <div className="flex flex-col items-center text-center md:items-start md:text-left lg:ml-10">
        <div>
          <Image
            src="/plant 2.png"
            alt=""
            width={100}
            height={100}
            className=""
          />
        </div>
        <h2 className="text-slate-300 text-2xl mt-2 font-semibold">Planto</h2>
        <p className="text-slate-300 mt-2 text-xs lg:text-lg ">
          At Planto, we are passionate about bringing
          <br /> the beauty and benefits of nature into your home.
        </p>
      </div>

      {/* Quick Links Section */}
      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <h2 className="text-slate-300 font-semibold ml-6 lg:ml-20">Quick Links</h2>
        <ul className="text-slate-300 ml-6 lg:ml-20 space-y-1">
          <li>Home</li>
          <li>Types of Plants</li>
          <li>Contact</li>
          <li>Privacy</li>
        </ul>
      </div>

      {/* Subscription Section */}
      <div className="flex flex-col md:flex md:flex-col items-center text-center md:items-start md:text-left w-full md:w-1/3">
        <h2 className="text-slate-300 font-semibold ml-6">For Every Update</h2>
        <div className="w-full max-w-xs md:max-w-sm mt-4 ml-2">
          <form action="/subscribe" method="post" className="flex flex-col md:flex-row">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-950"
              required
            />
            <button
              type="submit"
              className="mt-2 md:mt-0 md:ml-2 text-slate-950 px-4 py-2 bg-green-800 rounded-lg hover:bg-green-950 hover:text-slate-300 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
        <p className="text-slate-300 mb-6 mt-20">Planto all rights reserved</p>
      </div>
    </div>
  );
}
