'use client' // Add this line at the top

import Image from 'next/image'
import { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';

const images = [
  {
    src: 'https://img.freepik.com/free-photo/portrait-engineers-work-hours-job-site_23-2151589535.jpg?t=st=1719753451~exp=1719757051~hmac=3afce9892f0a8742c2c27451e8634cafb32bc962259f94bb6f4a082225f6b3ea&w=740',
    alt: 'Driving Indias transport with 4500+ lane kilometres of roads',
    title: 'Driving Indias transport with 4500+ lane kilometres of roads',
    subtitle: 'INFRASTRUCTURE',
    location: 'New Owendo International Port, Gabon',
  },
  {
    src: 'https://img.freepik.com/free-photo/landscape-with-windmills_15879-608.jpg?w=740&t=st=1719754037~exp=1719754637~hmac=7c10ebeba367f63a311de73004cfc0c101bfc467663b36fe68318e91ef053caf',
    alt: 'Global expertise of 190+ marine networks',
    title: 'Global expertise of 190+ marine networks',
    subtitle: 'INFRASTRUCTURE',
    location: 'New Owendo International Port, Gabon',
  },
  {
    src: 'https://img.freepik.com/free-photo/close-up-woman-gas-station_23-2148906372.jpg?t=st=1719754467~exp=1719758067~hmac=c85c5121dd301f5962d278a060fcec7d4d1acc35de043ec09f2220cdc2e57ce8&w=740',
    alt: 'Unprecedented construction of 25+ automobile manufacturing units in India',
    title: 'Unprecedented construction of 25+ automobile manufacturing units in India',
    subtitle: 'ENGINEERING & CONSTRUCTION',
    location: 'New Owendo International Port, Gabon',
  },
  {
    src: 'https://img.freepik.com/free-photo/close-up-woman-gas-station_23-2148906372.jpg?t=st=1719754467~exp=1719758067~hmac=c85c5121dd301f5962d278a060fcec7d4d1acc35de043ec09f2220cdc2e57ce8&w=740',
    alt: '120+ Software Development Centres and IT Parks support Indian IT industry',
    title: '120+ Software Development Centres and IT Parks support Indian IT industry',
    subtitle: 'ENGINEERING & CONSTRUCTION',
    location: 'New Owendo International Port, Gabon',
  },
  {
    src: 'https://img.freepik.com/free-photo/highway-bridges_53876-32441.jpg?t=st=1719754698~exp=1719758298~hmac=35a4eb16d94b0a10b428fc2fe5938696fd41c1d45f6b63384a0293c5c9130a85&w=740',
    alt: "World's largest Solar EPC solutions provider (IHS Markit)",
    title: "World's largest Solar EPC solutions provider (IHS Markit)",
    subtitle: 'ENERGY',
    location: 'New Owendo International Port, Gabon',
  },
  {
    src: 'https://img.freepik.com/free-photo/transport-concept-with-train_23-2148959670.jpg?t=st=1719754779~exp=1719758379~hmac=7875c62a432d8c9c3c87024ddd7eb602aa24f5405b17cd82c4df50a688ea0d4a&w=740',
    alt: "Designed and delivered India's largest FPSO: Armada Sterling V",
    title: "Designed and delivered India's largest FPSO: Armada Sterling V",
    subtitle: 'ENERGY',
    location: 'New Owendo International Port, Gabon',
  },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);


  return (
    <>
    <div className="relative h-130 overflow-hidden" data-aos="fade-up">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" priority />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center">
              <h2 className="text-md mb-2 uppercase text-white">{image.subtitle}</h2>
              <h1 className="mx-4 mb-4 text-3xl font-bold text-white md:text-6xl">{image.title}</h1>
              <Link href="/">
                <button className="rounded-sm bg-white px-8 py-4 font-semibold text-black hover:text-[#ef1c25]">
                  Explore Our Work
                </button>
              </Link>
            </div>
            <div className="absolute bottom-5 right-5 text-sm text-white">{image.location}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 p-8 md:grid-cols-2" >
        <div className="relative h-[500px]" data-aos="fade-up">
          {' '}
          {/* Fixed height for the parent container */}
          <Image
            src="https://www.shapoorjipallonji.com/assets/jpegs/home/banners/desktop/about.jpg" // Update this path with the correct image path
            alt="Trusted legacy of planet engineering excellence"
            layout="fill" // Fill the parent container
            objectFit="cover" // Ensure the image covers the container
            className="rounded"
            
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-4 text-center">
            <h2 className="text-md mb-2 uppercase text-white">ABOUT</h2>
            <h1 className="mb-4 text-3xl font-bold text-white">
              Trusted legacy of planet engineering excellence
            </h1>
            <Link href="/">
              <button className="rounded bg-white px-8 py-4 font-semibold text-black hover:text-[#ef1c25]">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        <div className="relative h-[500px]" data-aos="fade-up">
          {' '}
          {/* Fixed height for the parent container */}
          <Image
            src="https://img.freepik.com/premium-photo/volunteers-distributed-food-needy-mosques-soup-kitchen-rainy-day-providing-warm_1176614-6863.jpg?w=740" // Update this path with the correct image path
            alt="COVID-19 Precautions"
            layout="fill" // Fill the parent container
            objectFit="cover" // Ensure the image covers the container
            className="rounded"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-4 text-center">
            <h2 className="text-md mb-2 uppercase text-white">IMPACT</h2>
            <h1 className="mb-4 text-3xl font-bold text-white">COVID-19 Precautions</h1>
            <Link href="/">
              <button className="rounded bg-white px-8 py-4 font-semibold text-black hover:text-[#ef1c25]">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>

      <section className="container mx-auto bg-white p-4 md:p-8">
        <div className="mb-8 text-center">
          <div className="mb-6 mt-6 flex flex-col items-center">
            <div className="mb-2 h-[4px] w-16 bg-[#ef1c25]"></div>
            <h2 className="mt-6 text-sm uppercase tracking-widest text-gray-500">The Firm</h2>
          </div>
          <h1 className="mt-4 font-sans text-3xl md:mt-16 md:text-4xl lg:text-5xl">
            Delivering for <span className="text-[#ef1c25]">Investors</span>
          </h1>
        </div>
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-8">
          <div className="md:w-2/4 " data-aos="fade-left">
            <p className="mb-2 mt-4 text-xl leading-relaxed text-gray-500 md:mb-4 md:text-2xl">
              Unmatched Scale
            </p>

            <p className="mb-6 text-sm leading-6 text-gray-600 md:text-base">
              HCPL is the world’s largest alternative asset manager, with more than $1 trillion in
              AUM. We serve institutional and individual investors by building strong businesses
              that deliver lasting value. Our scale – with ~12,500 real estate assets and 230+
              portfolio companies – enables us to invest in dynamic sectors positioned for long-term
              growth.
            </p>
            <button className="group mt-4 inline-flex items-center gap-3 font-semibold md:mt-14">
              Learn More
              <span className="inline-flex items-center justify-center rounded-full bg-transparent px-3 py-2 text-base font-bold uppercase tracking-widest text-[#ef1c25] shadow-[inset_0_0_0_2px_#ef1c25] transition duration-200 hover:bg-[#ef1c25] hover:text-white md:px-4 md:py-3 md:text-xl">
                →
              </span>
            </button>
          </div>

          <div className="mt-5 md:w-1/3 lg:mt-0" data-aos="fade-right">
            <h2 className="mb-2 text-4xl leading-3 md:text-5xl lg:text-6xl">$1.1T</h2>
            <p className="mt-4 font-semibold text-gray-700">Assets Under Management</p>
            <p className="mt-4 text-xs font-medium text-gray-600">
              All figures as of March 31, 2024, unless otherwise indicated.
            </p>
            <p className="mt-4 text-xs font-medium text-gray-600">(1) As of December 31, 2023.</p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-4 p-8 md:grid-cols-2">
        <div className="relative h-[500px]" data-aos="fade-up">
          {' '}
          {/* Fixed height for the parent container */}
          <Image
            src="https://img.freepik.com/free-photo/portrait-professional-elegant-businessman_23-2150917158.jpg?t=st=1720176139~exp=1720179739~hmac=a16e8a388271d4bbeecab7bd44dc7fea5b122bbb855114ce7393b91bf6c06f67&w=740" // Update this path with the correct image path
            alt="Trusted legacy of planet engineering excellence"
            layout="fill" // Fill the parent container
            objectFit="cover" // Ensure the image covers the container
            className="rounded"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-4 text-center">
            <h2 className="text-md mb-2 uppercase text-white">CAREER</h2>
            <h1 className="mb-4 text-3xl font-bold text-white">
            Explore Career Opportunities
            </h1>
            <Link href="/">
              <button className="rounded bg-white px-8 py-4 font-semibold text-black hover:text-[#ef1c25]">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        <div className="relative h-[500px]" data-aos="fade-up">
          {' '}
          {/* Fixed height for the parent container */}
          <Image
            src="https://img.freepik.com/free-photo/smiling-young-customer-service-girl-with-headset-her-workplace_231208-9609.jpg?t=st=1720176512~exp=1720180112~hmac=da0ca6cce97e119c8a518d66258fae4324befd36302c7d558c2f24a28487b6ce&w=740" // Update this path with the correct image path
            alt="COVID-19 Precautions"
            layout="fill" // Fill the parent container
            objectFit="cover" // Ensure the image covers the container
            className="rounded"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-4 text-center">
            <h2 className="text-md mb-2 uppercase text-white">  CONTACT US</h2>
            <h1 className="mb-4 text-3xl font-bold text-white"> Get in Touch with Us</h1>
            <Link href="/">
              <button className="rounded bg-white px-8 py-4 font-semibold text-black hover:text-[#ef1c25]">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
