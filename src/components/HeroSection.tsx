import { ArrowRight } from "lucide-react";
import AnvilAnimation from "./AnvilAnimation";
import { HeroModel } from "@/models/texts.model";

export default function HeroSection({ hero }: { hero: HeroModel }) {
  return (
    <section id="home" className="h-svh pt-[88px]">
      <div className="container mx-auto max-w-5xl h-full flex flex-col justify-center  px-6 text-center relative">
        {/* Title and animation */}
        <div className="flex flex-col lg:flex-row items-center justify-evenly">
          <h1 className=" mb-2 -translate-y-20 whitespace-pre-wrap z-20">
            {hero.title}
          </h1>
          {/* Animación */}
          <AnvilAnimation></AnvilAnimation>
        </div>

        {/* CTA */}
        <div className="w-full">
          {/* <a
            href="#contact"
            className="inline-flex items-center bg-orange-700 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg text-lg"
          >
            {props.text.ctaButton} <ArrowRight className="ml-2" size={20} />
          </a> */}

          <a
            href="#contact"
            className="inline-flex items-center text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg text-lg cta-button"
          >
            {hero.ctaButton} <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
