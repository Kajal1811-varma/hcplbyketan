// import siteMetadata from '@/data/siteMetadata'
// import HcplLogo from 'public/HcplLogo.jpeg'
import Link from 'next/link'
import MobileNav from './MobileNav'
import Image from 'next/image'
// import image1 from "p"

const Header = () => {
    const headerNavLinks = [
        { href: '/', title: 'Home' },
        { href: '/about', title: 'About Us' },
        { href: '/impact', title: 'Impact' },
        { href: '/board', title: 'Board' },
        { href: '/business', title: 'Business' },
        { href: '/career', title: 'Career' },
        { href: '/contactus', title: ' Contact Us' },
      ]
  return (
    <header className="container mx-auto flex items-center justify-between py-3">
      <div>
        <Link href="/" aria-label="">
          <div className="flex items-center justify-between">
            <div className="ml-3"> 
            <Image src="/assets/images/HcplLogo.png" alt="Logo" width={130} height={100}/>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 space-x-4  hover:text-[#ef1c25] dark:text-gray-100 dark:hover:text-[#ef1c25] sm:block"
            >
              {link.title}
            </Link>
          ))}
       
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
