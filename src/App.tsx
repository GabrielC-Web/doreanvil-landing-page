import { useState } from "react";
import "./App.css";
import BenefitsSection from "./components/BenefitsSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";

// Import the language files
import TestimonialSection from "./components/TestimonialSection";
import enContent from "./texts/en.json";
import esContent from "./texts/es.json";

// A simple content object to hold both languages
export const content: any = {
  en: enContent,
  es: esContent,
};

// Main App Component
export default function App() {
  const [language, setLanguage] = useState("en"); // 'en' or 'es'

  const text: {
    brand: any;
    header: any;
    hero: any;
    showcase: any;
    services: any;
    benefits: any;
    experience: any;
    contact: any;
  } = content[language];

  return (
    <div className="dark bg-gray-50 dark:bg-black text-gray-800 antialiased px-3 press-start-2p-regular">
      {/* Header */}
      <Header
        onLanguagueSwitch={() => setLanguage(language == "es" ? "en" : "es")}
        text={text.header}
        language={language}
      ></Header>

      <main className="">
        {/* Hero Section */}
        <HeroSection text={text.hero}></HeroSection>

        {/* Services Section */}
        <ServicesSection text={text.services}></ServicesSection>

        {/* Client (Projects) Showcase Section */}
        <ProjectsSection text={text.showcase}></ProjectsSection>

        {/* Benefits Section */}
        <BenefitsSection></BenefitsSection>

        {/* Testimonials */}
        <TestimonialSection></TestimonialSection>

        {/* Professional Experience Section */}
        {/* <ExperienceSection></ExperienceSection> */}

        {/* Contact Section */}
        <Footer></Footer>
      </main>
    </div>
  );
}
