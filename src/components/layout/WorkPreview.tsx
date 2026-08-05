export default function WorkPreview() {
  const projects = ["GasFacil", "Renteasy", "NudLive"];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="text-4xl font-bold">Trabalhos</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <div key={project} className="rounded-2xl border border-white/20 p-6">
            <h3 className="text-xl font-semibold">{project}</h3>

            <p className="mt-3 text-white/60">
              Projeto desenvolvido com tecnologias modernas.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
