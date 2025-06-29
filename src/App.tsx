import { useState } from "react";
import "./App.css";
import BenefitsSection from "./components/BenefitsSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";

// Import the language files
import enContent from "./texts/en.json";
import esContent from "./texts/es.json";
import TestimonialSection from "./components/TestimonialSection";

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
    projects: any;
    services: any;
    benefits: any;
    experience: any;
    contact: any;
  } = content[language];

  return (
    <div className="dark bg-white dark:bg-black text-gray-800 antialiased px-3 press-start-2p-regular h-full min-h-screen">
      {/* Header */}
      <Header
        onLanguagueSwitch={() => setLanguage(language == "es" ? "en" : "es")}
        text={text.header}
        language={language}
      ></Header>

      <main className="px-3">
        {/* Hero Section */}
        <HeroSection text={text.hero}></HeroSection>

        {/* Services Section */}
        <ServicesSection text={text.services}></ServicesSection>

        {/* Client (Projects) projects Section */}
        <ProjectsSection text={text.projects}></ProjectsSection>

        {/* Benefits Section */}
        <BenefitsSection text={text.benefits}></BenefitsSection>

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
