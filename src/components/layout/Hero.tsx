export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-7xl items-center px-6">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm uppercase tracking-widest text-white/50">
          Frontend Developer
        </p>

        <h1 className="text-5xl font-bold leading-tight md:text-7xl">
          Olá, sou
          <br />
          Mário Estima
        </h1>

        <p className="mt-6 max-w-xl text-lg text-white/70">
          Desenvolvo aplicações web e mobile modernas focadas em performance,
          experiência do utilizador e escalabilidade.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="rounded-full bg-white px-6 py-3 text-black">
            Ver projetos
          </button>

          <button className="rounded-full border border-white px-6 py-3">
            Contactar
          </button>
        </div>
      </div>
    </section>
  );
}
