import paper from '../assets/images/project_bg.jpg'
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
    <section id='projects' className="min-h-screen flex items-center">
      <div className="relative max-w-6xl 2xl:max-w-7xl mx-auto px-10 py-20 w-full">
        <p className='absolute text-zinc-800 text-7xl left-1/5 top-35'>Projects:</p>
        <img className='absolute object-contain h-21 scale-x-[-1] top-5 left-15' src={pin1} />
        <img className='absolute object-contain h-25 top-3 right-13' src={pin2} />
        <img className='w-full h-full object-contain' src={paper} />
        <div className="absolute inset-0 flex items-center px-16">
          <FolderCarousel projects={projects} folderImages={[folder1, folder2, folder3, folder4]} />
        </div>
      </div>
    </section>
  );
}