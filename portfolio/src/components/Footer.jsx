import { ArrowUp, Github, Instagram, Linkedin, Mail } from "lucide-react";
import face from "../assets/images/faceCard.jpg"

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Resume', href: '#resume' },
    { label: 'Projects', href: '#projects' },
    { label: 'Hobbies', href: '#hobbies' },
  ]

  const socials = [
    { icon: <Github size={20} />, href: 'https://github.com/KarenYumi', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/karenyumi', label: 'LinkedIn' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/k_yumiii/', label: 'Instagram' },
    { icon: <Mail size={20} />, href: 'mailto:karen.yumi20@gmail.com', label: 'Email' },
  ]

  return (
    <footer id="footer" className="relative overflow-hidden bg-zinc-950">

      <div className="h-px w-full bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
      <div
        className="absolute  w-206 h-206 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.25) 5%, transparent 70%)' }}
      />
      <div
        className="absolute w-106 h-106 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(244,114,182,0.25) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-44 -right-44 w-106 h-106 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(244,114,182,0.35) 5%, transparent 70%)' }}
      />
      <div className="relative z-10 max-w-6xl 2xl:max-w-7xl mx-auto px-10 py-10 w-full">

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-5">
              <div className="relative shrink-0">
                <img
                  src={face}
                  className="relative w-25 h-25 rounded-full object-cover border-2 border-zinc-950"
                />
              </div>
              {/* Available badge */}
              <div className="flex flex-col gap-1">
                <span className="cinzel-font text-lg text-white font-semibold tracking-wide">Karen Yumi Matsuguma Silva</span>
                <span className="text-zinc-400 text-sm">Full-Stack Developer</span>
                <span className="flex items-center gap-2 mt-1">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                  </span>
                  <span className="text-emerald-400 text-xs uppercase tracking-widest">Available for opportunities</span>
                </span>
              </div>
            </div>

            <a
              href="mailto:karen.yumi20@gmail.com"
              className="group inline-flex items-center gap-3 border border-zinc-700 hover:border-pink-400 rounded-full px-6 py-3 transition-all duration-300 w-fit hover:bg-pink-400/10"
            >
              <Mail size={16} className="text-pink-400" />
              <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">karen.yumi20@gmail.com</span>
            </a>
          </div>
          <div className="flex flex-col gap-10 md:items-end">
            <div className="flex flex-col gap-3 md:items-end">
              <span className="text-zinc-500 text-xs uppercase tracking-[0.2em] mb-1">Find me</span>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-violet-500 hover:bg-violet-400/20 transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-6 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-zinc-400 text-xs tracking-widest uppercase">
            © 2026 Karen Yumi — All rights reserved
          </span>
          <span className="text-zinc-400 text-xs">
            Designed & built with ♥ from Brazil
          </span>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-10 group flex flex-col items-center gap-1 cursor-pointer"
        aria-label="Back to top"
      >
        <div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:border-violet-500 group-hover:text-white group-hover:bg-violet-500/20 transition-all duration-300">
          <ArrowUp size={18} />
        </div>
        <span className="text-zinc-600 text-[10px] uppercase tracking-widest group-hover:text-violet-500 transition-colors duration-300">top</span>
      </button>
    </footer>
  );
}
