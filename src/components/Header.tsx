import { HeaderModel } from "@/models/texts.model";
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
  header: HeaderModel;
  language: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: props.header.navLinks[0].label },
    { href: "#services", label: props.header.navLinks[1].label },
    { href: "#projects", label: props.header.navLinks[2].label },
    { href: "#benefits", label: props.header.navLinks[3].label },
    { href: "#contact", label: props.header.navLinks[4].label },
  ];

  return (
    <header className="shadow-md fixed bg-black w-full z-30 top-0 left-0">
      <div className="w-full px-3 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2">
          <AnvilIcon className="h-8 w-8 text-orange-700" />
          <span className="font-bold text-white">Doreanvil</span>
        </a>

        {/* navbar */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white hover:text-orange-700 transition duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-3">
          {/* Language Switcher */}
          <div className="ml-8 flex items-center space-x-2">
            <button
              onClick={props.onLanguagueSwitch}
              className={
                props.language == "en"
                  ? "themed-button-selected"
                  : "themed-button"
              }
            >
              EN
            </button>
            <button
              onClick={props.onLanguagueSwitch}
              className={
                props.language == "es"
                  ? "themed-button-selected"
                  : "themed-button"
              }
            >
              ES
            </button>
          </div>

          {/* Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? (
              <X size={24} className="text-white cursor-pointer" />
            ) : (
              <Menu size={24} className="text-white cursor-pointer" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black w-full">
          <nav className="flex flex-col items-center py-4 border-y-2 border-orange-700 ">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="py-2 text-white hover:text-orange-700 transition duration-300"
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
