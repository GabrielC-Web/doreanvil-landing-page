import {
  ArrowRight,
  Briefcase,
  ChevronsRight,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scaling,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";
import "./App.css";

// Custom Anvil Icon Component
type AnvilIconProps = {
  className?: string;
};

const AnvilIcon = ({ className }: AnvilIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M7 10l3.43 3.43A1 1 0 0 0 11.12 14H18a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1a1 1 0 0 0-1 1v1" />
    <path d="M3 14a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3" />
    <path d="M12 20v2" />
    <path d="M6 20v2" />
    <path d="M18 20v2" />
  </svg>
);

// Main App Component
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#benefits", label: "Why Me?" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  const benefits = [
    {
      icon: <Scaling className="w-10 h-10 text-blue-600 mb-4" />,
      title: "Scalable & High-Performance",
      description:
        "Building robust applications capable of handling high traffic, like payment gateways with over 20,000 daily transactions.",
    },
    {
      icon: <Sparkles className="w-10 h-10 text-blue-600 mb-4" />,
      title: "Efficient & Modern Code",
      description:
        "Leveraging reusable component libraries and modern architecture to cut down on maintenance time and ensure consistency.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />,
      title: "User-Centric & Reliable",
      description:
        "Collaborating closely with UI/UX teams to create intuitive interfaces and reliable systems trusted by leading banks.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 font-sans antialiased">
      {/* Header */}
      <header className="bg-white shadow-md fixed w-full z-20 top-0">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="flex items-center space-x-2">
            <AnvilIcon className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">Doreanvil</span>
          </a>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <nav className="flex flex-col items-center py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="py-2 text-gray-600 hover:text-blue-600 transition duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="pt-20">
        {/* Hero Section */}
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
              I build high-performance, scalable, and user-friendly web and
              mobile applications that solve real-world problems and delight
              users.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg text-lg"
            >
              Let's Build Together <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </section>

        {/* Client Showcase Section */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-sm font-bold uppercase text-gray-500 tracking-widest">
              Solutions trusted by leading financial institutions
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 mt-6">
              <span className="text-gray-400 font-semibold text-lg">
                Major Bank ONE
              </span>
              <span className="text-gray-400 font-semibold text-lg">
                Top Finance Group
              </span>
              <span className="text-gray-400 font-semibold text-lg">
                Leading Bank TWO
              </span>
              <span className="text-gray-400 font-semibold text-lg">
                National Banking Co.
              </span>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                What I Offer
              </h2>
              <p className="text-lg text-gray-600 mt-2">
                From concept to deployment, I provide end-to-end development
                services.
              </p>
              <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Service 1 */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">
                  Custom Frontend Development
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  I specialize in building dynamic, responsive, and scalable web
                  applications using modern frameworks like{" "}
                  <strong>Angular</strong> and <strong>React</strong>. I
                  transform complex requirements into intuitive and beautiful
                  user interfaces.
                </p>
              </div>
              <div>
                <img
                  src="https://placehold.co/600x400/1e40af/ffffff?text=Web+Application"
                  alt="Web Application Development"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
              {/* Service 2 */}
              <div className="md:order-last">
                <h3 className="text-2xl font-bold">
                  Multi-Platform Mobile Apps
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Using <strong>Flutter</strong>, I develop high-performance
                  mobile applications for both Android and iOS from a single
                  codebase. This approach saves time and ensures a consistent
                  user experience across all devices.
                </p>
              </div>
              <div className="md:order-first">
                <img
                  src="https://placehold.co/600x400/3b82f6/ffffff?text=Mobile+App"
                  alt="Mobile App Development"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
              {/* Service 3 */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">
                  Code Modernization & Optimization
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  I can refactor and modernize existing codebases to improve
                  performance, reduce technical debt, and make them easier to
                  maintain. I also partner with backend teams to optimize API
                  responses for faster load times.
                </p>
              </div>
              <div>
                <img
                  src="https://placehold.co/600x400/0f172a/ffffff?text=Code+Optimization"
                  alt="Code Modernization"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why Work With Me?
              </h2>
              <p className="text-lg text-gray-600 mt-2">
                I deliver tangible results, not just code.
              </p>
              <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition-transform duration-300"
                >
                  {benefit.icon}
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section id="experience" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                My Professional Journey
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Briefcase className="w-10 h-10 text-blue-600" />
                </div>
                <div className="ml-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Frontend Developer
                  </h3>
                  <p className="text-lg font-semibold text-gray-700">
                    Soluciones financieras chinchin
                  </p>
                  <p className="text-md text-gray-500 mb-4">2022 – Present</p>
                  <ul className="list-none space-y-3">
                    <li className="flex items-start">
                      <ChevronsRight className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <span>
                        Played a key role in a payment gateway processing over{" "}
                        <strong>20,000 transactions daily</strong>.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronsRight className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <span>
                        Developed 80% of the frontend for a user onboarding
                        system used by{" "}
                        <strong>4 leading Venezuelan banks</strong>.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronsRight className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <span>
                        Engineered a comprehensive Angular library with over{" "}
                        <strong>50 reusable components</strong>.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronsRight className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <span>
                        Modernized code architecture, cutting monthly
                        maintenance by <strong>50 hours</strong>.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <footer id="contact" className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to build something amazing?
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Let's connect! I'm ready to help you achieve your goals. Reach out
              for a consultation or just to say hello.
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
      </main>
    </div>
  );
}
