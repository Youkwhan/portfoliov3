import React, { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import resume from "../../assets/youk_kim_resume_2025.pdf";
import { NavLink } from "react-router-dom";
import { scrollToSection } from "../../shared/scrollUtils";

function Navbar() {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width:950px)");

  return (
    <nav id="navbar">
      <div className="sticky top-0 z-30 w-full py-6 px-4">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-16 font-opensans">
          <NavLink
            className="text-2xl text-primary-200"
            to="/"
            onClick={() => scrollToSection("home")}
          >
            youkwhan kim
          </NavLink>

          {isAboveMediumScreens ? (
            <div className="flex items-center justify-end gap-8">
              <NavLink
                className="transition duration-500 hover:text-primary-200 hover:underline"
                to="/"
                onClick={() => scrollToSection("works")}
              >
                Works
              </NavLink>
              <NavLink
                className="transition duration-500 hover:text-primary-200 hover:underline"
                to="/about"
              >
                About
              </NavLink>
              <a
                className="transition duration-500 hover:text-primary-200 hover:underline"
                target="_blank"
                href={resume}
              >
                Resume
              </a>
            </div>
          ) : (
            // MENU BAR (mobile v.)
            <button
              className="rounded-full bg-primary-300 p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Modal */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-300 drop-shadow-xl">
          {/* Close Icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <NavLink
              className="transition duration-500 hover:text-primary-200 hover:underline"
              to="/"
              onClick={() => scrollToSection("home")}
            >
              Home
            </NavLink>
            <NavLink
              className="transition duration-500 hover:text-primary-200 hover:underline"
              to="/"
              onClick={() => scrollToSection("works")}
            >
              Works
            </NavLink>
            <NavLink
              className="transition duration-500 hover:text-primary-200 hover:underline"
              to="/about"
            >
              About
            </NavLink>
            <a
              className="transition duration-500 hover:text-primary-200 hover:underline"
              target="_blank"
              href={resume}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
