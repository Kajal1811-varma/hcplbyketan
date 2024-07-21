"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";

export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="container relative mx-auto my-8 h-[400px] w-full">
        <div className="absolute inset-0 flex items-center justify-between ">
          <div className="w-1/2 p-16" data-aos="fade-up">
            <h3 className="mb-4 text-5xl font-semibold text-black">
              Trusted legacy of engineering excellence
            </h3>
            <p className="text-md mt-12 text-black">
              HCPL And Company Private Limited is a global, diversified
              organisation of 15 major companies. We deliver end-to-end
              solutions in 6 business segments, including Engineering &
              Construction, Infrastructure, Real Estate, Water, Energy and
              Financial Services. Our dedicated workforce of over 35,000 people
              in over 40 countries is focused on sustainable development while
              developing megastructures and iconic landmarks.
            </p>
          </div>
          <div className="relative w-1/3" data-aos="fade-up">
            <Image
              src="/assets/images/HulepatilGroupLogo.jpg"
              alt="HCPL Image"
              width={330}
              height={250}
            />
          </div>
        </div>
      </div>

      <div className="bg-red-50 py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="animate__animated animate__fadeInUp flex items-center justify-center md:col-span-1">
              <h2 className="text-5xl font-semibold" data-aos="fade-up">
                HCPL Distinction
              </h2>
            </div>
            <div
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:col-span-3"
              data-aos="fade-up"
            >
              {[
                "Prominent Player",
                "In-house Expertise",
                "Integrated & Comprehensive Approach",
                "Extensive Experience in Complex Projects",
                "Visionary Leadership",
                "Prudent Financial Management",
              ].map((item, index) => (
                <div
                  key={index}
                  className="animate__animated animate__fadeInUp flex items-center"
                >
                  <div className="mr-5 h-[2.3px] w-5 bg-[#ef1c25]"></div>
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="container mx-auto">
          <div
            className="mb-6 mt-6 flex flex-col items-center"
            data-aos="fade-up"
          >
            <h2 className=" mb-4 text-5xl  font-semibold"> Our Reach</h2>
            <div className=" h-[4px] w-16 bg-[#ef1c25]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <div data-aos="fade-up" className=" pt-16">
              <ul
                className="text-xl space-y-4 m-8 p-12 border-2 border-gray-300 rounded-md"
                data-aos="fade-up"
              >
                <li className="p-4 font-semibold text-2xl">Content</li>
                <hr
                  className=" my-10 border-gray-200"
                  style={{ width: "30rem" }}
                />
                <li className="p-4 font-semibold text-2xl">Our values</li>
                <hr
                  className=" my-10 border-gray-200"
                  style={{ width: "30rem" }}
                />
                <li className="p-4 font-semibold text-2xl">Our clients</li>
              </ul>
            </div>

            <div className="relative" data-aos="fade-up">
              <Image
                src="https://img.freepik.com/premium-vector/detailed-map-india_97886-14458.jpg?w=740"
                alt="India Map"
                width={800}
                height={600}
                className="object-contain mx-auto"
                data-aos="fade-up"
              />
              <p className="absolute bottom-2 right-2 text-sm text-black">
                Also New York
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
