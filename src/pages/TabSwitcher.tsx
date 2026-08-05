import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const tabs = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Publications", path: "/publications" },
  { name: "Life", path: "/life" },
];

export default function TabSwitcher() {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine the active index based on the current URL path
  const activeIndex = useMemo(() => {
    const idx = tabs.findIndex((tab) => tab.path === location.pathname);
    return idx === -1 ? 0 : idx;
  }, [location.pathname]);

  const handleTabClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="fixed left-1/2 top-4 z-50 -translate-x-1/2">
      <div className="relative mx-auto flex w-max rounded-full border border-white/5 bg-white/10 p-1 shadow-lg backdrop-blur-md">
        {/* Frosted glass glider */}
        <div
          className="absolute h-[35px] w-[120px] rounded-full bg-slate-400/10 shadow-inner backdrop-blur-lg transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${activeIndex * 100}%)`, zIndex: 1 }}
        />
        {tabs.map((tab, index) => (
          <button
            key={tab.name}
            onClick={() => handleTabClick(tab.path)}
            className={`relative z-10 h-[35px] w-[120px] rounded-full text-sm font-semibold transition-colors ${
              index === activeIndex
                ? "text-white"
                : "text-white/50 hover:text-white"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
}
