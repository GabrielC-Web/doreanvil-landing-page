import { ContactModel } from "@/models/texts.model";
import { Mail, Phone } from "lucide-react";
import { AnimatedChar } from "./AnimatedChar";

export default function Footer({ contact }: { contact: ContactModel }) {
  const title = contact.title.split(" ");

  return (
    <footer id="contact" className="h-[85svh] w-full text-white p-0 mt-20">
      <div className="container h-full w-full flex flex-col justify-between items-center mx-auto text-center">
        {/* Title */}
        <div className="h2-container">
          {title.map((el: string, i: number) => (
            <AnimatedChar key={i} delay={i / 10}>
              {el}
            </AnimatedChar>
          ))}
        </div>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          {contact.description}
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <a
            href="mailto:gabrieljose.cz21@gmail.com"
            className="flex items-center text-lg text-d-blue hover:text-d-blue-500 transition duration-300"
          >
            <Mail className="mr-2" size={20} /> {contact.mail}
          </a>
          <a
            href="tel:+584120244649"
            className="flex items-center text-lg text-d-blue hover:text-d-blue-500 transition duration-300"
          >
            <Phone className="mr-2" size={20} /> {contact.phone}
          </a>
        </div>
        <div className="my-10 border-t border-gray-700 pt-6 w-full">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Doreanvil. {contact.footer}
          </p>
        </div>
      </div>
    </footer>
  );
}
