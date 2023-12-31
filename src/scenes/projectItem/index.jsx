import { NavLink, useParams } from "react-router-dom";
import { getProjectData } from "../../shared/dataUtils";
import { scrollToSection } from "../../shared/scrollUtils";
import github from "../../assets/icons8/icons8-github.svg";

function ProjectItem() {
  const { projectId } = useParams();
  const parsedProjectId = parseInt(projectId, 10); // Convert to integer

  // fetch project data based on projectId
  const projectData = getProjectData(parsedProjectId);

  return (
    <section className="bg-white px-4 pb-24 md:px-0">
      <section id="title" className="mx-auto max-w-[950px] py-20">
        <h1 className="mb-14 font-opensans text-5xl font-semibold tracking-normal text-primary-200 md:text-7xl">
          {projectData.title}
        </h1>
        <p className="mb-7 font-medium text-primary-200">
          {projectData.short_description}
        </p>
        <img
          src={projectData.image}
          alt="project-image"
          className="mb-7 max-h-[500px] w-full shadow-[3px_3px_10px_rgb(0,0,0,0.2)]"
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-2xl text-primary-200">Team</h3>
            <p className="my-2">{projectData.team}</p>
          </div>
          <div>
            <h3 className="text-2xl text-primary-200">Live</h3>
            <div className="flex items-center gap-2">
              <a
                href={projectData.live[0]}
                target="_blank"
                className={`link project0${parsedProjectId}-accent`}
              >
                View Site
              </a>
              <a href={projectData.live[1]} target="_blank">
                <img src={github} alt="github-link" className="w-7" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-2xl text-primary-200">My Role</h3>
            <p className="my-2">{projectData.role}</p>
          </div>
          <div>
            <h3 className="text-2xl text-primary-200">Stack</h3>
            <p className="my-2">{projectData.stack}</p>
          </div>
        </div>
      </section>
      <section
        id="background"
        className="full-bleed mx-auto max-w-[950px] bg-bg-gray py-20"
      >
        <h2 className="mb-14 font-opensans text-5xl font-semibold tracking-tight text-primary-200 md:text-7xl">
          01
          <br />
          BACKGROUND
        </h2>
        <p className="leading-8">{projectData.overview}</p>
      </section>
      <section id="outcome" className="mx-auto max-w-[950px] py-20">
        <h2 className="mb-14 font-opensans text-5xl font-semibold tracking-tight text-primary-200 md:text-7xl">
          02
          <br />
          OUTCOME
        </h2>
        <h3 className="text-2xl font-semibold text-primary-200">Features</h3>
        <div className="mb-14 mt-4">{projectData.features}</div>
        <h3 className="text-2xl font-semibold text-primary-200">Approach</h3>
        <div className="mt-4">{projectData.approach}</div>
      </section>
      <section
        id="reflection"
        className="half-bleed mx-auto max-w-[1200px] bg-bg-gray py-20 px-2"
      >
        <div className="mx-auto max-w-[950px]">
          <h2 className="mb-14 font-opensans text-5xl md:text-7xl font-semibold tracking-tight text-primary-200">
            03
            <br />
            REFLECTION
          </h2>
          <h3 className="text-2xl font-semibold text-primary-200">
            Key Takeaways
          </h3>
          <div className="mb-14 mt-4">{projectData.learned}</div>
          <h3 className="text-2xl font-semibold text-primary-200">
            Next Steps
          </h3>
          <div className="mt-4">{projectData.optimization}</div>
          <div className="flex items-center justify-between pt-20">
            <NavLink to="/" onClick={() => scrollToSection("navbar")}>
              OTHER PROJECTS
            </NavLink>
            <NavLink to="#" onClick={() => scrollToSection("navbar")}>
              TOP OF PAGE
            </NavLink>
          </div>
        </div>
      </section>
    </section>
  );
}

export default ProjectItem;
