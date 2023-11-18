import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import resume from "../../assets/youkwhan_kim_resume.pdf";

function Navbar() {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width:950px)");

  return (
    <nav>
      <div className="sticky top-0 z-30 w-full py-6 ">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-16 font-opensans">
          <AnchorLink className="text-2xl text-primary-200" href="#home">
            youkwhan kim
          </AnchorLink>

          {isAboveMediumScreens ? (
            <div className="flex items-center justify-end gap-8">
              <AnchorLink
                className="transition duration-500 hover:text-primary-300 hover:underline"
                href="#works"
              >
                Works
              </AnchorLink>
              <AnchorLink
                className="transition duration-500 hover:text-primary-300 hover:underline"
                href="#"
              >
                About
              </AnchorLink>
              <a
                className="transition duration-500 hover:text-primary-300 hover:underline"
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
            <AnchorLink
              className="transition duration-500 hover:text-primary-300 hover:underline"
              href="#home"
            >
              Home
            </AnchorLink>
            <AnchorLink
              className="transition duration-500 hover:text-primary-300 hover:underline"
              href="#works"
            >
              Works
            </AnchorLink>
            <AnchorLink
              className="transition duration-500 hover:text-primary-300 hover:underline"
              href="#"
            >
              About
            </AnchorLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
