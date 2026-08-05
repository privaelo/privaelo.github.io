import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/home";
import Projects from "./pages/projects";
import ProjectDetailPage from "./pages/projectDetail";
import Publications from "./pages/publications";
import PublicationDetailPage from "./pages/publicationDetail";
import GalleryPage from "./pages/photogallery";
import NotFound from "./pages/notFound";
import PageWrapper from "./components/pageWrapper";
import { useTransitionDirection } from "./hooks/useDirection";
import Spotlight from "./components/spotlight";
import TabSwitcher from "./pages/TabSwitcher";

function App() {
  const location = useLocation();
  const direction = useTransitionDirection();

  const showTabSwitcher = ["/", "/projects", "/publications", "/life"].includes(
    location.pathname,
  );

  return (
    <>
      <Spotlight />
      {showTabSwitcher && <TabSwitcher />}
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper direction={direction}>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/projects"
            element={
              <PageWrapper direction={direction}>
                <Projects />
              </PageWrapper>
            }
          />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />

          <Route
            path="/publications"
            element={
              <PageWrapper direction={direction}>
                <Publications />
              </PageWrapper>
            }
          />
          <Route
            path="/publications/:slug"
            element={<PublicationDetailPage />}
          />

          <Route
            path="/life"
            element={
              <PageWrapper direction={direction}>
                <GalleryPage />
              </PageWrapper>
            }
          />
          <Route
            path="*"
            element={
              <PageWrapper direction={direction}>
                <NotFound />
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
