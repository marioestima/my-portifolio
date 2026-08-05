import Image from "next/image";
import { MenuBar } from "../menuBar";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-[#7E7E7E] text-[#FFFFFF] overflow-hidden flex flex-col justify-between pt-20">
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-10">
        <div className="relative flex items-center justify-center">
          <Image
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop"
            alt="Profile"
            width={800}
            height={1000}
            className="object-contain h-[90vh] w-auto grayscale"
            priority
            unoptimized
          />

          <Image
            src="/images/arrow_up.png"
            alt="Arrow"
            width={120}
            height={120}
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex-1" />

      <div className="w-full flex flex-col items-center z-20 pb-4">
        <div className="w-full whitespace-nowrap overflow-hidden">
          <h1 className="text-[225px] font-medium leading-none tracking-tight text-[#FFFFFF] select-none">
            e Developer &
          </h1>
        </div>

        <div className="mt-4">
          <MenuBar />
        </div>
      </div>
    </section>
  );
}
