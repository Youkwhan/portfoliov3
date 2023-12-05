import IconHtml from "../../assets/icons8/icons8-html.svg";
import IconCSS from "../../assets/icons8/icons8-css.svg";
import IconFigma from "../../assets/icons8/icons8-figma.svg";
import IconFirebase from "../../assets/icons8/icons8-firebase.svg";
import IconGit from "../../assets/icons8/icons8-git.svg";
import IconGithub from "../../assets/icons8/icons8-github.svg";
import IconJavaScript from "../../assets/icons8/icons8-javascript.svg";
import IconNpm from "../../assets/icons8/icons8-npm.svg";
import IconTailwindCSS from "../../assets/icons8/icons8-tailwind-css.svg";
import IconReact from "../../assets/icons8/icons8-react.svg";
import IconTypeScript from "../../assets/icons8/icons8-typescript.svg";
import IconPython from "../../assets/icons8/icons8-python.svg";

function Techstack() {
  return (
    <div className="flex flex-wrap justify-center gap-3 tracking-wide">
      <div>
        <h3 className="mb-3 rounded-lg bg-secondary-100 p-3 pr-28 text-xl text-white">
          Frontend
        </h3>
        <ul className="icon-list pl-3">
          <li>
            <img
              src={IconHtml}
              alt="html icon"
              className="my-1 mr-1 inline-block w-6"
            />
            HTML
          </li>
          <li>
            <img
              src={IconCSS}
              alt="html icon"
              className="my-1 mr-1 inline-block w-6"
            />
            CSS
          </li>
          <li>
            <img
              src={IconJavaScript}
              alt="html icon"
              className="my-1 mr-1 inline-block w-6"
            />
            JavaScript
          </li>
          <li>
            <img
              src={IconReact}
              alt="html icon"
              className="my-1 mr-1 inline-block w-6"
            />
            React
          </li>
          <li>
            <img
              src={IconTypeScript}
              alt="html icon"
              className="my-1 mr-1 inline-block w-6"
            />
            TypeScript
          </li>
          <li>
            <img
              src={IconTailwindCSS}
              alt="html icon"
              className="my-1 mr-1 inline-block w-6"
            />
            Tailwind CSS
          </li>
          <li>
            <img
              src={IconFigma}
              alt="html icon"
              className="my-1 mr-1 inline-block w-6"
            />
            Figma
          </li>
        </ul>
      </div>
      <div>
        <h3 className="mb-3 rounded-lg bg-secondary-100 p-3 pr-28 text-xl text-white">
          Backend
        </h3>
        <ul className="icon-list pl-3">
          <li>
            <img
              src={IconPython}
              alt="html icon"
              className="my-1 mr-1 inline-block w-6"
            />
            Python
          </li>
          <li>
            <img
              src={IconFirebase}
              alt="html icon"
              className="my-1 mr-1 inline-block w-6"
            />
            Firebase
          </li>
        </ul>
      </div>
      <div>
        <h3 className="mb-3 rounded-lg bg-secondary-100 p-3 pr-28 text-xl text-white">
          Tools
        </h3>
        <ul className="icon-list pl-3">
          <li>
            <img
              src={IconGit}
              alt="html icon"
              className="my-1 mr-1 inline-block w-6"
            />
            Git
          </li>
          <li>
            <img
              src={IconGithub}
              alt="html icon"
              className="my-1 mr-1 inline-block w-6"
            />
            GitHub
          </li>
          <li>
            <img
              src={IconNpm}
              alt="html icon"
              className="my-1 mr-1 inline-block w-6"
            />
            Npm
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Techstack;
