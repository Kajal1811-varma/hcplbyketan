import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white"  style={{paddingTop:"60px"}}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 flex items-center">
          <div className="text-5xl font-bold mr-3 mb-10">GROW</div>
          <div className="text-lg mt-12">WITH</div>
          <div className="w-[50px] mt-12">
          <img
              src="/assets/images/HcplLogo.png"
              alt="HCPL Logo"
              style={{width:"45%"}}
            />

          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="font-semibold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li className="hover:text-[#ef1c25]">
                <Link href="/about-us">About Us</Link>
              </li>
              <li className="hover:text-[#ef1c25]">
                <Link href="/board">Board</Link>
              </li>
              <li className="hover:text-[#ef1c25]">
                <Link href="/business">Business</Link>
              </li>
              <li className="hover:text-[#ef1c25]">
                <Link href="/impact">Impact</Link>
              </li>
              <li className="hover:text-[#ef1c25]">
                <Link href="/career">Career</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-xl mb-6">Social</h4>
            <ul className="cursor-pointer space-y-4">
              <li className="hover:text-[#ef1c25]">LinkedIn</li>
              <li className="hover:text-[#ef1c25]">Instagram</li>
              <li className="hover:text-[#ef1c25]">twitter</li>
              <li className="hover:text-[#ef1c25]">Facebook</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-xl mb-6">Get in Touch</h4>
            <ul>
              <li className="hover:text-[#ef1c25]">
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className=" my-8 mx-auto border-white" style={{ width: '90%' }} />
      <div className="border-t border-gray-700 mb-4 pt-6 text-center text-sm">
        &copy; 2024 HCPL
      </div>
    </footer>
  );
}
