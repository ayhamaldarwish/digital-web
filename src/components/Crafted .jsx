import { useEffect } from "react";
import { about } from "../assets";
import AOS from "aos";
import "aos/dist/aos.css"; // استيراد ملف الأنيميشن

const Crafted = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" }); // تهيئة AOS
  }, []);

  return (
    <div className="bg-[#090E34] py-14">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* الجزء الأول */}
        <div
          className="text-white ml-5"
          data-aos="fade-right" // تأثير دخول من اليمين
        >
          <h1 className="text-4xl font-bold mb-6">
            Crafted for Startup, SaaS and Business Sites.
          </h1>
          <p className="mb-8 text-gray-300 ">
            The main ‘thrust’ is to focus on educating attendees on how to best
            protect highly vulnerable business applications with interactive
            panel discussions and roundtables.
          </p>

          {/* القوائم */}
          <div className="grid grid-cols-2 gap-4">
            <div data-aos="fade-up">
              <p className="mb-2">✅ Premium quality</p>
              <p className="mb-2">✅ No code required</p>
              <p>✅ Use for lifetime</p>
            </div>
            <div data-aos="fade-up">
              <p className="mb-2">✅ Regular updates</p>
              <p className="mb-2">✅ Rich documentation</p>
              <p>✅ Developer friendly</p>
            </div>
          </div>
        </div>

        {/* الجزء الثاني */}
        <div className="flex justify-center" data-aos="fade-left">
          <img
            src={about}
            alt="About Us"
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      </div>
      <p className="h-[1px] w-full my-10 bg-gray-700"></p>
    </div>
  );
};

export default Crafted;
