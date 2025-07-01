import { HeaderModel } from "@/models/texts.model";
import { Anvil, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header(props: {
  onLanguagueSwitch: (e: any) => void;
  header: HeaderModel;
  language: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="shadow-lg fixed bg-black w-full z-30 top-0 left-0">
      <div className="w-full px-3 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2">
          <Anvil className="size-8 text-orange-700" />
          <span className="font-bold text-white">Doreanvil</span>
        </a>

        {/* navbar */}
        <nav className="hidden lg:flex space-x-8">
          {props.header.navLinks.map((link) => (
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
            className="lg:hidden"
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
        <div className="lg:hidden bg-black w-full">
          <nav className="flex flex-col items-center py-4 border-y-2 border-orange-700 ">
            {props.header.navLinks.map((link) => (
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
