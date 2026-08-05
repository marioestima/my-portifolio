import { cn } from "@/src/lib/utils";

interface FooterProps {
  variant?: "dark" | "light";
}

export default function Footer({ variant = "dark" }: FooterProps) {
  return (
    <footer
      className={cn(
        "w-full py-12",

        // Página preta
        variant === "dark" && "bg-white text-black",

        // Página branca
        variant === "light" && "bg-black text-white",
      )}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Get in touch</h2>

            <p className="mt-4 opacity-70">Vamos criar algo incrível juntos.</p>
          </div>

          <div className="space-y-2">
            <p>
              Email:
              <span className="ml-2">mario@email.com</span>
            </p>

            <p>
              Telefone:
              <span className="ml-2">+244 900 000 000</span>
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-current/20 pt-6 text-sm">
          © {new Date().getFullYear()} Mário Estima. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
