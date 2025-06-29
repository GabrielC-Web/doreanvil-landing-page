export interface TextsRootModel {
  brand: BrandModel;
  header: HeaderModel;
  hero: HeroModel;
  services: ServicesModel;
  projects: ProjectsModel;
  benefits: BenefitsModel;
  recomendations: RecomendationsModel;
  experience: ExperienceModel;
  contact: ContactModel;
}

export interface BrandModel {
  name: string;
}

export interface HeaderModel {
  navLinks: NavLinkModel[];
}

export interface NavLinkModel {
  href: string;
  label: string;
}

export interface HeroModel {
  title: string;
  subtitle: string;
  description: string;
  ctaButton: string;
}

export interface ServicesModel {
  title: string;
  services: ServiceModel[];
}

export interface ServiceModel {
  name: string;
  id: string;
}

export interface ProjectsModel {
  title: string;
  projects: ProjectItemModel[];
}

export interface ProjectItemModel {
  name: string;
  description: string;
  id: number;
  skills: {
    name: string;
  };
  url: string;
}

export interface BenefitsModel {
  title: string;
  list: BenefitItemModel[];
}

export interface BenefitItemModel {
  title: string;
  id: number;
}

export interface RecomendationsModel {
  title: string;
  list: RecomendationItemModel[];
}

export interface RecomendationItemModel {
  image: string;
  name: string;
  role: string;
  recomendation: string;
  url: string;
}

export interface ExperienceModel {
  title: string;
  job: JobModel;
}

export interface JobModel {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

export interface ContactModel {
  title: string;
  description: string;
  footer: string;
  mail: string;
  phone: string;
}
