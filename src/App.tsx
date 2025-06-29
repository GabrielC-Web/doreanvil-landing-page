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
import RecomendationsSection from "./components/RecomendationsSection";
import {
  BenefitsModel,
  BrandModel,
  ContactModel,
  ExperienceModel,
  HeaderModel,
  HeroModel,
  ProjectsModel,
  RecomendationsModel,
  ServicesModel,
} from "./models/texts.model";

// A simple content object to hold both languages
// eslint-disable-next-line react-refresh/only-export-components
export const content: any = {
  en: enContent,
  es: esContent,
};

// Main App Component
export default function App() {
  const [language, setLanguage] = useState("en"); // 'en' or 'es'

  const text: {
    brand: BrandModel;
    header: HeaderModel;
    hero: HeroModel;
    services: ServicesModel;
    projects: ProjectsModel;
    benefits: BenefitsModel;
    recomendations: RecomendationsModel;
    experience: ExperienceModel;
    contact: ContactModel;
  } = content[language];

  return (
    <div className="dark bg-white dark:bg-black text-gray-800 antialiased px-3 press-start-2p-regular h-full min-h-screen">
      {/* Header */}
      <Header
        onLanguagueSwitch={() => setLanguage(language == "es" ? "en" : "es")}
        header={text.header}
        language={language}
      ></Header>

      <main className="px-3">
        {/* Hero Section */}
        <HeroSection hero={text.hero}></HeroSection>

        {/* Services Section */}
        <ServicesSection services={text.services}></ServicesSection>

        {/* Client (Projects) projects Section */}
        <ProjectsSection projects={text.projects}></ProjectsSection>

        {/* Benefits Section */}
        <BenefitsSection benefits={text.benefits}></BenefitsSection>

        {/* Testimonials */}
        <RecomendationsSection
          recomendations={text.recomendations}
        ></RecomendationsSection>

        {/* Professional Experience Section */}
        {/* <ExperienceSection></ExperienceSection> */}

        {/* Contact Section */}
        <Footer contact={text.contact}></Footer>
      </main>
    </div>
  );
}
