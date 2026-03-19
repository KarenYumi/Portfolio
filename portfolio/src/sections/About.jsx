export default function About() {
  return (
    <>
      <section id='about' className="min-h-screen flex items-center bg-zinc-950 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-zinc-400 mb-4">Olá, eu sou</p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Karen Silva
              </h1>

              <h2 className="text-xl md:text-2xl text-zinc-300 mt-4">
                Desenvolvedora Front-end focada em React
              </h2>

              <p className="text-zinc-400 mt-6 max-w-xl leading-relaxed">
                Crio interfaces modernas, responsivas e funcionais, com foco em
                experiência do usuário e boas práticas de desenvolvimento.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="#projects"
                  className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:opacity-80 transition"
                >
                  Ver projetos
                </a>

                <a
                  href="#contact"
                  className="border border-zinc-700 px-6 py-3 rounded-xl font-medium hover:bg-zinc-900 transition"
                >
                  Entrar em contato
                </a>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500">
                Sua imagem aqui
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}