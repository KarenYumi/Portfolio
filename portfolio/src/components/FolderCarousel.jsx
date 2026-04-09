import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FolderCarousel({ projects = [], folderImages = [] }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, projects.length - visible);
  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));
  const visibleProjects = projects.slice(index, index + visible);

  return (
    <div className="w-full">
      <div className="flex gap-6 md:gap-10 justify-center items-end py-10 px-2">
        {visibleProjects.map((project, i) => {
          const folderImg = folderImages.length > 0
            ? folderImages[(index + i) % folderImages.length]
            : null;

          return (
            <a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-1 max-w-56 block"
              style={{ textDecoration: "none" }}
            >
              <div className="relative transition-transform duration-200 group-hover:-translate-y-2">
                {folderImg && (
                  <div className="relative">
                    <img
                      src={folderImg}
                      alt={project.name}
                      className="w-full object-contain drop-shadow-2xl"
                    />
                    <p className="absolute bottom-0 left-0 right-0 text-center text-white text-sm px-4 leading-snug">
                      {project.name}
                    </p>
                  </div>
                )}
              </div>
            </a>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-5 mt-2">
        <button
          onClick={prev}
          disabled={index === 0}
          className="w-9 h-9 rounded-full border-2 border-zinc-600 flex items-center justify-center text-zinc-500 hover:border-violet-500 hover:text-violet-500 transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="flex gap-2 items-center">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              style={{
                width: i === index ? "24px" : "8px",
                height: "8px",
                borderRadius: "9999px",
                background: i === index ? "#8b5cf6" : "#3f3f46",
                transition: "width 0.25s ease, background 0.25s ease",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={index >= maxIndex}
          className="w-9 h-9 rounded-full border-2 border-zinc-600 flex items-center justify-center text-zinc-500 hover:border-violet-500 hover:text-violet-500 transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
