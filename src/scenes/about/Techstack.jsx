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
       {/* Column 1: Frontend */}
      <div>
        <h3 className="p-3 mb-3 text-xl text-white rounded-lg bg-secondary-100">
          Frontend
        </h3>
        <ul className="pl-3 icon-list">
          <li><img src={IconAngular} alt="Angular icon" className="inline-block w-6 my-1 mr-1" />Angular</li>
          <li><img src={IconReact} alt="React icon" className="inline-block w-6 my-1 mr-1" />React</li>
          <li><img src={IconTypeScript} alt="TypeScript icon" className="inline-block w-6 my-1 mr-1" />TypeScript</li>
          <li><img src={IconJavaScript} alt="JavaScript icon" className="inline-block w-6 my-1 mr-1" />JavaScript</li>
          <li><img src={IconBootstrap} alt="Bootstrap icon" className="inline-block w-6 my-1 mr-1" />Bootstrap</li>
          <li><img src={IconTailwindCSS} alt="Tailwind CSS icon" className="inline-block w-6 my-1 mr-1" />Tailwind CSS</li>
          <li><img src={IconCSS} alt="CSS icon" className="inline-block w-6 my-1 mr-1" />CSS3</li>
          <li><img src={IconHtml} alt="HTML icon" className="inline-block w-6 my-1 mr-1" />HTML5</li>
          <li><img src={IconFigma} alt="Figma icon" className="inline-block w-6 my-1 mr-1"/>Figma</li>
        </ul>
      </div>

      {/* Column 2: Backend & Databases */}
      <div>
        <h3 className="p-3 mb-3 text-xl text-white rounded-lg bg-secondary-100">
          Backend
        </h3>
        <ul className="pl-3 icon-list">
          <li><img src={IconJava} alt="Java icon" className="inline-block w-6 my-1 mr-1" />Java</li>
          <li><img src={IconSpringBoot} alt="Spring Boot icon" className="inline-block w-6 my-1 mr-1" />Spring Boot</li>
          <li><img src={IconPython} alt="Python icon" className="inline-block w-6 my-1 mr-1" />Python</li>
          <li><img src={IconPerl} alt="Perl icon" className="inline-block w-6 my-1 mr-1" />Perl</li>
          <li><img src={IconOracle} alt="Oracle icon" className="inline-block w-6 my-1 mr-1" />Oracle</li>
          <li><img src={IconMySQL} alt="MySQL icon" className="inline-block w-6 my-1 mr-1" />MySQL</li>
          <li><img src={IconFirebase} alt="Firebase icon" className="inline-block w-6 my-1 mr-1"/>Firebase</li>
        </ul>
      </div>

      {/* Column 3: Tools, Cloud & Testing */}
      <div>
        <h3 className="p-3 mb-3 text-xl text-white rounded-lg bg-secondary-100">
          Tools
        </h3>
        <ul className="pl-3 icon-list">
          <li><img src={IconGit} alt="Git icon" className="inline-block w-6 my-1 mr-1" />Git</li>
          <li><img src={IconGithub} alt="GitHub icon" className="inline-block w-6 my-1 mr-1" />GitHub</li>
          <li><img src={IconAWS} alt="AWS icon" className="inline-block w-6 my-1 mr-1" />AWS</li>
          <li><img src={IconJUnit} alt="JUnit icon" className="inline-block w-6 my-1 mr-1" />JUnit</li>
        </ul>
      </div>
    </div>
  );
}

export default Techstack;
