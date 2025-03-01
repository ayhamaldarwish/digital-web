import { useEffect } from "react";
import { hero } from "../assets";
import AOS from "aos";
import "aos/dist/aos.css"; // استيراد ملف الأنيميشن

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out" }); // تهيئة AOS
  }, []);

  return (
    <div className="container mx-auto flex py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        {/* الجزء الأول */}
        <div
          className="flex flex-col ml-5"
          data-aos="fade-right" // تأثير الأنيميشن للجزء الأول
        >
          <h1 className="text-3xl font-bold">
            Tailwind Template for NFT Marketplace and Web3 Platforms
          </h1>
          <p className="mt-4 text-gray-600">
            Template for NFT, Token, and Web3 marketplace projects, based on
            Tailwind CSS. Comes with all the essential UI components and pages
            you need to build an NFT marketplace or all sorts of Web3 platforms.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Explore Now
            </button>
            <button className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300">
              Upload Your Arts
            </button>
          </div>
        </div>

        {/* الجزء الثاني */}
        <div
          className="flex justify-center items-center"
          data-aos="fade-left" // تأثير الأنيميشن للجزء الثاني
        >
          <img src={hero} alt="Hero Section" className="max-w-full h-auto" />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
