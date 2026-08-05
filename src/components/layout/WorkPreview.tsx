import Image from "next/image";

const projects = [
  {
    title: "Learnlogicify Landing Page",
    image: "/projects/learnlogicify.png",
  },
  {
    title: "Winzee Web Chat application",
    image: "/projects/winzee.png",
  },
  {
    title: "ChatGPT clone",
    image: "/projects/chatgpt.png",
  },
  {
    title: "Gemini Clone",
    image: "/projects/gemini.png",
  },
];

export default function WorkPreview() {
  return (
    <section className="w-full text-white py-24 px-8 md:px-16 lg:px-24">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <h2 className="text-4xl text-black md:text-6xl font-medium tracking-tight">
            Impressive Works
          </h2>

          <p className="max-w-xs text-xs font-light text-[#616161] uppercase tracking-wider leading-relaxed">
            HERE'S A SELECTION OF PROJECTS THAT SHOWCASE MY PASSION FOR DESIGN
            AND DEVELOPMENT, REFLECTING CREATIVITY AND INNOVATION.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 group cursor-pointer"
            >
              <div className="relative w-full aspect-[807/470] rounded-3xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
                  <Image
                    width={48}
                    height={48}
                    src="/images/arrow_up_black.png"
                    alt="Arrow up"
                  />
                </span>
                <h3 className="text-xl md:text-2xl font-medium text-black">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="px-6 py-2.5 rounded-full border border-neutral-700 text-sm font-medium text-black  transition-colors flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black" />
            Explore more
          </button>
        </div>
      </div>
    </section>
  );
}