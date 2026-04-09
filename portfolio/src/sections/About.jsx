import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import happyFace from '../assets/images/happyFace.jpeg'
import cursor from '../assets/images/cursor.png'

export default function About() {
  return (
    <section id='about' className="min-h-screen flex items-center text-white bg-linear-to-b from-violet-500 to-zinc-950">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-10 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-zinc-300 mb-4">Hello!!</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              I'm Karen
            </h1>
            <h2 className="text-xl md:text-2xl text-zinc-300 mt-2">
              Full-Stack Developer based in São Paulo
            </h2>
            <p className="text-zinc-400 mt-6 max-w-xl leading-relaxed">
              I'm always learning something new and keeping up with what's happening in the world.
              I'm enthusiastic, curious, and I love thinking critically about things. My journey into tech started later than most,
              my mom worked in the field, and she inspired me to give it a shot. I had zero experience before college, but the moment
              I got my first taste of it, I was hooked.
            </p>
            <div className="flex flex-row gap-8 mt-8">
              <a
                href="https://www.instagram.com/k_yumiii/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black p-4 rounded-full font-medium hover:opacity-80 transition"
              >
                <Instagram />
              </a>
              <a
                href="https://www.linkedin.com/in/karenyumi"
                target="_blank"
                rel="noopener noreferrer"
                className="border bg-zinc-700 border-zinc-700 p-4 rounded-full font-medium hover:bg-zinc-900 transition"
              >
                <Linkedin />
              </a>
              <a
                href="https://github.com/KarenYumi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black p-4 rounded-full font-medium hover:opacity-80 transition"
              >
                <Github />
              </a>
              <a
                href="mailto:karen.yumi20@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border bg-zinc-700 border-zinc-700 p-4 rounded-full font-medium hover:bg-zinc-900 transition"
              >
                <Mail />
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <img src={happyFace} className="w-full h-full rounded-full border border-zinc-800 object-cover" />
              <img src={cursor} className="hidden md:block absolute w-40 top-80" />
              <span className="absolute top-6 -left-3 bg-emerald-400 text-white text-xl px-6 py-2 rounded-full shadow-lg">
                Brazilian
              </span>
              <span className="absolute bottom-10 -right-2 bg-orange-600 text-white text-xl px-6 py-2 rounded-full shadow-lg">
                9th May 2003
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}