import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Navbar(selectedPage, setSelectedPage) {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <nav>
      <div className="sticky top-0 z-30 w-full py-6 ">
        <div className="mx-auto flex w-5/6 items-center justify-between gap-16 font-opensans">
          <AnchorLink
            className="text-2xl text-primary-200 "
            href="#home"
            onClick={() => setSelectedPage("home")}
          >
            youkwhan kim
          </AnchorLink>

          {isAboveMediumScreens ? (
            <div className="flex items-center justify-end gap-8 text-sm">
              <AnchorLink
                className={`${
                  selectedPage === "works" ? "text-secondary-100" : ""
                } transition duration-500 hover:text-primary-300`}
                href="#works"
                onClick={() => setSelectedPage("works")}
              >
                Works
              </AnchorLink>
              <AnchorLink
                className={`${
                  selectedPage === "about" ? "text-secondary-100" : ""
                } transition duration-500 hover:text-primary-300`}
                href="#"
                onClick={() => setSelectedPage("about")}
              >
                About
              </AnchorLink>
              <a target="_blank" href="#">
                Resume
              </a>
            </div>
          ) : (
            // MENU BAR (mobile v.)
            <button
              className="bg-secondary-100 rounded-full p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
