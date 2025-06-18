import { Menu, X } from "lucide-react";
import { useState } from "react";

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

export default function Header(props: {
  onLanguagueSwitch: (e: any) => void;
  text: any;
  language: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: props.text.navLinks[0].label },
    { href: "#services", label: props.text.navLinks[1].label },
    { href: "#benefits", label: props.text.navLinks[2].label },
    { href: "#experience", label: props.text.navLinks[3].label },
    { href: "#contact", label: props.text.navLinks[4].label },
  ];

  return (
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
        {/* Language Switcher */}
        <div className="ml-8 hidden md:flex items-center space-x-2">
          <button
            onClick={props.onLanguagueSwitch}
            className={`px-3 py-1 text-sm font-bold rounded-md transition ${
              props.language === "en"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            EN
          </button>
          <button
            onClick={props.onLanguagueSwitch}
            className={`px-3 py-1 text-sm font-bold rounded-md transition ${
              props.language === "es"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            ES
          </button>
        </div>
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
  );
}
