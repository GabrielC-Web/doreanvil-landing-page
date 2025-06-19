import { AnvilIcon, ArrowRight } from "lucide-react";

export default function HeroSection(props: { text: any }) {
  return (
    <section id="home" className="h-svh">
      <div className="container mx-auto h-full flex items-center px-6 text-center">
        <div className="left-side w-1/2">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 -translate-y-20 whitespace-pre-wrap">
            {props.text.title}
          </h1>
        </div>
        <div className="right-side flex items-center justify-center w-1/2 h-full relative flame-light -translate-y-20 ">
          <img
            src="/src/assets/flame-lit.gif"
            className="w-20 h-20 "
            alt="Fire camp image"
          />
          {/* <div className="w-fit h-fit flame-light">
          </div> */}
          {/* <AnvilIcon className="w-12 h-12 md:w-16 md:h-16 text-white -translate-y-20" /> */}
        </div>

        {/* <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 flex items-center justify-center bg-gray-800 rounded-full shadow-xl">
          <AnvilIcon className="w-12 h-12 md:w-16 md:h-16 text-white" />
        </div>

        <p className="text-lg md:text-xl text-gray-600 font-medium mb-4">
          {props.text.subtitle}
        </p>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed mb-8">
          {props.text.description}
        </p>
        <a
          href="#contact"
          className="inline-flex items-center bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg text-lg"
        >
          {props.text.ctaButton} <ArrowRight className="ml-2" size={20} />
        </a> */}
      </div>
    </section>
  );
}
