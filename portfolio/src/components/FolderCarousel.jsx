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

  const visible_projects = projects.slice(index, index + visible);

  return (
    <div className="flex items-center justify-center w-full px-6">
      <button
        onClick={prev}
        disabled={index === 0}
        className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-zinc-700 flex items-center justify-center text-zinc-700 hover:border-pink-400 hover:text-pink-400 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronLeft size={18} />
      </button>

      <div className="flex gap-6 justify-center flex-1">
        {visible_projects.map((project, i) => {
          const folderImg = folderImages.length > 0
            ? folderImages[(index + i) % folderImages.length]
            : null;

          return (
            <a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-1 max-w-55"
              style={{ textDecoration: "none" }}
            >
              <div className="relative transition-transform duration-200 group-hover:-translate-y-2">
                {folderImg ? (
                  <div className="relative">
                    <img src={folderImg} alt={project.name} className="w-full object-contain drop-shadow-2xl" />
                    <p className="absolute bottom-0 left-0 right-0 text-center text-zinc-800 font-bold text-sm px-4 leading-snug">
                      {project.name}
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="absolute -top-3.5 left-4 w-16 h-4 bg-amber-100 rounded-tl-lg rounded-tr-lg border border-b-0 border-amber-200" />
                    <div className="relative bg-amber-50 border border-amber-200 rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-lg pt-6 pb-8 px-5 min-h-40 flex flex-col justify-between shadow-sm"
                      style={{
                        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 23px, #e8d5b0 23px, #e8d5b0 24px)`,
                      }}
                    >
                      <div className="absolute top-4 right-5 w-3 h-3 rounded-full border-2 border-amber-300" />
                      <p className="text-zinc-800 font-bold text-sm leading-snug mt-2 pr-4">{project.name}</p>
                      <span className="text-[10px] uppercase tracking-widest text-pink-400 font-semibold mt-4">view project →</span>
                    </div>
                  </>
                )}
              </div>
            </a>
          );
        })}
      </div>

      <button
        onClick={next}
        disabled={index >= maxIndex}
        className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-zinc-700 flex items-center justify-center text-zinc-700 hover:border-pink-400 hover:text-pink-400 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
