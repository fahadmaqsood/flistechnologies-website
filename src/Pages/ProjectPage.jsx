import React from "react";
import ProjectDetails from "../component/Project/ProjectDetails";
import ProjectModal from "../component/Project/ProjectModal";

import { useTitle } from "../utils";

function ProjectPage() {
  useTitle("Projects | Flis Technologies");
  return (
    <>
      <ProjectDetails />
      {/* <CardLayout /> */}
      <ProjectModal />
    </>
  );
}

export default ProjectPage;
