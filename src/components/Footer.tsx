import { Mail, Phone, MapPin } from "lucide-react";
import { AnimatedChar } from "./AnimatedChar";

export default function Footer() {
  const title = "This is where you can find me".split(" ");

  return (
    <footer id="contact" className="h-[85svh] w-full text-white p-0 mt-20">
      <div className="container h-full w-full flex flex-col justify-between items-center mx-auto px-6 text-center">
        {/* Title */}
        <div className="h2-container">
          {title.map((el: string, i: number) => (
            <AnimatedChar key={i} delay={i / 10}>
              {el}
            </AnimatedChar>
          ))}
        </div>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          Let's connect! I'm ready to help you achieve your goals. Reach out and
          start making your apps true.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <a
            href="mailto:gabrieljose.cz21@gmail.com"
            className="flex items-center text-lg text-d-blue hover:text-d-blue-500 transition duration-300"
          >
            <Mail className="mr-2" size={20} /> gabrieljose.cz21@gmail.com
          </a>
          <a
            href="tel:+584120244649"
            className="flex items-center text-lg text-d-blue hover:text-d-blue-500 transition duration-300"
          >
            <Phone className="mr-2" size={20} /> (+58) 412-024-4649
          </a>
          {/* <div className="flex items-center text-lg text-d-green">
            <MapPin className="mr-2" size={20} /> Caracas, Venezuela
          </div> */}
        </div>
        <div className="my-10 border-t border-gray-700 pt-6 w-full">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Doreanvil. Built by Gabriel
            Carreño. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
