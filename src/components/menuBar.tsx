import Image from "next/image";
import {
  Home,
  SquareTerminal,
  Box,
  FileText,
  ArrowUpRight,
  GitFork,
} from "lucide-react";

const menuOptions = [
  { id: "home", type: "icon", icon: Home, active: true },
  { id: "terminal", type: "icon", icon: SquareTerminal, active: false },
  { id: "box", type: "icon", icon: Box, active: false },
  {
    id: "avatar",
    type: "avatar",
    src: "/images/menu-avatar.png",
    alt: "Avatar",
  },
  { id: "document", type: "icon", icon: FileText, active: false },
  { id: "github", type: "icon", icon: GitFork, active: false },
  { id: "external", type: "icon", icon: ArrowUpRight, active: false },
];

export const MenuBar = () => {
  return (
    <div className="bg-[#171717] rounded-[18px] p-2 md:p-2.5 inline-flex items-center gap-1.5 md:gap-3 shadow-2xl max-w-full overflow-x-auto">
      {menuOptions.map((item) => {
        if (item.type === "avatar") {
          return (
            <div
              key={item.id}
              className="relative w-9 h-9 md:w-12 md:h-12 rounded-full overflow-hidden bg-[#C6C6C6] flex-shrink-0 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
            >
              <Image
                src={item.src!}
                alt={item.alt!}
                fill
                className="object-cover"
              />
            </div>
          );
        }

        const IconComponent = item.icon!;

        return (
          <button
            key={item.id}
            className={`w-9 h-9 md:w-12 md:h-12 rounded-full flex-shrink-0 flex items-center justify-center transition-all ${
              item.active
                ? "bg-[#E0E0E0] text-black"
                : "bg-[#262626] text-white hover:bg-[#333333]"
            }`}
          >
            <IconComponent className="w-4 h-4 md:w-5 md:h-5 stroke-[1.75]" />
          </button>
        );
      })}
    </div>
  );
};