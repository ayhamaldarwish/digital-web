import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // استيراد ملف الأنيميشن
import { logo } from "../assets";
import { CiSearch } from "react-icons/ci";
import { IoWallet } from "react-icons/io5";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out" });
  }, []);

  const Links = [
    { id: 1, page: "Home", path: "/" },
    { id: 2, page: "Explore", path: "/explore" },
    { id: 3, page: "Activitey", path: "/activitey" },
    { id: 4, page: "Community", path: "/community" },
    { id: 5, page: "Contact", path: "/contact" },
  ];

  return (
    <div className="bg-[#090E34] text-white">
      <div
        className="container mx-auto flex items-center justify-between py-4 px-4"
        data-aos="fade-down"
      >
        {/* Left Div */}
        <div className="flex items-center gap-2">
          <img className="w-10" src={logo} alt="Logo" />
        </div>

        {/* Center Div */}
        <ul
          className={`hidden lg:flex items-center gap-7  `}
          data-aos="fade-in"
        >
          {Links.map((item) => (
            <li key={item.id} className="relative">
              <div className="flex items-center gap-2 cursor-pointer">
                <a href={item.path} className="hover:text-indigo-500">
                  {item.page}
                </a>
              </div>
            </li>
          ))}
        </ul>

        {/* Right Div */}
        <div className="hidden lg:flex items-center gap-4" data-aos="fade-left">
          <CiSearch className="cursor-pointer" />
          <button className="flex items-center gap-1 bg-transparent text-sm border border-indigo-600 text-white px-3 py-2 rounded-2xl ">
            Wallet Connect
            <IoWallet className="text-[#00FFFF]" />
          </button>
        </div>

        {/*   Menu */}
        <div className="lg:hidden">
          {!isMenuOpen ? (
            <HiOutlineMenu
              className="text-2xl cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            />
          ) : (
            <HiX
              className="text-2xl cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="lg:hidden flex flex-col items-center bg-[#1E2338] py-4"
          data-aos="zoom-in"
        >
          <ul className="flex flex-col items-center gap-4">
            {Links.map((item) => (
              <li key={item.id} className="text-sm text-center">
                <a href={item.path} className="hover:text-indigo-500">
                  {item.page}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 mt-4">
            <CiSearch className="cursor-pointer" />
            <button className="flex items-center gap-1 bg-transparent text-sm border border-indigo-600 text-white px-4 py-1 rounded-2xl">
              Wallet Connect
              <IoWallet className="text-[#00FFFF]" />
            </button>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default NavBar;
