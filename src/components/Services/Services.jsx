import React from "react";
import { Link } from "react-router-dom";
import bgimg from "./../../assets/asset 14.jpeg";
import "./Services.css";
import img1 from "./../../assets/asset 2.jpeg";
import img2 from "./../../assets/hair-styling-service.jpg";
import img3 from "./../../assets/skin-care-service.jpg";
import img4 from "./../../assets/Thumb-3.jpg";
import img8 from "./../../assets/asset 15.jpeg";

const Services = () => {
  return (
    <>
      <section className="relative w-full flex flex-col items-center justify-center">
        <img
          src={bgimg}
          alt="Makeup artist studio background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 layer"></div>
        <div className="relative z-20 flex flex-col items-center justify-center text-white text-center min-h-[60vh] w-full px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
            Get A Classy Look with Amanda
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">It's Your Shine Time</h1>
          <div className="border-b-2 border-[#f34263] w-1/6 mx-auto my-4"></div>
          <Link to="/layout/appointment">
            <button className="bg-[#f34263] mt-5 px-8 py-3 rounded hover:bg-[#cc2140] transition-all text-sm md:text-base">
              Book appointment
            </button>
          </Link>
        </div>
      </section>

      <section className="bg-[#151413] w-full py-20 px-5 text-white flex flex-col md:flex-row items-center justify-center relative animate-fade-in">
        <div className="w-1/8 md:w-1/2 flex justify-center">
          <img
            src={img1}
            alt="Casual makeup service"
            className="max-w-xs md:max-w-full md:relative md:right-10 animate-slide-in-left"
          />
        </div>
        <div
          className="
      text-black bg-white
      w-full md:w-1/5
      p-8 md:p-12 rounded shadow-lg
      flex flex-col items-center justify-center
      mt-8 md:mt-0
      static md:absolute md:right-[10%] md:top-1/2 md:-translate-y-1/2
    "
          style={{ zIndex: 2 }}
        >
          <h2 className="text-3xl">Casual Makeup</h2>
          <div className="border-b-2 border-[#f34263] w-1/2 my-4 self-center"></div>
          <p>
            Enhance your natural beauty with our professional casual makeup services. Perfect for everyday looks that make you feel confident and radiant.
          </p>
          <Link to="/layout/appointment">
            <button className="bg-[#f34263] mt-5 px-8 py-3 rounded hover:bg-[#cc2140] transition-all text-white">
              Book appointment
            </button>
          </Link>
        </div>
      </section>

      <section className="bg-[#151413] w-full py-20 px-5 text-white flex flex-col md:flex-row items-center justify-center relative animate-fade-in">
        <div
          className="
      text-black bg-white
      w-full md:w-1/5
      p-8 md:p-12 rounded shadow-lg
      flex flex-col items-center justify-center
      mt-8 md:mt-0
      static md:absolute md:left-[10%] md:top-1/2 md:-translate-y-1/2
      animate-slide-in-left
    "
          style={{ zIndex: 2 }}
        >
          <h2 className="text-3xl">Hair Styling</h2>
          <div className="border-b-2 border-[#f34263] w-1/2 my-4 self-center"></div>
          <p>
            Transform your hair with our expert styling services. From cuts to updos, we create looks that enhance your natural beauty and personality.
          </p>
          <Link to="/layout/appointment">
            <button className="bg-[#f34263] mt-5 px-8 py-3 rounded hover:bg-[#cc2140] transition-all text-white">
              Book appointment
            </button>
          </Link>
        </div>
        {/* Image second */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={img2}
            alt="Hair styling service"
            className="w-full max-w-xs md:max-w-full md:relative md:left-10 animate-slide-in-right"
          />
        </div>
      </section>

      <section className="bg-[#151413] w-full py-20 px-5 text-white flex flex-col md:flex-row items-center justify-center relative animate-fade-in">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={img3}
            alt="Bridal makeup service"
            className="w-full max-w-xs md:max-w-full md:relative md:right-10 animate-slide-in-left"
          />
        </div>
        <div
          className="
      text-black bg-white
      w-full md:w-1/5
      p-8 md:p-12 rounded shadow-lg
      flex flex-col items-center justify-center
      mt-8 md:mt-0
      static md:absolute md:right-[10%] md:top-1/2 md:-translate-y-1/2
      animate-slide-in-right
    "
          style={{ zIndex: 2 }}
        >
          <h2 className="text-3xl">Bridal Makeup</h2>
          <div className="border-b-2 border-[#f34263] w-1/2 my-4 self-center"></div>
          <p>
            Make your special day unforgettable with our bridal makeup services. We specialize in timeless elegance and flawless application for your wedding day.
          </p>
          <Link to="/layout/appointment">
            <button className="bg-[#f34263] mt-5 px-8 py-3 rounded hover:bg-[#cc2140] transition-all text-white">
              Book appointment
            </button>
          </Link>
        </div>
      </section>

      <section className="bg-[#151413] w-full py-20 px-5 text-white flex flex-col md:flex-row items-center justify-center relative animate-fade-in">
        <div
          className="
      text-black bg-white
      w-full md:w-1/5
      p-8 md:p-12 rounded shadow-lg
      flex flex-col items-center justify-center
      mt-8 md:mt-0
      static md:absolute md:left-[10%] md:top-1/2 md:-translate-y-1/2
      animate-slide-in-left
    "
          style={{ zIndex: 2 }}
        >
          <h2 className="text-3xl">Hair Color</h2>
          <div className="border-b-2 border-[#f34263] w-1/2 my-4 self-center"></div>
          <p>
            Achieve vibrant and healthy hair with our professional hair coloring services. We use high-quality products for long-lasting, beautiful results.
          </p>
          <Link to="/layout/appointment">
            <button className="bg-[#f34263] mt-5 px-8 py-3 rounded hover:bg-[#cc2140] transition-all text-white">
              Book appointment
            </button>
          </Link>
        </div>
        {/* Image second */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={img4}
            alt="Hair color service"
            className="w-full max-w-xs md:max-w-full md:relative md:left-10 animate-slide-in-right"
          />
        </div>
      </section>

      <section className="bg-[#151413] w-full py-20 px-5 text-white flex flex-col md:flex-row items-center justify-center relative animate-fade-in">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={img3}
            alt="Skin care service"
            className="w-full max-w-xs md:max-w-full md:relative md:right-10 animate-slide-in-left"
          />
        </div>
        <div
          className="
      text-black bg-white
      w-full md:w-1/5
      p-8 md:p-12 rounded shadow-lg
      flex flex-col items-center justify-center
      mt-8 md:mt-0
      static md:absolute md:right-[10%] md:top-1/2 md:-translate-y-1/2
      animate-slide-in-right
    "
          style={{ zIndex: 2 }}
        >
          <h2 className="text-3xl">Skin Care</h2>
          <div className="border-b-2 border-[#f34263] w-1/2 my-4 self-center"></div>
          <p>
            Pamper your skin with our rejuvenating skin care services. Experience relaxation and glowing results with our professional treatments.
          </p>
          <Link to="/layout/appointment">
            <button className="bg-[#f34263] mt-5 px-8 py-3 rounded hover:bg-[#cc2140] transition-all text-white">
              Book appointment
            </button>
          </Link>
        </div>
      </section>

            <section className="relative w-full flex flex-col items-center justify-center">
              <img src={img8} alt="" className="w-full h-screen md:h-auto" />
              <div className="layer2 inset-0 absolute">
                <div className="relative z-20 flex flex-col items-center justify-center text-white text-center min-h-[60vh] w-full px-4">
                  <h2 className="text-lg md:text-2xl font-semibold mb-2">
                    GET 10% DISCOUNT ON YOUR
                  </h2>
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">FIRST VISIT!</h1>
                  <div className="border-b-2 border-[#f34263] w-1/6 mx-auto my-4"></div>
                  <div className="p-4 md:p-24">
                  <p className="text-lg md:text-2xl">Ut rutrum scelerisque tortor, ac tempor tortor feugiat vitae. Etiam varius erat at tristique tristique. Maecenas convallis, nisi at iaculis scelerisque, arcu leo viverra mauris, quis semper nisi nisi ut tellus.</p>
                  </div>
                  <button className="bg-[#f34263] mt-5 px-8 py-3 rounded hover:bg-[#cc2140] transition-all text-sm md:text-base">
                    Book appointment
                  </button>
                </div>
                <div className="flex flex-col md:flex-row justify-around text-white p-4 md:p-10 text-center">
                  <p className="text-sm md:text-base">Copyright © 2024 Makeup Artist Studio</p>
                  <p className="text-sm md:text-base">Powered by Makeup Artist Studio</p>
                </div>
              </div>
            </section>
    </>
  );
};

export default Services;
