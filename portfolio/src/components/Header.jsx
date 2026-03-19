import { useState } from "react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-zinc-950/50 border-b border-zinc-500">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo / Nome */}
        <h1 className="text-xl font-bold tracking-tight">
          Karen.dev
        </h1>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-8 text-sm text-zinc-300">
          <a href="#about" className="hover:text-white transition">Sobre</a>
          <a href="#projects" className="hover:text-white transition">Projetos</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#contact" className="hover:text-white transition">Contato</a>
        </nav>

        {/* Botão CTA */}
        <a
          href="#contact"
          className="hidden md:block bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:opacity-80 transition"
        >
          Fale comigo
        </a>

        {/* Botão mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          ☰
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 text-zinc-300">
          <a href="#about" className="block">Sobre</a>
          <a href="#projects" className="block">Projetos</a>
          <a href="#skills" className="block">Skills</a>
          <a href="#contact" className="block">Contato</a>
        </div>
      )}
    </header>
  )
}