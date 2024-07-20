'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Image from 'next/image'
// import HulepatilGroupLogo from "/public/assets/images/HulepatilGroupLogo"
export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <>
      <div className=" container relative mx-auto my-8 h-[400px] w-full">
        <div className=" absolute inset-0 flex items-center justify-between ">
          <div className="w-1/2 p-16" data-aos="fade-up">
            <h3 className="mb-4 text-5xl font-semibold text-black">
              Trusted legacy of engineering excellence
            </h3>
            <p className="text-md mt-12 text-black ">
              HCPL And Company Private Limited is a global, diversified organisation
              of 15 major companies. We deliver end-to-end solutions in 6 business segments,
              including Engineering & Construction, Infrastructure, Real Estate, Water, Energy and
              Financial Services. Our dedicated workforce of over 35,000 people in over 40 countries
              is focused on sustainable development while developing megastructures and iconic
              landmarks.
            </p>
          </div>
          <div className="relative w-1/3" data-aos="fade-up">
            <Image src="/assets/images/HulepatilGroupLogo.jpg" alt="HCPL Image" width={330} height={250} />
          </div>
        </div>
      </div>

      <div className="bg-red-50 py-20">
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="animate__animated animate__fadeInUp flex items-center justify-center md:col-span-1">
              <h2 className="text-5xl font-semibold" data-aos="fade-up">
                HCPL Distinction
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:col-span-3" data-aos="fade-up">
              <div className="animate__animated animate__fadeInUp flex items-center">
                <div className="mr-5 h-[2.3px] w-5 bg-[#ef1c25]"></div>
                <p className="text-lg">Prominent Player</p>
              </div>
              <div className="animate__animated animate__fadeInUp flex items-center">
                <div className="mr-5 h-[2.3px] w-5 bg-[#ef1c25]"></div>
                <p className="text-lg">In-house Expertise</p>
              </div>
              <div className="animate__animated animate__fadeInUp flex items-center">
                <div className="mr-5 h-[2.3px] w-5 bg-[#ef1c25]"></div>
                <p className="text-lg">Integrated & Comprehensive Approach</p>
              </div>
              <div className="animate__animated animate__fadeInUp flex items-center">
                <div className="mr-5 h-[2.3px] w-5 bg-[#ef1c25]"></div>
                <p className="text-lg">Extensive Experience in Complex Projects</p>
              </div>
              <div className="animate__animated animate__fadeInUp flex items-center">
                <div className="mr-5 h-[2.3px] w-5 bg-[#ef1c25]"></div>
                <p className="text-lg">Visionary Leadership</p>
              </div>
              <div className="animate__animated animate__fadeInUp flex items-center">
                <div className="mr-5 h-[2.3px] w-5 bg-[#ef1c25]"></div>
                <p className="text-lg">Prudent Financial Management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
