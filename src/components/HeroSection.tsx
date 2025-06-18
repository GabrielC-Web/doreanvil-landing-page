import { AnvilIcon, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6 text-center">
        <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 flex items-center justify-center bg-gray-800 rounded-full shadow-xl">
          <AnvilIcon className="w-12 h-12 md:w-16 md:h-16 text-white" />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-2">
          Crafting Digital Experiences That Drive Results
        </h1>
        <p className="text-lg md:text-xl text-gray-600 font-medium mb-4">
          A Portfolio by Gabriel Carreño
        </p>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed mb-8">
          I build high-performance, scalable, and user-friendly web and mobile
          applications that solve real-world problems and delight users.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg text-lg"
        >
          Let's Build Together <ArrowRight className="ml-2" size={20} />
        </a>
      </div>
    </section>
  );
}
