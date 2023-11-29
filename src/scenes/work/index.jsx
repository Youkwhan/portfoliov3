import { NavLink } from "react-router-dom";

function Work() {
  return (
    <section id="works">
      <div className="mx-auto max-w-[950px]">
        <div>
          <NavLink
            to="/projects/1"
            className="h-[400px] w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] content-vanlife hover:cursor-pointer"
          ></NavLink>
          <NavLink
            to="/projects/1"
            className="mb-16 mt-4 flex items-center justify-start gap-5"
          >
            <h2 className="font-opensans text-xl font-bold text-primary-200">
              Hamoodette - Effect House
            </h2>
            <p>
              User Experience / 3D Code-based Desktop Software / Augmented
              Reality
            </p>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/projects/2"
            className="h-[400px] w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] content-vanlife hover:cursor-pointer"
          ></NavLink>
          <NavLink
            to="/projects/2"
            className="mb-16 mt-4 flex items-center justify-start gap-5"
          >
            <h2 className="font-opensans text-xl font-bold text-primary-200">
              Hamoodette - Effect House
            </h2>
            <p>
              User Experience / 3D Code-based Desktop Software / Augmented
              Reality
            </p>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/projects/3"
            className="h-[400px] w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] content-vanlife hover:cursor-pointer"
          ></NavLink>
          <NavLink
            to="/projects/3"
            className="mb-16 mt-4 flex items-center justify-start gap-5"
          >
            <h2 className="font-opensans text-xl font-bold text-primary-200">
              Hamoodette - Effect House
            </h2>
            <p>
              User Experience / 3D Code-based Desktop Software / Augmented
              Reality
            </p>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/projects/4"
            className="h-[400px] w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] content-vanlife hover:cursor-pointer"
          ></NavLink>
          <NavLink
            to="/projects/4"
            className="mb-16 mt-4 flex items-center justify-start gap-5"
          >
            <h2 className="font-opensans text-xl font-bold text-primary-200">
              Hamoodette - Effect House
            </h2>
            <p>
              User Experience / 3D Code-based Desktop Software / Augmented
              Reality
            </p>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Work;
