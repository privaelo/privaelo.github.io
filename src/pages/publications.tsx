import ProjectCard from "../components/projectCard";
import publications from "../data/publications";
import { DocumentTitle } from "../utils/utils";

export default function PublicationsPage() {
  DocumentTitle("Publications | Tagnon Okoumassoun");

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 lg:px-24">
      <h1 className="mb-8 ml-4 mt-8 text-4xl font-bold text-slate-200 sm:text-5xl">
        Publications
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {publications.map((publication) => (
          <ProjectCard
            key={publication.slug}
            title={publication.title}
            description={publication.description}
            image={publication.coverImage}
            tags={publication.tags}
            xlink={`/publications/${publication.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
