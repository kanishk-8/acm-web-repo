"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Link } from "react-scroll";

export const NavBar = () => {
  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible((prev) => !prev);
  };

  return (
    <header className="flex justify-between w-full bg-[#28242c] backdrop-blur-sm fixed top-0 z-50 h-16 p-2 xl:px-6 items-center">
      <div className="flex items-center space-x-2">
        <Image src="/acm_icon.svg" height={50} width={50} alt="ACM Icon" />
        <div className="flex items-center space-x-2">
          <h3 className="text-[#00C0FF] font-bold max-md:text-xl text-2xl">
            ACM
          </h3>
          <span className="text-[#F7F7F7] max-md:hidden">|</span>
          <h3 className="max-md:text-xl text-2xl font-bold text-[#F7F7F7] max-lg:hidden">
            University School of Automation and Robotics
          </h3>
          <h3 className="max-md:text-xl text-2xl font-bold  text-[#F7F7F7] max-sm:hidden lg:hidden">
            USAR
          </h3>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        aria-controls="primary-navigation"
        aria-expanded={navVisible}
        className="mobile-nav-toggle"
        onClick={toggleNav}
      >
        <span className="sr-only">Menu</span>
      </button>

      
      <nav>
        <ul
          id="primary-navigation"
          className="flex primary-navigation text-white md:gap-6 font-normal max-md:text-lg text-xl 
          "
          data-visible={navVisible}
        >
          <li className="active cursor-pointer px-2 py-1">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span aria-hidden="true" className="md:hidden">00</span>
              About
            </Link>
          </li>

          <li className="cursor-pointer px-2 py-1">
            <Link
              activeClass="active"
              to="team"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span aria-hidden="true" className="md:hidden">01</span>
              Team
            </Link>
          </li>

          <li className="cursor-pointer md:bg-[#8097FF] md:bg-opacity-41 px-2 py-1 rounded-lg">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span aria-hidden="true" className="sm:hidden">02</span>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
