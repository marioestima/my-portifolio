import { cn } from "@/src/lib/utils";
import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  variant?: "dark" | "light";
  className?: string;
}

export function PageContainer({
  children,
  variant = "dark",
  className,
}: PageContainerProps) {
  return (
    <main
      className={cn(
        "min-h-screen w-full",
        "transition-colors duration-300",

        variant === "dark" && ["bg-black", "text-white"],

        variant === "light" && ["bg-white", "text-black"],

        className,
      )}
    >
      {children}
    </main>
  );
}
