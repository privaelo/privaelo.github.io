import ProjectCard from "../components/projectCard";
import projects from "../data/projects";
import { DocumentTitle } from "../utils/utils";

export default function ProjectsPage() {
  DocumentTitle("Projects | Tagnon Okoumassoun");

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 lg:px-24">
      <h1 className="mb-8 ml-4 mt-8 text-4xl font-bold text-slate-200 sm:text-5xl">
        Projects
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            description={project.description}
            image={project.coverImage}
            tags={project.tags}
            xlink={`/projects/${project.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
