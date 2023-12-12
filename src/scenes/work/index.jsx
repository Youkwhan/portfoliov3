import { NavLink } from "react-router-dom";

function Work() {
  return (
    <section id="works">
      <div className="mx-auto max-w-[950px] px-1">
        <div>
          <NavLink
            to="/projects/1"
            onClick={() => scrollToSection("title")}
            className="pop-out max-h-[450px] w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] content-vanlife hover:cursor-pointer"
          ></NavLink>
          <div className="mb-16 mt-4 flex flex-col items-center justify-start gap-5 md:flex-row ">
            <NavLink to="/projects/1" onClick={() => scrollToSection("title")}>
              <h2 className="project01-underline relative font-opensans text-xl font-bold text-primary-200">
                Vanlife - Rental Platform
              </h2>
            </NavLink>
            <p>User Experience / Advanced Routing / Secure Access Control</p>
          </div>
        </div>
        <div>
          <NavLink
            to="/projects/2"
            onClick={() => scrollToSection("title")}
            className="pop-out max-h-[450px] w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] content-quizzical hover:cursor-pointer"
          ></NavLink>
          <div className="mb-16 mt-4 flex flex-col items-center justify-start gap-5 md:flex-row">
            <NavLink to="/projects/2" onClick={() => scrollToSection("title")}>
              <h2 className="project02-underline relative font-opensans text-xl font-bold text-primary-200">
                Quizzical - Trivia Quiz
              </h2>
            </NavLink>
            <p>User Engagement / State Management / API Integration</p>
          </div>
        </div>
        <div>
          <NavLink
            to="/projects/3"
            onClick={() => scrollToSection("title")}
            className="pop-out max-h-[450px] w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] content-watchlist hover:cursor-pointer"
          ></NavLink>
          <div className="mb-16 mt-4 flex flex-col items-center justify-start gap-5 md:flex-row">
            <NavLink to="/projects/3" onClick={() => scrollToSection("title")}>
              <h2 className="project03-underline relative font-opensans text-xl font-bold text-primary-200">
                MovieVault - Film Bookmarking
              </h2>
            </NavLink>
            <p>Personalized Watchlist / DOM Manipulation / API Integration</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
