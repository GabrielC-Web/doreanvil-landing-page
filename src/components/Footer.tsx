import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to build something amazing?
        </h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          Let's connect! I'm ready to help you achieve your goals. Reach out for
          a consultation or just to say hello.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <a
            href="mailto:gabrieljose.cz21@gmail.com"
            className="flex items-center text-lg hover:text-blue-400 transition duration-300"
          >
            <Mail className="mr-2" size={20} /> gabrieljose.cz21@gmail.com
          </a>
          <a
            href="tel:+584120244649"
            className="flex items-center text-lg hover:text-blue-400 transition duration-300"
          >
            <Phone className="mr-2" size={20} /> (+58) 412-024-4649
          </a>
          <div className="flex items-center text-lg">
            <MapPin className="mr-2" size={20} /> Caracas, Venezuela
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-6">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Doreanvil. Built by Gabriel
            Carreño. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
