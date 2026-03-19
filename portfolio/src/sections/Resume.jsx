import { Sparkle } from "lucide-react";

const skillGroups = [
  {
    category: "Languages",
    skills: [
      { name: "C", href: "https://www.cprogramming.com/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" },
      { name: "C#", href: "https://www.w3schools.com/cs/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" },
      { name: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", href: "https://www.w3.org/html/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" },
      { name: "CSS3", href: "https://www.w3schools.com/css/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" },
      { name: "React", href: "https://reactjs.org/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" },
      { name: "Tailwind", href: "https://tailwindcss.com/", src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    ],
  },
  {
    category: "Frameworks & Platforms",
    skills: [
      { name: ".NET", href: "https://dotnet.microsoft.com/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg" },
      { name: "Docker", href: "https://www.docker.com/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" },
      { name: "Azure", href: "https://azure.microsoft.com/en-in/", src: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", href: "https://www.mysql.com/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" },
      { name: "PostgreSQL", href: "https://www.postgresql.org", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", href: "https://git-scm.com/", src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
      { name: "Postman", href: "https://postman.com", src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      { name: "Figma", href: "https://www.figma.com/", src: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
    ],
  },
];

export default function Resume() {
  return (
    <>
      <section id='resume' className="min-h-screen flex items-center bg-zinc-950 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 w-full">
          <h2 className='text-4xl md:text-5xl font-bold tracking-tight mb-10 cinzel-font'>Resume</h2>
          <div className="grid md:grid-cols-2 gap-16 items-start mb-6">
            <div className="space-y-10">
              <div>
                <h3 className='text-2xl font-semibold mb-6 flex items-center gap-2 cinzel-font'>
                  <Sparkle /> Technical Skills
                </h3>
                <div className='gap-8 grid md:grid-cols-2 pl-6 ml-2'>
                  {skillGroups.map((group) => (
                    <div key={group.category} className="group">
                      <p className='text-xs text-zinc-500 uppercase tracking-[0.2em] mb-4'>
                        {group.category}
                      </p>
                      <div className='flex flex-wrap gap-5'>
                        {group.skills.map((skill) => (
                          <a
                            key={skill.name}
                            href={skill.href}
                            target="_blank"
                            rel="noreferrer"
                            title={skill.name}
                          >
                            <img src={skill.src} alt={skill.name} className="w-10 h-10 object-contain" />
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <h3 className='text-2xl font-semibold mb-6 flex items-center gap-2 cinzel-font'>
                <Sparkle /> Education
              </h3>
              <div className="pl-6 ml-2 space-y-12">
                <div>
                  <h4 className="text-xl font-bold">Systems Analysis and Development</h4>
                  <p className="text-sm font-medium italic">
                    Fatec São Paulo • 2023 — Present
                  </p>
                  <div className="text-zinc-400 mt-3 text-sm leading-relaxed space-y-2">
                    <p>
                      Focus on Software Engineering, Data Structures, and Full-Stack Development.
                    </p>
                    <p className="border-l-2 border-zinc-800 pl-3 italic">
                      <span className="text-zinc-300 font-medium">Thesis:</span> "The Impact of Generative AI on Complex Reasoning" — Researching the cognitive and technical intersections of LLMs in problem-solving.
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-zinc-300">Other Formations</h4>
                  <ul className="text-zinc-400 mt-2 text-sm list-disc list-inside space-y-1">
                    <li>Cs50 - Introduction to Computer Science | HarvardX</li>
                    <li>React - The complete Guide (incl. Next.js, Redux) |Udemy</li>
                    <li>Web API - ASP .NET Core Essencial (.NET 8/ .NET 9) | Udemy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-start mb-6">
            <div className="space-y-10">
              <h3 className='text-2xl font-semibold my-6 flex items-center gap-2 cinzel-font'>
                <Sparkle /> Experience
              </h3>
              <div className="pl-6 ml-2 space-y-12 border-l">
                <div>
                  <h4 className="text-xl font-bold">Software Development Intern</h4>
                  <p className="text-sm font-medium italic">
                    Brisa - Sociedade e Tecnologia
                  </p>
                  <div className="text-zinc-400 mt-3 text-sm leading-relaxed space-y-2">
                    <p>
                      Focus on Software Engineering, Data Structures, and Full-Stack Development.
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold">Software Developer</h4>
                  <p className="text-sm font-medium italic">
                    Brisa - Sociedade e Tecnologia
                  </p>
                  <div className="text-zinc-400 mt-3 text-sm leading-relaxed space-y-2">
                    <p>
                      Focus on Software Engineering, Data Structures, and Full-Stack Development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-10">
              <h3 className='text-2xl font-semibold my-6 flex items-center gap-2 cinzel-font'>
                <Sparkle /> Language
              </h3>
              <div className="pl-6 ml-2 space-y-12">

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
