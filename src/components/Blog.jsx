import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { av1, blog1, blog2, blog3 } from "../assets";
import { EffectCoverflow, Pagination } from "swiper/modules";

const blogs = [
  {
    id: 1,
    image: blog1,
    category: "Computer",
    title: "Tips to quickly improve your coding speed.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    author: "Samuyl Joshi",
    authorRole: "Graphic Designer",
    date: "15 DEC, 2024",
  },
  {
    id: 2,
    image: blog2,
    category: "Design",
    title: "9 simple ways to improve your design skills",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    author: "Samuyl Joshi",
    authorRole: "Graphic Designer",
    date: "15 DEC, 2024",
  },
  {
    id: 3,
    image: blog3,
    category: "Computer",
    title: "Best UI components for modern websites",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    author: "Samuyl Joshi",
    authorRole: "Graphic Designer",
    date: "15 DEC, 2024",
  },
  {
    id: 4,
    image: blog1,
    category: "Computer",
    title: "Best UI components for modern websites",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    author: "Samuyl Joshi",
    authorRole: "Graphic Designer",
    date: "15 DEC, 2024",
  },
  {
    id: 5,
    image: blog2,
    category: "Computer",
    title: "Best UI components for modern websites",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    author: "Samuyl Joshi",
    authorRole: "Graphic Designer",
    date: "15 DEC, 2024",
  },
  {
    id: 6,
    image: blog3,
    category: "Computer",
    title: "Best UI components for modern websites",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    author: "Samuyl Joshi",
    authorRole: "Graphic Designer",
    date: "15 DEC, 2024",
  },
  {
    id: 7,
    image: blog1,
    category: "Computer",
    title: "Best UI components for modern websites",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    author: "Samuyl Joshi",
    authorRole: "Graphic Designer",
    date: "15 DEC, 2024",
  },
  {
    id: 8,
    image: blog2,
    category: "Computer",
    title: "Best UI components for modern websites",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    author: "Samuyl Joshi",
    authorRole: "Graphic Designer",
    date: "15 DEC, 2024",
  },
];

const Blog = () => {
  return (
    <div className="bg-[#0D133E] py-9">
      <div className="container mx-auto">
        <div className="text-center my-10 ">
          <h1 className="text-4xl font-bold mb-6">Our Latest Blogs</h1>
          <p className="text-gray-500 text-sm">
            There are many variations of passages of Lorem Ipsum available but
            <br />
            the majority have suffered alteration in some form.
          </p>
        </div>

        <Swiper
          spaceBetween={30} // المسافة بين الشرائح
          loop={true} // لجعل السلايدر يتكرر بعد الوصول لنهاية العناصر
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true, // لتفعيل نقاط التنقل
          }}
          breakpoints={{
            320: {
              slidesPerView: 1, // عرض شريحة واحدة في الشاشات الصغيرة
            },
            568: {
              slidesPerView: 2, // عرض شريحتين في الشاشات المتوسطة
            },
            768: {
              slidesPerView: 3, // عرض شريحتين في الشاشات المتوسطة
            },
            1024: {
              slidesPerView: 4, // عرض 3 شرائح في الشاشات الكبيرة
            },
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className="bg-[#1D2144] rounded-lg">
                <div className="relative">
                  <img
                    className="w-full rounded-lg"
                    src={blog.image}
                    alt={blog.title}
                  />
                  <span className="absolute bg-blue-500 text-sm font-medium py-2 px-3 left-1 top-4 rounded-xl">
                    {blog.category}
                  </span>
                </div>
                <div className="flex flex-col items-start my-6 px-6">
                  <h1 className="text-lg font-bold max-w-[450px]">
                    {blog.title}
                  </h1>
                  <p className="mt-4 text-gray-500">{blog.description}</p>
                </div>
                <p className="h-[1px] w-full bg-gray-700"></p>

                <div className="px-6 pb-5 flex items-center h-auto gap-5 text-xs my-5">
                  <div>
                    <img
                      src={av1}
                      className="rounded-full w-10 h-10"
                      alt="Avatar"
                    />
                  </div>
                  <div>
                    <h1 className="font-semibold">{blog.author}</h1>
                    <p className="text-xs text-gray-500 mt-1">
                      {blog.authorRole}
                    </p>
                  </div>
                  <p className="h-[42px] w-[1px] bg-gray-700"></p>

                  <div>
                    <h1 className="font-semibold">Date</h1>
                    <h1 className="text-xs text-gray-500 mt-1">{blog.date}</h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
  </div>
    </div>
  );
};

export default Blog;
