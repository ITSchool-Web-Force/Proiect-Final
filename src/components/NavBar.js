import React from "react";
//to include an img in next you have to import the next/image component
import Image from "next/image";
import jslogo from "../../public/javascript-logo.svg";
import hamburgerMenu from "../../public/assets/hamburger-menu.svg";
import close from "../../public/assets/close.svg";

import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [navbar, setNavBar] = useState(false);

  return (
    <div>
      <nav className="w-full bg-[#5a82ba] right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <div className="flex gap-2">
                  <h1 className="text-xl text-white font-nunito">Js coder</h1>
                  <Image src={jslogo} alt="javascript logo" width={25} />
                </div>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavBar(!navbar)}
                >
                  {navbar ? (
                    <Image src={close} width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src={hamburgerMenu}
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-[#eeec44]  border-[#eeec44]  md:hover:text-[#eeec44] md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavBar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#eeec44]  border-[#eeec44]  md:hover:text-[#eeec44] md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavBar(!navbar)}>
                    Projects
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#eeec44]  border-[#eeec44]  md:hover:text-[#eeec44] md:hover:bg-transparent">
                  <Link href="#skills" onClick={() => setNavBar(!navbar)}>
                    Skills
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#eeec44]  border-[#eeec44]  md:hover:text-[#eeec44] md:hover:bg-transparent">
                  <Link href="#testimonials" onClick={() => setNavBar(!navbar)}>
                    Testimonials
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#eeec44]  border-[#eeec44]  md:hover:text-[#eeec44] md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavBar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
