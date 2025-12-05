import React from "react";
import { Link } from "react-router-dom";
import bgimg from "./../../assets/asset 14.jpeg";
import img1 from "./../../assets/asset 1.jpeg";
import img2 from "./../../assets/asset 2.jpeg";
import img3 from "./../../assets/asset 3.jpeg";
import img4 from "./../../assets/asset 4.jpeg";
import img5 from "./../../assets/asset 5.jpeg";
import img6 from "./../../assets/asset 6.jpeg";
import img7 from "./../../assets/asset 7.jpeg";
import img8 from "./../../assets/asset 15.jpeg";
import "./home.css";

const Home = () => {
  return (
    <div className="w-full">
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center animate-fadeIn">
        <img
          src={bgimg}
          alt=""
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
            <button className="bg-[#f34263] mt-5 px-8 py-3 rounded hover:bg-[#cc2140] transition-all">
              Book appointment
            </button>
          </Link>
        </div>
      </section>

      <section className="bg-[#151413] flex justify-around items-center gap-5 flex-wrap h-50 section-padding animate-slideUp">
        <div className="contact-card flex items-center bg-[#151413] p-6 rounded">
          <i className="fa-solid fa-phone fa-2xl text-white"></i>
          <h2 className="text-3xl text-white ml-4">0128412210</h2>
        </div>
        <div className="contact-card flex items-center bg-[#151413] p-6 rounded">
          <i className="fa-solid fa-envelope fa-2xl text-white"></i>
          <h2 className="text-3xl text-white ml-4">contact@example.com</h2>
        </div>
        <div className="contact-card flex items-center bg-[#151413] p-6 rounded">
          <i className="fa-solid fa-location-dot fa-2xl text-white"></i>
          <h2 className="text-3xl text-white ml-4">25 st. london</h2>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-between items-center bg-[#151413]">
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="w-full md:w-1/2 flex justify-center items-center flex-col bg-white p-4">
            <h2 className="text-2xl md:text-4xl text-center"> About Me </h2>
            <p className="border-b-2 border-[#f34263] w-1/4 mx-auto my-4"></p>
          </div>
          <div className="w-full md:w-1/2">
            <img src={img1} alt="Amanda Brownn - Makeup Artist" className="w-full" />
          </div>
        </div>

        <div className="bg-[#151413] text-white w-full p-4 md:p-8">
          <h2 className="text-xl md:text-3xl mb-3 ml-0 md:ml-15">Amanda Brownn</h2>
          <p className="ml-0 md:ml-15 text-sm md:text-base">
            Ut rutrum scelerisque tortor, ac tempor tortor feugiat vitae. <br />{" "}
            Etiam varius erat at tristique tristique. Maecenas convallis, nisi
            at iaculis scelerisque, arcu leo viverra mauris, quis semper nisi
            nisi ut tellus. <br /> Suspendisse ut massa ac lacus fringilla
            ultrices ut id leo. Aliquam velit eros, feugiat id faucibus
            facilisis, cursus vel tellus.
          </p>
          <button className="bg-[#f34263] mt-5 px-8 py-3 rounded hover:bg-[#cc2140] transition-all ml-0 md:ml-15">
            know more
          </button>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center mx-auto bg-[#151413] section-padding service-section">
        <div className="text-white w-full md:w-1/2 container p-4 md:p-20 text-center md:text-left animate-slideInLeft">
          <h2 className="text-2xl md:text-3xl inline-block">services</h2>
          <div className="border-b-2 border-[#f34263] w-1/6 mx-auto md:mx-0 my-4"></div>
          <h3 className="text-xl md:text-2xl mb-5">Makeup</h3>
          <p className="text-sm md:text-base">
            Ut rutrum scelerisque tortor, ac tempor tortor feugiat vitae. Etiam
            varius erat at tristique tristique. Maecenas convallis, nisi at
            iaculis scelerisque, arcu leo viverra mauris, quis semper nisi nisi
            ut tellus. Suspendisse ut massa ac lacus fringilla ultrices ut id
            leo. Aliquam velit eros, feugiat id faucibus facilisis, cursus vel
            tellus.
          </p>
          <Link to="/layout/appointment">
            <button className="bg-[#f34263]  px-8 py-3 rounded hover:bg-[#cc2140] ml-0 transition-all mt-5 text-sm md:text-base">
              Book now
            </button>
          </Link>
        </div>
        <div className="w-full md:w-1/2 animate-slideInRight">
          <img src={img2} alt="Makeup Service" className="w-full" />
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center mx-auto bg-[#151413]">
        <div className="w-full md:w-1/2">
          <img src={img3} alt="Hair Styling Service" className="w-full" />
        </div>
        <div className="text-white w-full md:w-1/2 container p-4 md:p-20 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl inline-block">services</h2>
          <div className="border-b-2 border-[#f34263] w-1/6 mx-auto md:mx-0 my-4"></div>
          <h3 className="text-xl md:text-2xl mb-5">Hair Styling </h3>
          <p className="text-sm md:text-base">
            Ut rutrum scelerisque tortor, ac tempor tortor feugiat vitae. Etiam
            varius erat at tristique tristique. Maecenas convallis, nisi at
            iaculis scelerisque, arcu leo viverra mauris, quis semper nisi nisi
            ut tellus. Suspendisse ut massa ac lacus fringilla ultrices ut id
            leo. Aliquam velit eros, feugiat id faucibus facilisis, cursus vel
            tellus.
          </p>
          <Link to="/layout/appointment">
            <button className="bg-[#f34263]  px-8 py-3 rounded hover:bg-[#cc2140] ml-0 transition-all mt-5 text-sm md:text-base">
              Book now
            </button>
          </Link>
        </div>
      </section>

      <section className="bg-[#151413] text-white section-padding animate-fadeIn">
        <div className="flex justify-center items-center flex-col animate-slideUp">
          <i className="fa-solid fa-quote-right text-4xl md:text-7xl mt-5 text-[#F34263]"></i>
          <h2 className="text-center text-2xl md:text-4xl p-5">What They Say</h2>
          <div className="border-b-2 border-[#F34263] w-1/12"></div>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="text-[#F34263]">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p className="text-sm md:text-base">
              Suspendisse ut massa ac lacus fringilla ultrices ut id leo.
              Aliquam velit eros, feugiat id faucibus facilisis, cursus vel
              tellus.
            </p>
            <div className="flex gap-3 md:gap-5">
              <div className="w-1/6">
                <img src={img4} alt="Diane Black - Actress" className="border rounded-full" />
              </div>
              <div>
                <h3 className="text-lg md:text-2xl">Diane Black</h3>
                <p className="text-sm md:text-base">Actress</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="text-[#F34263]">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p className="text-sm md:text-base">
              Suspendisse ut massa ac lacus fringilla ultrices ut id leo.
              Aliquam velit eros, feugiat id faucibus facilisis, cursus vel
              tellus.
            </p>
            <div className="flex gap-3 md:gap-5">
              <div className="w-1/6">
                <img src={img5} alt="Mitha Frank - Local Model" className="border rounded-full" />
              </div>
              <div>
                <h3 className="text-lg md:text-2xl">Mitha Frank</h3>
                <p className="text-sm md:text-base">Local Model</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="text-[#F34263]">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p className="text-sm md:text-base">
              Suspendisse ut massa ac lacus fringilla ultrices ut id leo.
              Aliquam velit eros, feugiat id faucibus facilisis, cursus vel
              tellus.
            </p>
            <div className="flex gap-3 md:gap-5">
              <div className="w-1/6">
                <img src={img6} alt="Jane Brooks - Model" className="border rounded-full" />
              </div>
              <div>
                <h3 className="text-lg md:text-2xl">Jane Brooks</h3>
                <p className="text-sm md:text-base">Model</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="text-[#F34263]">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p className="text-sm md:text-base">
              Suspendisse ut massa ac lacus fringilla ultrices ut id leo.
              Aliquam velit eros, feugiat id faucibus facilisis, cursus vel
              tellus.
            </p>
            <div className="flex gap-3 md:gap-5">
              <div className="w-1/6">
                <img src={img7} alt="Tanya Parker - Entrepreneur" className="border rounded-full" />
              </div>
              <div>
                <h3 className="text-lg md:text-2xl">Tanya Parker</h3>
                <p className="text-sm md:text-base">Entrepreneur</p>
              </div>
            </div>
          </div>
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
    </div>
  );
};

export default Home;
