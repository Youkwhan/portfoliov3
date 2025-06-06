import IconHtml from "../../assets/icons8/icons8-html.svg";
import IconCSS from "../../assets/icons8/icons8-css.svg";
import IconFigma from "../../assets/icons8/icons8-figma.svg";
import IconFirebase from "../../assets/icons8/icons8-firebase.svg";
import IconGit from "../../assets/icons8/icons8-git.svg";
import IconGithub from "../../assets/icons8/icons8-github.svg";
import IconJavaScript from "../../assets/icons8/icons8-javascript.svg";
import IconTailwindCSS from "../../assets/icons8/icons8-tailwind-css.svg";
import IconReact from "../../assets/icons8/icons8-react.svg";
import IconTypeScript from "../../assets/icons8/icons8-typescript.svg";
import IconPython from "../../assets/icons8/icons8-python.svg";

import IconJava from "../../assets/icons8/icons8-java.svg"; 
import IconSpringBoot from "../../assets/icons8/icons8-spring-boot.svg";
import IconAngular from "../../assets/icons8/icons8-angular.svg";
import IconOracle from "../../assets/icons8/icons8-oracle.svg";
import IconMySQL from "../../assets/icons8/icons8-mysql.svg";
import IconAWS from "../../assets/icons8/icons8-aws.svg";
import IconJUnit from "../../assets/icons8/JUnit.svg";
import IconPerl from "../../assets/icons8/Perl.svg"
import IconBootstrap from "../../assets/icons8/Bootstrap.svg"

function Techstack() {
  return (
    <div className="flex flex-wrap justify-center gap-3 tracking-wide">
      {/* Column 1: Backend & Databases */}
      <div>
        <h3 className="mb-3 rounded-lg bg-secondary-100 p-3 pr-28 text-xl text-white">
          Backend & Databases
        </h3>
        <ul className="icon-list pl-3">
          <li><img src={IconJava} alt="Java icon" className="my-1 mr-1 inline-block w-6" />Java</li>
          <li><img src={IconSpringBoot} alt="Spring Boot icon" className="my-1 mr-1 inline-block w-6" />Spring Boot</li>
          <li><img src={IconOracle} alt="Oracle icon" className="my-1 mr-1 inline-block w-6" />Oracle</li>
          <li><img src={IconMySQL} alt="MySQL icon" className="my-1 mr-1 inline-block w-6" />MySQL</li>
          <li><img src={IconPython} alt="Python icon" className="my-1 mr-1 inline-block w-6" />Python</li>
          <li><img src={IconPerl} alt="Perl icon" className="my-1 mr-1 inline-block w-6" />Perl</li>
          <li><img src={IconFirebase} alt="Firebase icon" className="my-1 mr-1 inline-block w-6"/>Firebase</li>
        </ul>
      </div>

      {/* Column 2: Frontend */}
      <div>
        <h3 className="mb-3 rounded-lg bg-secondary-100 p-3 pr-28 text-xl text-white">
          Frontend
        </h3>
        <ul className="icon-list pl-3">
          <li><img src={IconAngular} alt="Angular icon" className="my-1 mr-1 inline-block w-6" />Angular</li>
          <li><img src={IconReact} alt="React icon" className="my-1 mr-1 inline-block w-6" />React</li>
          <li><img src={IconTypeScript} alt="TypeScript icon" className="my-1 mr-1 inline-block w-6" />TypeScript</li>
          <li><img src={IconJavaScript} alt="JavaScript icon" className="my-1 mr-1 inline-block w-6" />JavaScript</li>
          <li><img src={IconBootstrap} alt="Bootstrap icon" className="my-1 mr-1 inline-block w-6" />Bootstrap</li>
          <li><img src={IconHtml} alt="HTML icon" className="my-1 mr-1 inline-block w-6" />HTML5</li>
          <li><img src={IconCSS} alt="CSS icon" className="my-1 mr-1 inline-block w-6" />CSS3</li>
          <li><img src={IconTailwindCSS} alt="Tailwind CSS icon" className="my-1 mr-1 inline-block w-6" />Tailwind CSS</li>
          <li><img src={IconFigma} alt="Figma icon" className="my-1 mr-1 inline-block w-6"/>Figma</li>
        </ul>
      </div>

      {/* Column 3: Tools, Cloud & Testing */}
      <div>
        <h3 className="mb-3 rounded-lg bg-secondary-100 p-3 pr-28 text-xl text-white">
          Tools, Cloud & Testing
        </h3>
        <ul className="icon-list pl-3">
          <li><img src={IconAWS} alt="AWS icon" className="my-1 mr-1 inline-block w-6" />AWS</li>
          <li><img src={IconGit} alt="Git icon" className="my-1 mr-1 inline-block w-6" />Git</li>
          <li><img src={IconGithub} alt="GitHub icon" className="my-1 mr-1 inline-block w-6" />GitHub</li>
          <li><img src={IconJUnit} alt="JUnit icon" className="my-1 mr-1 inline-block w-6" />JUnit</li>
        </ul>
      </div>
    </div>
  );
}

export default Techstack;
