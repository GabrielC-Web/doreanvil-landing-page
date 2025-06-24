import { ArrowRight } from "lucide-react";
import AnvilAnimation from "./AnvilAnimation";

export default function HeroSection(props: { text: any }) {
  return (
    <section id="home" className="h-svh pt-20">
      <div className="container mx-auto max-w-5xl h-full flex flex-col justify-center  px-6 text-center relative">
        {/* Title and animation */}
        <div className="flex flex-col lg:flex-row items-center justify-evenly">
          <h1 className=" mb-2 -translate-y-20 whitespace-pre-wrap z-20">
            {props.text.title}
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

          <button className="inline-flex items-center text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg text-lg cta-button">
            {props.text.ctaButton} <ArrowRight className="ml-2" size={20} />
          </button>
        </div>

        {/* <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 flex items-center justify-center bg-gray-800 rounded-full shadow-xl">
          <AnvilIcon className="w-12 h-12 md:w-16 md:h-16 text-white" />
        </div>

        <p className="text-lg md:text-xl text-gray-600 font-medium mb-4">
          {props.text.subtitle}
        </p>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed mb-8">
          {props.text.description}
        </p> */}
      </div>
    </section>
  );
}
