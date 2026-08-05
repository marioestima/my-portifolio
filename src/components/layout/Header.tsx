import { cn } from "@/src/lib/utils";
import Link from "next/link";

interface HeaderProps {
  variant?: "dark" | "light";
}

export default function Header({ variant = "dark" }: HeaderProps) {
  return (
    <header
      className={cn(
        "absolute top-0 left-0 w-full px-8 py-6 z-20",
        variant === "dark" && "text-white",
        variant === "light" && "text-black",
      )}
    >
      <section className="flex justify-between items-start">
        <div>
          <span className="font-medium text-xs">Mario Estima</span>
        </div>

        <div className="max-w-xs text-right">
          <p className="font-thin text-xs leading-relaxed">
            Passionate Creative Designer and Developer, dedicated to crafting
            innovative solutions and exceptional digital experiences through
            modern technologies
          </p>
        </div>
      </section>
    </header>
  );
}