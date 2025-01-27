import React, { useState } from "react";
import { NAVIGATION_LINKS } from "../constants";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const togglemenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlelinkclick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementposition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementposition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };
  return (
    <div className="fixed left-0 right-0 z-50 lg:top-4">
      {/* desktopview */}
      <div className="mx-auto hidden max-w-xl items-center justify-center border rounded-full border-white/30 py-2 lg:flex backdrop-blur-lg">
        <div className="flex justify-between items-center gap-6">
          <div>
            <a href="#Home" className="uppercase">
              Narendra
            </a>
          </div>
          <div>
            <ul className="flex items-center gap-4">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a href={item.href}  onClick={(e) => handlelinkclick(e, item.href)} >{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* mobileview */}
      <div className="backdrop-blur-md py-2 lg:hidden">
        <div className="mx-4 my-4 flex items-center justify-between ">
          <div>
            <a href="#Home" className="uppercase">
              Narendra
            </a>
          </div>

          <div className="flex items-center">
            <button onClick={togglemenu} className="focus:outline-none">
              {isMenuOpen ? <RiCloseLine /> : <RiMenu2Line />}
            </button>
          </div>
          
        </div>
        {isMenuOpen && (
            <ul className="ml-4 my-4 flex flex-col gap-6 backdrop-blur-md ">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a className="block w-full text-lg"
                    href={item.href}
                    onClick={(e) => handlelinkclick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
      </div>
    </div>
  );
};

export default Navbar;
