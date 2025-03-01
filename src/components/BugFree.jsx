import { useEffect } from "react";
import { about2 } from "../assets";
import AOS from "aos";
import "aos/dist/aos.css"; // استيراد مكتبة AOS

const Data = [
  {
    id: 1,
    title: "Bug free code",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "Premier support",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Regular updates",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const BugFree = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" }); // تهيئة AOS
  }, []);

  return (
    <div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 ">
        {/* الصورة */}
        <div data-aos="fade-right ml-5">
          <img src={about2} alt="Bug free code" className="max-w-full h-auto ml-5" />
        </div>

        {/* النصوص */}
        <div className="flex flex-col items-center" data-aos="fade-left">
          {Data.map((item) => (
            <div key={item.id} data-aos="fade-up">
              <h1 className="text-3xl font-bold my-6">{item.title}</h1>
              <p className="text-gray-400 text-sm max-w-[400px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BugFree;
