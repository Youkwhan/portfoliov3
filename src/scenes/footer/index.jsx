import {
  EnvelopeOpenIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { scrollToSection } from "../../shared/scrollUtils";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <section id="footer">
      <div className="mx-auto  max-w-[950px]  border-t-4 border-primary-300 py-14 relative">
        <div className="flex items-center justify-between">
          <NavLink
            className="text-2xl text-primary-200 "
            to="/"
            onClick={() => scrollToSection("navbar")}
          >
            youkwhan kim
          </NavLink>
          <div className="flex items-center justify-start gap-6 text-primary-400 drop-shadow-lg">
            <a href="mailto:Youkwhan@gmail.com">
              <EnvelopeOpenIcon
                className="w-6"
                style={{ stroke: "currentColor", strokeWidth: 2 }}
              />
            </a>
            <a href="https://github.com/Youkwhan" target="_blank">
              <i className="fa-brands fa-github-alt text-2xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/youkwhan/" target="_blank">
              <i className="fa-brands fa-linkedin-in text-2xl"></i>
            </a>
          </div>
        </div>
        <span className="absolute bottom-2 right-0 text-primary-100 text-sm">
          © 2023 Youkwhan Kim. All rights reserved.
        </span>
      </div>
    </section>
  );
}

export default Footer;
