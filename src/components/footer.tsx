import Image from "next/image";
import logo from "../../public/images/logo.png";
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full py-10 bg-gray-800 text-white px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-center items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image src={logo} width={80} height={80} alt="logo" />
          <p className="flex items-center text-sm gap-1">
            <AiOutlineCopyrightCircle />
            BlogBliss || all rights reserved
          </p>
        </div>

        <div className="flex gap-6">
          <BsFacebook className="w-6 h-6 hover:text-blue-500 cursor-pointer" />
          <BsGithub className="w-6 h-6 hover:text-gray-500 cursor-pointer" />
          <BsLinkedin className="w-6 h-6 hover:text-blue-700 cursor-pointer" />
          <BsTwitter className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
