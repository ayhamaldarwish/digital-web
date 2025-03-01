import { useEffect } from "react";
import { FaTh } from "react-icons/fa";
import { ImAndroid } from "react-icons/im";
import { ImAppleinc } from "react-icons/im";
import { TbSettingsQuestion } from "react-icons/tb";
import { HiFolderPlus } from "react-icons/hi2";
import { DiBingSmall } from "react-icons/di";
import AOS from "aos";
import "aos/dist/aos.css"; // استيراد ملف الأنيميشن

const Features = () => {
  const FeaturesData = [
    {
      id: 1,
      title: "Crafted for Startups",
      desc: "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
      icon: <ImAndroid />,
    },
    {
      id: 2,
      title: "High-quality Design",
      desc: "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
      icon: <ImAppleinc />,
    },
    {
      id: 3,
      title: "All Essential Components",
      desc: "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
      icon: <FaTh />,
    },
    {
      id: 4,
      title: "Speed Optimized",
      desc: "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
      icon: <TbSettingsQuestion />,
    },
    {
      id: 5,
      title: "Fully Customizable",
      desc: "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
      icon: <DiBingSmall />,
    },
    {
      id: 6,
      title: "Regular Updates",
      desc: "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
      icon: <HiFolderPlus />,
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" }); // تهيئة AOS
  }, []);

  return (
    <div className="my-9 bg-[#0B113A]">
       <div className='container mx-auto'>
            <div className="mx:text-center text-center py-10">
                <h1 className="text-4xl font-bold">
                    Main Features
                </h1>
                <p className="my-3">
                    There are many variations of passages of lorem ipsum available but{""}
                    <br />
                    the majority have suffered alteration in some form.
                </p>
            </div>

        {/* قائمة الخصائص */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {FeaturesData.map((item) => (
                        <div 
                            key={item.id}
                            data-aos="fade-up"
                        >
                            <div className="my-7 ">
                                <p className='bg-[#121A4D] text-3xl rounded py-3 text-[#4A6CF7] w-[20%] flex justify-center items-center mx-[40%]'>
                                    {item.icon}
                                </p>
                            </div>
                            <h1 className='text-2xl font-bold text-center'>{item.title}</h1>
                            <h1 className='text-gray-400 text-sm mt-6 text-center mb-3'>{item.desc}</h1>
                        </div>
                    ))}
                </div>
        
      </div>
    </div>
  );
};

export default Features;
