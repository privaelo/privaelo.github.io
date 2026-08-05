import { useParams } from "react-router-dom";
import ProjectDemo from "../components/projectDemo";
import NotFound from "./notFound";
import publications from "../data/publications";
import { DocumentTitle } from "../utils/utils";

export default function PublicationDetailPage() {
  const { slug } = useParams();
  const publication = publications.find((p) => p.slug === slug);

  DocumentTitle(
    publication
      ? `${publication.title} | Tagnon Okoumassoun`
      : "Publication not found | Tagnon Okoumassoun",
  );

  if (!publication) {
    return <NotFound />;
  }

  return (
    <ProjectDemo
      {...publication}
      backLink="/publications"
      backLabel="Back to Publications"
    />
  );
}
