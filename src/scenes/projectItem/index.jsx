import { useParams } from "react-router-dom";
import { getProjectData } from "../../shared/dataUtils";

function ProjectItem() {
  const { projectId } = useParams();
  const parsedProjectId = parseInt(projectId, 10); // Convert to integer

  // fetch project data based on projectId
  const projectData = getProjectData(parsedProjectId);

  return (
    <section className="bg-white pb-24">
      <section id="title" className="mx-auto max-w-[950px] py-20">
        <h1 className="mb-14 font-opensans text-7xl font-semibold tracking-normal text-primary-200">
          {projectData.title}
        </h1>
        <p className="mb-7 font-medium text-primary-200">
          {projectData.short_description}
        </p>
        <img
          src={projectData.image}
          alt="project-image"
          className="mb-7 h-[400px] w-full"
        />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-2xl text-primary-200">Team</h3>
            <p className="my-2">{projectData.team}</p>
          </div>
          <div>
            <h3 className="text-2xl text-primary-200">Timeframe</h3>
            <p className="my-2">{projectData.timeframe}</p>
          </div>
          <div>
            <h3 className="text-2xl text-primary-200">My Role</h3>
            <p className="my-2">{projectData.role}</p>
          </div>
          <div>
            <h3 className="text-2xl text-primary-200">Tool</h3>
            <p className="my-2">{projectData.tools}</p>
          </div>
        </div>
      </section>
      <section
        id="background"
        className="full-bleed mx-auto max-w-[950px] bg-bg-gray py-20"
      >
        <h2 className="mb-14 font-opensans text-7xl font-semibold tracking-tight text-primary-200">
          01
          <br />
          BACKGROUND
        </h2>
        <p>{projectData.overview}</p>
      </section>
      <section id="outcome" className="mx-auto max-w-[950px] py-20">
        <h2 className="mb-14 font-opensans text-7xl font-semibold tracking-tight text-primary-200">
          02
          <br />
          OUTCOME
        </h2>
        <h3 className="text-2xl font-semibold text-primary-200">Features</h3>
        <p className="mb-14 mt-4">{projectData.features}</p>
        <h3 className="text-2xl font-semibold text-primary-200">Approach</h3>
        <p className="mt-4">{projectData.approach}</p>
      </section>
      <section
        id="reflection"
        className="half-bleed mx-auto max-w-[1200px] bg-bg-gray py-20"
      >
        <div className="mx-auto max-w-[950px]">
          <h2 className="mb-14 font-opensans text-7xl font-semibold tracking-tight text-primary-200">
            03
            <br />
            REFLECTION
          </h2>
          <h3 className="text-2xl font-semibold text-primary-200">
            Key Takeaways
          </h3>
          <p className="mb-14 mt-4">{projectData.features}</p>
          <h3 className="text-2xl font-semibold text-primary-200">
            Next Steps
          </h3>
          <p className="mt-4">{projectData.approach}</p>
        </div>
      </section>
    </section>
  );
}

export default ProjectItem;
