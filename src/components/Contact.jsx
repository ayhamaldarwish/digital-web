import emailjs from 'emailjs-com';
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5c6mmvd",
        "template_aumoqiw",
        form.current,
        "YPkD0dWxltIz-fAFD"
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("تم إرسال الرسالة بنجاح!");
        },
        (error) => {
          console.error("Error:", error);
          alert(`حدث خطأ أثناء الإرسال: ${error.text}`);
        }
      );
  };

  return (
    <div className="bg-[#090E34] py-14 ">
      <div className="container mx-auto grid lgl:grid-cols-[2fr_1fr] gap-10 ">
        <div
          className="bg-[#1D2144] w-full"
          data-aos="fade-up" // AOS animation on the form
        >
          <div className="my-10 px-10 ">
            <h1 className="text-3xl mb-4 font-bold">
              Need Help? Open a Ticket
            </h1>
            <p className="text-gray-400">
              Our support team will get back to you ASAP via email.
            </p>

            <form ref={form} onSubmit={sendEmail}>
              <div className="grid grid-cols-1 sml:grid-cols-2 sml:gap-10">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="text-sm mb-2 text-gray-600 font-medium"
                  >
                    Your Name
                  </label>
                  <input
                    name="user_name"
                    id="name"
                    required
                    className="w-full bg-[#242B51] py-3 px-3 rounded-md text-white text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none transition duration-200"
                    type="text"
                    placeholder="Enter Your Name"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="text-sm mb-2 text-gray-600 font-medium"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="user_email"
                    required
                    className="w-full bg-[#242B51] py-3 px-3 rounded-md text-white text-sm focus:border-blue-500
                     focus:ring-2 focus:ring-blue-400 outline-none transition duration-200"
                    type="email"
                    placeholder="Enter Your Email"
                  />
                </div>
              </div>
              <div className="my-4">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  placeholder="Write your message here... "
                  className="w-full p-4 rounded-lg bg-[#242B51] text-white focus:outline-none focus:ring-2 focus:ring-blue-500
                   focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-300"
              >
                Submit Ticket
              </button>
            </form>
          </div>
        </div>
        <div
          className="bg-[#1D2144] w-full"
          data-aos="fade-up" // AOS animation for the subscription form
        >
          <div className="px-6 my-7">
            <h1 className="text-2xl mb-4 font-bold">
              Subscribe to receive future updates
            </h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sited Sed ullam corper consectur adipiscing Mae
              ornare massa quis lectus.
            </p>

            <p className="h-[1px] w-full my-4 bg-gray-700"></p>

            <div>
              <input
                className="w-full my-5 bg-[#242B51] py-3 px-3 rounded-md text-gray-700 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none transition duration-200"
                type="text"
                placeholder="Enter Your Name"
              />
              <input
                className="w-full py-3 bg-[#242B51] px-3 rounded-md text-gray-700 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none transition duration-200"
                type="email"
                placeholder="Enter Your Email"
              />
              <button
                className="w-full bg-[#2563EB] mt-5 py-2 px-3 rounded-md text-gray-100 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none transition duration-200"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;