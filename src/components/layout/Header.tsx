import { cn } from "@/src/lib/utils";
import Link from "next/link";

interface HeaderProps {
  variant?: "dark" | "light";
}

export default function Header({ variant = "dark" }: HeaderProps) {
  return (
    <header
      className={cn(
        "w-full py-6",
        variant === "dark" && "text-white",
        variant === "light" && "text-black",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Mário Estima
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-sm">
          <Link href="/" className="transition-opacity hover:opacity-70">
            Home
          </Link>

          <Link href="/skills" className="transition-opacity hover:opacity-70">
            Skills
          </Link>

          <Link
            href="/projects"
            className="transition-opacity hover:opacity-70"
          >
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
}
