'use client'
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/bloglogo.jpg";
import { useState } from 'react';

interface NavLink {
  title: string;
  path: string;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks: NavLink[] = [
    { title: "Home", path: "/" },
    { title: "Blog", path: "/blog" },
    { title: "About Us", path: "/aboutus" },
    { title: "Contact", path: "/contact" }
  ];

  return (
    <div className="w-full border-b border-gray-200 shadow-sm sticky top-0 bg-white z-50 px-5 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" passHref>
          <div className="relative w-12 h-12 lg:w-16 lg:h-16 cursor-pointer">
            <Image layout="fill" objectFit="contain" src={logo} alt="Blog Logo" />
          </div>
        </Link>
        <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        <div className={`${isOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row items-center justify-end lg:w-auto w-full`}>
          <ul className={`${isOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 p-4 lg:p-0 absolute lg:relative top-16 right-0 lg:top-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none`}>
            {navLinks.map((link) => (
              <li key={link.title} className="text-gray-700 hover:text-blue-500 transition-colors duration-300">
                <Link href={link.path}>
                  <div className="text-center block">{link.title}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
