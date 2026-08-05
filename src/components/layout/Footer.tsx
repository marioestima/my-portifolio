import { cn } from "@/src/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface FooterProps {
  variant?: "dark" | "light";
}

export default function Footer({ variant = "dark" }: FooterProps) {
  return (
    <footer
      className={cn(
        "w-full bg-black text-white pt-16 pb-12 px-8 md:px-16 lg:px-24",
        variant === "dark" && "bg-white text-black",
      )}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12">
        <div className="flex items-center justify-between">
          <p className="text-3xl md:text-[90px] font-thin tracking-tight">
            your friendly chaos creator
          </p>
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
            <ArrowUpRight className="w-7 h-7 md:w-8 md:h-8" />
          </div>
        </div>

        <div className="overflow-hidden">
          <h1 className="text-[14vw] md:text-[13vw] font-thin leading-none tracking-tight select-none -ml-1">
            Mário Estima
          </h1>
        </div>
      </div>
    </footer>
  );
}
