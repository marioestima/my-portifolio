"use client";

import { cn } from "@/src/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  variant?: "dark" | "light";
}

export default function Header({ variant = "dark" }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={cn(
        "absolute top-0 left-0 w-full px-8 py-6 z-20",
        variant === "dark" && "text-white",
        variant === "light" && "text-black",
      )}
    >
      <section className="flex justify-between items-start">
        {/* Nome visível apenas no PC (md:block) */}
        <div className="hidden md:block">
          <span className="font-medium text-xs text-[#FFFFFF]">
            Mario Estima
          </span>
        </div>

        {/* Texto visível apenas no PC (hidden md:block) */}
        <div className="hidden md:block max-w-xs text-right">
          <p className="font-thin text-xs text-[#FFFFFF] leading-relaxed">
            Passionate Creative Designer and Developer, dedicated to crafting
            innovative solutions and exceptional digital experiences through
            modern technologies
          </p>
        </div>

        {/* Menu Hambúrguer com formato escada visível apenas no Mobile (md:hidden) */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 p-2 items-end justify-center"
            aria-label="Toggle Menu"
          >
            <span className="w-6 h-[2px] bg-white transition-all" />
            <span className="w-4 h-[2px] bg-white transition-all" />
            <span className="w-2 h-[2px] bg-white transition-all" />
          </button>
        </div>
      </section>
    </header>
  );
}
