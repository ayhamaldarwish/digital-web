import { useEffect } from "react";
import ReactPlayer from "react-player";
import bgImage from "../assets/shape.svg";// Correctly import the image
import AOS from "aos";
import "aos/dist/aos.css"; // استيراد ملف الأنيميشن

const Video = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" }); // تهيئة AOS
    console.log(bgImage); // Debugging line to check the bgImage import
  }, []);

  return (
    <div className="py-14 bg-[#090E34]">
      <div className="container mx-auto">
        {/* العنوان والوصف */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">
            We are ready to help
          </h1>
          <p className="my-3 text-[#959CB1]">
            There are many variations of passages of Lorem Ipsum available but{" "}
            <br />
            the majority have suffered alteration in some form.
          </p>
        </div>

        {/* الفيديو */}
        <div
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="relative flex justify-center h-full mt-10 rounded-lg overflow-hidden"
        >
          <div data-aos="fade-up">
        
            {/* إضافة تأثير الأنيميشن هنا */}
            <ReactPlayer
              url="https://youtu.be/r44RKWyfcFw"
              loop
              muted
              controls
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;