import { useParams } from "react-router-dom";
import { getProjectData } from "../../shared/dataUtils";

function ProjectItem() {
  const { projectId } = useParams();
  // fetch project data based on projectId
  const projectData = getProjectData(projectId);

  return (
    <section>
      <div>
        <section id="title"></section>
        <section id="background"></section>
        <section id="outcome"></section>
        <section id="reflection"></section>
      </div>
    </section>
  );
}

export default ProjectItem;
