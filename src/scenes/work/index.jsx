import { NavLink } from "react-router-dom";

function Work() {
  return (
    <section id="works">
      <div className="mx-auto max-w-[950px]">
        <div>
          <NavLink
            to="/projects/1"
            onClick={() => scrollToSection("title")}
            className="h-[450px] w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] content-vanlife hover:cursor-pointer"
          ></NavLink>
          <NavLink
            to="/projects/1"
            onClick={() => scrollToSection("title")}
            className="mb-16 mt-4 flex items-center justify-start gap-5"
          >
            <h2 className="font-opensans text-xl font-bold text-primary-200">
              Vanlife - Rental Platform
            </h2>
            <p>User Experience / Advanced Routing / Secure Access Control</p>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/projects/2"
            onClick={() => scrollToSection("title")}
            className="h-[450px] w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] content-quizzical hover:cursor-pointer"
          ></NavLink>
          <NavLink
            to="/projects/2"
            onClick={() => scrollToSection("title")}
            className="mb-16 mt-4 flex items-center justify-start gap-5"
          >
            <h2 className="font-opensans text-xl font-bold text-primary-200">
              Quizzical - Trivia Quiz
            </h2>
            <p>User Engagement / State Management / API Integration</p>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/projects/3"
            onClick={() => scrollToSection("title")}
            className="h-[450px] w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] content-watchlist hover:cursor-pointer"
          ></NavLink>
          <NavLink
            to="/projects/3"
            onClick={() => scrollToSection("title")}
            className="mb-16 mt-4 flex items-center justify-start gap-5"
          >
            <h2 className="font-opensans text-xl font-bold text-primary-200">
              MovieVault - Film Bookmarking
            </h2>
            <p>Personalized Watchlist / DOM Manipulation / API Integration</p>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Work;
