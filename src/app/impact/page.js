"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/core";
import "swiper/swiper-bundle.css";

const images = [
  {
    src: "https://img.freepik.com/premium-photo/erp-business-innovation-concept-blurred-background_161452-8123.jpg?w=740",
    alt: "Driving Indias transport with 4500+ lane kilometres of roads",
  },
  {
    src: "https://img.freepik.com/premium-photo/businessman-drawing-graph-with-marker-media-screen_161452-7568.jpg?w=740",
    alt: "Global expertise of 190+ marine networks",
  },
  {
    src: "https://img.freepik.com/premium-photo/education-process-facilitating-learning-business-education-concept_161452-9000.jpg?w=826",
    alt: "Unprecedented construction of 25+ automobile manufacturing units in India",
  },
];

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  return (
    <>
           <div className="relative h-[400px] w-full bg-black">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-80" : "opacity-0"
            }`}
          >
            <div className="relative h-full w-full">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                priority
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
          </div>
        ))}
        <div className="absolute inset-0 flex items-center justify-between px-10">
          <h2
            className="mb-4 w-1/2 text-5xl font-semibold text-white"
            data-aos="fade-up"
          >
            Empowering People and Businesses
          </h2>
          <div className="w-1/3 rounded-lg bg-white bg-opacity-20 p-10 text-center text-white">
            <h2 className="mb-4 text-6xl font-bold">Impact</h2>
          </div>
        </div>
        <div className="absolute bottom-5 right-5 text-sm text-white">
          <img
            src={"/assets/images/HcplLogo.png"}
            alt="HCPL Logo"
            className="h-[5rem] w-[8rem] lg:h-[3rem] lg:w-[7rem]"
          />
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            <div className="animate__animated animate__fadeInUp flex items-start justify-center md:col-span-1">
              <h2 className="text-5xl font-semibold" data-aos="fade-up">
                Highlights
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:col-span-3">
              <div
                className="card-container rounded-lg bg-white p-12 shadow-md"
                data-aos="fade-up"
              >
                <div className="animate__animated animate__fadeInUp flex items-center">
                  <div className="mr-5 h-[2.3px] w-5 bg-[#ef1c25]"></div>
                  <p className="text-lg">Increased Private Investment</p>
                </div>
              </div>
              <div
                className="card-container rounded-lg bg-white p-12 shadow-md"
                data-aos="fade-up"
              >
                <div className="animate__animated animate__fadeInUp flex items-center">
                  <div className="mr-5 h-[2.3px] w-5 bg-[#ef1c25]"></div>
                  <p className="text-lg">Prospering Economic Development</p>
                </div>
              </div>
              <div
                className="card-container rounded-lg bg-white p-12 shadow-md"
                data-aos="fade-up"
              >
                <div className="animate__animated animate__fadeInUp flex items-center">
                  <div className="mr-5 h-[2.3px] w-5 bg-[#ef1c25]"></div>
                  <p className="text-lg">
                    Essential Player in Marathwada's Growth Projects Done 500+
                  </p>
                </div>
              </div>
              <div
                className="card-container rounded-lg bg-white p-12 shadow-md"
                data-aos="fade-up"
              >
                <div className="animate__animated animate__fadeInUp flex items-center">
                  <div className="mr-5 h-[2.3px] w-5 bg-[#ef1c25]"></div>
                  <p className="text-lg">
                    Job Creation 5000+ Clients Served Nationwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-auto border-gray-200" style={{ width: "80rem" }} />

      <div className="bg-black py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            <div className="animate__animated animate__fadeInUp flex items-start justify-center md:col-span-1">
              <h2
                className="text-5xl font-semibold text-white"
                data-aos="fade-up"
              >
                Vision
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:col-span-3">
              <div className="mx-auto flex w-2/3">
                <img
                  src="https://www.shapoorjipallonji.com/assets/jpegs/impact/csr/vision.jpg"
                  alt="Vision Image"
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="rounded-lg px-0 py-6" data-aos="fade-up">
                <div className="animate__animated animate__fadeInUp flex items-center">
                  <p className="max-w-xs text-sm leading-relaxed text-slate-300">
                    We commit to enabling opportunities for social and economic
                    growth, interdependent with a thriving ecology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-auto  border-gray-200" style={{ width: "80rem" }} />

      <div className="py-20">
        <div className=" mx-auto">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div
              className="animate__animated animate__fadeInUp flex items-start justify-center md:col-span-1"
              data-aos="fade-up"
            >
              <h2 className="text-5xl font-semibold">Mission</h2>
            </div>
            <div
              className="animate__animated animate__fadeInUp mx-8 flex flex-col items-start md:col-span-2"
              data-aos="fade-up"
            >
              <p className="mb-8 text-3xl font-semibold text-slate-600">
                Empower communities and nurture ecologies.
              </p>
              <div className="w-full bg-white py-8" data-aos="fade-up">
                <ul className="space-y-6">
                  <li>
                    <p
                      className="text-lg text-slate-500 "
                      style={{ width: "40rem" }}
                    >
                      <span className="font-medium">
                        Education and skill development
                      </span>{" "}
                      for underprivileged children, youth and tribal communities
                    </p>
                  </li>
                  <hr
                    className=" my-10 border-gray-200"
                    style={{ width: "50rem" }}
                  />

                  <li>
                    <p
                      className="text-lg text-slate-500"
                      style={{ width: "40rem" }}
                    >
                      <span className="font-medium">Healthy living</span> by
                      providing affordable quality healthcare, nutrition and
                      access to water and sanitation
                    </p>
                  </li>
                  <hr
                    className=" my-10 border-gray-200"
                    style={{ width: "50rem" }}
                  />
                  <li>
                    <p
                      className="text-lg text-slate-500"
                      style={{ width: "40rem" }}
                    >
                      {" "}
                      <span className="font-medium">Social inclusion</span> by
                      enabling earning opportunities and financial security
                    </p>
                  </li>
                  <hr
                    className=" my-10 border-gray-200"
                    style={{ width: "50rem" }}
                  />
                  <li>
                    <p
                      className="text-lg text-slate-500"
                      style={{ width: "40rem" }}
                    >
                      {" "}
                      <span className="font-medium">
                        Environment conservation
                      </span>{" "}
                      by increasing green cover and preserving biodiversity
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-auto  border-gray-200" style={{ width: "80rem" }} />

      <div className=" py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            <div className="animate__animated animate__fadeInUp flex items-start justify-center md:col-span-1">
              <h2 className="text-5xl font-semibold" data-aos="fade-up">
                Corporate Social Responsibility
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:col-span-3">
              <div
                className="card-container rounded-lg bg-white p-12 shadow-md"
                data-aos="fade-up"
              >
                <div className="animate__animated animate__fadeInUp flex items-center">
                  <div className="mr-5 h-[2.3px] w-5 bg-[#ef1c25]"></div>
                  <p className="text-lg">Increased Private Investment</p>
                </div>
              </div>
              <div
                className="card-container rounded-lg bg-white p-12 shadow-md"
                data-aos="fade-up"
              >
                <div className="animate__animated animate__fadeInUp flex items-center">
                  <div className="mr-5 h-[2.3px] w-5 bg-[#ef1c25]"></div>
                  <p className="text-lg">Prospering Economic Development</p>
                </div>
              </div>
              <div
                className="card-container rounded-lg bg-white p-12 shadow-md"
                data-aos="fade-up"
              >
                <div className="animate__animated animate__fadeInUp flex items-center">
                  <div className="mr-5 h-[2.3px] w-5 bg-[#ef1c25]"></div>
                  <p className="text-lg">
                    Essential Player in Marathwada's Growth Projects Done 500+
                  </p>
                </div>
              </div>
              <div
                className="card-container rounded-lg bg-white p-12 shadow-md"
                data-aos="fade-up"
              >
                <div className="animate__animated animate__fadeInUp flex items-center">
                  <div className="mr-5 h-[2.3px] w-5 bg-[#ef1c25]"></div>
                  <p className="text-lg">
                    Job Creation 5000+ Clients Served Nationwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr
        className="mx-auto my-10 border-gray-200"
        style={{ width: "80rem" }}
      />
    </>
  );
}
