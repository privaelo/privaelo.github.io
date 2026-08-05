import { useParams } from "react-router-dom";
import ProjectDemo from "../components/projectDemo";
import NotFound from "./notFound";
import projects from "../data/projects";
import { DocumentTitle } from "../utils/utils";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  DocumentTitle(
    project
      ? `${project.title} | Tagnon Okoumassoun`
      : "Project not found | Tagnon Okoumassoun",
  );

  if (!project) {
    return <NotFound />;
  }

  return (
    <ProjectDemo
      {...project}
      backLink="/projects"
      backLabel="Back to Projects"
    />
  );
}
