import { useState } from "react";
import "./App.css";
import BenefitsSection from "./components/BenefitsSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";

// Import the language files
import AboutMe from "./components/AboutMe";
import ProjectsSectionAlternative from "./components/ProjectsSectionAlternative";
import RecomendationsSection from "./components/RecomendationsSection";
import {
  AboutModel,
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
import enContent from "./texts/en.json";
import esContent from "./texts/es.json";

// A simple content object to hold both languages
// eslint-disable-next-line react-refresh/only-export-components
export const content: any = {
  en: enContent,
  es: esContent,
};

// Main App Component
export default function App() {
  const [language, setLanguage] = useState("es"); // 'en' or 'es'

  const text: {
    brand: BrandModel;
    header: HeaderModel;
    hero: HeroModel;
    about: AboutModel;
    services: ServicesModel;
    projects: ProjectsModel;
    benefits: BenefitsModel;
    recomendations: RecomendationsModel;
    experience: ExperienceModel;
    contact: ContactModel;
  } = content[language];

  return (
    <div className="bg-black text-gray-800 antialiased px-3 VT323 h-full min-h-svh">
      {/* Header */}
      <Header
        onLanguagueSwitch={() => setLanguage(language == "es" ? "en" : "es")}
        header={text.header}
        language={language}
      ></Header>

      <main className="px-3">
        {/* Hero Section */}
        <HeroSection hero={text.hero}></HeroSection>

        {/* About me Section */}
        <AboutMe about={text.about}></AboutMe>

        {/* Services Section */}
        <ServicesSection services={text.services}></ServicesSection>

        {/* Client (Projects) projects Section */}
        {/* <ProjectsSection projects={text.projects}></ProjectsSection> */}
        <ProjectsSectionAlternative
          projects={text.projects}
        ></ProjectsSectionAlternative>

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
