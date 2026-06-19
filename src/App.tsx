import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Academic from "./pages/Academic";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";
import { projects } from "./data/projects";
import type { Language } from "./i18n";
import type { PageId } from "./types";
import "./styles/index.css";

const pageIds: PageId[] = ["home", "projects", "academic", "publications", "skills", "contact"];

function getInitialPage(): PageId {
  if (typeof window === "undefined") return "home";
  const hash = window.location.hash.replace("#", "") as PageId;
  return pageIds.includes(hash) ? hash : "home";
}

export default function App() {
  const [activePage, setActivePage] = useState<PageId>(getInitialPage());
  const [activeProjectId, setActiveProjectId] = useState(projects[1].id);
  const [language, setLanguage] = useState<Language>("en");

  const activeProject = useMemo(
    () => projects.find((p) => p.id === activeProjectId) || projects[0],
    [activeProjectId]
  );

  useEffect(() => {
    const syncFromUrl = () => setActivePage(getInitialPage());
    window.addEventListener("hashchange", syncFromUrl);
    window.addEventListener("popstate", syncFromUrl);
    return () => {
      window.removeEventListener("hashchange", syncFromUrl);
      window.removeEventListener("popstate", syncFromUrl);
    };
  }, []);

  function goToPage(page: PageId) {
    setActivePage(page);
    window.history.pushState({ page }, "", `#${page}`);
  }

  return (
    <div className="viewport">
      <main className="stage">
        <Sidebar activePage={activePage} goToPage={goToPage} language={language} />
        <Header activePage={activePage} goToPage={goToPage} language={language} setLanguage={setLanguage} />

        {activePage === "home" && <Home language={language} goToPage={goToPage} setActiveProjectId={setActiveProjectId} />}
        {activePage === "projects" && <Projects activeProject={activeProject} setActiveProjectId={setActiveProjectId} language={language} />}
        {activePage === "skills" && <Skills language={language} />}
        {activePage === "academic" && <Academic language={language} />}
        {activePage === "publications" && <Publications language={language} />}
        {activePage === "contact" && <Contact language={language} />}

        <Footer language={language} />
      </main>
    </div>
  );
}
