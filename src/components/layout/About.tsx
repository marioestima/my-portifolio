import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section className="w-full   text-white py-24 px-8 md:px-16 lg:px-24">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-3xl">
          <h2 className="text-[20px] md:text-[35px] font-medium leading-tight tracking-tight text-black ">
            Driven by curiosity and a love for design, I create simple,
            functional, and visually striking digital experiences. As a student,
            I’m always learning and exploring new ideas.
          </h2>
        </div>

        <div className="flex flex-col items-start md:items-end text-left md:text-right max-w-sm space-y-6">
          <p className="text-[16px] font-light text-[#616161] leading-relaxed">
            The fusion of my passion for design, development, and seamless user
            experiences places me at the intersection of creativity and
            technology in the digital world.
          </p>

          <Link
            href="#about"
            className="inline-flex items-center gap-2 text-base font-medium text-black hover:opacity-80 transition-opacity group"
          >
            <span>More about me</span>
            <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
              <Image
                width={48}
                height={48}
                src="/images/arrow_up_black.png"
                alt="Arrow up"
              ></Image>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
