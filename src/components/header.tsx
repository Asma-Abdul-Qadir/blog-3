'use client'
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/bloglogo.jpg";
import { useState } from 'react';

// Define a type for the navigation links
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
    <div className="w-full h-20 border-b border-gray-200 shadow-sm sticky top-0 bg-white z-50 px-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto h-full">
        <div className="flex-1 flex justify-center lg:justify-start">
          <Link href="/" className="relative w-20 h-20">
            <Image layout="fill" objectFit="contain" src={logo} alt="Blog Logo" />
          </Link>
        </div>
        <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        <div className={`flex-1 ${isOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row items-center justify-center w-full`}>
          <ul className={`flex gap-8 uppercase text-sm font-semibold justify-center pb-4 lg:pb-0 ${isOpen ? 'flex' : 'hidden'} lg:flex text-gray-700`}>
            {navLinks.map((link) => (
              <li key={link.title} className="headerLi cursor-pointer hover:text-blue-500 transition-colors duration-300">
                <Link href={link.path} className="block text-center">{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
