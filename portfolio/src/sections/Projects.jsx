import pin1 from '../assets/images/pin1.png'
import pin2 from '../assets/images/pin2.png'
import folder1 from '../assets/images/folder1.png'
import folder2 from '../assets/images/folder2.png'
import folder3 from '../assets/images/folder3.png'
import folder4 from '../assets/images/folder4.png'
import FolderCarousel from '../components/FolderCarousel';

const projects = [
  { id: 1, name: "Project One", href: "#" },
  { id: 2, name: "Project Two", href: "#" },
  { id: 3, name: "Project Three", href: "#" },
  { id: 4, name: "Project Four", href: "#" },
  { id: 5, name: "Project Five", href: "#" },
  { id: 6, name: "Project Six", href: "#" },
];

export default function Projects() {
  return (
    <section
      id='projects'
      className="bg-zinc-950 py-20 px-6 overflow-hidden relative"
    >
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto relative">
        <div className="flex items-end justify-between mb-2">
          <h2 className="funny-font text-7xl md:text-8xl text-white tracking-tight leading-none">
            PROJECTS
          </h2>
          <span className="funny-font text-5xl md:text-6xl text-white leading-none mb-1">
            0{projects.length}
          </span>
        </div>
        <div className="h-px bg-linear-to-r from-pink-400 via-violet-400 to-transparent flex-1" />

        <FolderCarousel
          projects={projects}
          folderImages={[folder1, folder2, folder3, folder4]}
        />
      </div>
    </section>
  );
}
