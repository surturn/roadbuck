import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'sw';

interface Translation {
  // Header & Navigation
  home: string;
  about: string;
  products: string;
  services: string;
  contact: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  getQuote: string;
  viewProducts: string;
  
  // Products Section
  ourProducts: string;
  allCategories: string;
  filterBy: string;
  searchProducts: string;
  viewDetails: string;
  requestQuote: string;
  
  // Categories
  diagnosticTools: string;
  wheelAlignment: string;
  balancingMachines: string;
  tyreSystems: string;
  garageLift: string;
  
  // Common
  learnMore: string;
  callNow: string;
  whatsappUs: string;
  emailUs: string;
  
  // Company Info
  companyName: string;
  yearsExperience: string;
  trustedPartner: string;
  qualityGuarantee: string;
}

const translations: Record<Language, Translation> = {
  en: {
    // Header & Navigation
    home: "Home",
    about: "About",
    products: "Products",
    services: "Services", 
    contact: "Contact",
    
    // Hero Section
    heroTitle: "Professional Automotive Equipment",
    heroSubtitle: "Your Trusted Partner in Kenya",
    heroDescription: "Leading supplier of high-quality diagnostic tools, wheel alignment systems, and garage equipment. Serving automotive professionals across Kenya with excellence since 2010.",
    getQuote: "Get Quote",
    viewProducts: "View Products",
    
    // Products Section
    ourProducts: "Our Products",
    allCategories: "All Categories",
    filterBy: "Filter by Category",
    searchProducts: "Search products...",
    viewDetails: "View Details",
    requestQuote: "Request Quote",
    
    // Categories
    diagnosticTools: "Diagnostic Tools",
    wheelAlignment: "Wheel Alignment",
    balancingMachines: "Balancing Machines",
    tyreSystems: "Tyre Systems",
    garageLift: "Garage Lift",
    
    // Common
    learnMore: "Learn More",
    callNow: "Call Now",
    whatsappUs: "WhatsApp Us",
    emailUs: "Email Us",
    
    // Company Info
    companyName: "ROADBUCK Kenya Co. Ltd",
    yearsExperience: "15+ Years Experience",
    trustedPartner: "Trusted Partner",
    qualityGuarantee: "Quality Guarantee"
  },
  sw: {
    // Header & Navigation
    home: "Nyumbani",
    about: "Kuhusu",
    products: "Bidhaa",
    services: "Huduma",
    contact: "Wasiliana",
    
    // Hero Section
    heroTitle: "Vifaa vya Kitaalamu vya Magari",
    heroSubtitle: "Mshirika Wako wa Kuaminika Kenya",
    heroDescription: "Msambazaji mkuu wa vifaa vya ubora wa juu vya uchunguzi, mifumo ya uratibu wa magurudumu, na vifaa vya karakana. Tunawahudumia wataalamu wa magari kote Kenya kwa ubora tangu 2010.",
    getQuote: "Pata Bei",
    viewProducts: "Ona Bidhaa",
    
    // Products Section
    ourProducts: "Bidhaa Zetu",
    allCategories: "Aina Zote",
    filterBy: "Chuja kwa Aina",
    searchProducts: "Tafuta bidhaa...",
    viewDetails: "Ona Maelezo",
    requestQuote: "Omba Bei",
    
    // Categories
    diagnosticTools: "Vifaa vya Uchunguzi",
    wheelAlignment: "Uratibu wa Magurudumu", 
    balancingMachines: "Mashine za Usawaziko",
    tyreSystems: "Mifumo ya Tairi",
    garageLift: "Lifti ya Karakana",
    
    // Common
    learnMore: "Jifunze Zaidi",
    callNow: "Piga Simu Sasa",
    whatsappUs: "Tupigie WhatsApp",
    emailUs: "Tutumie Barua pepe",
    
    // Company Info
    companyName: "ROADBUCK Kenya Co. Ltd",
    yearsExperience: "Uzoefu wa Miaka 15+",
    trustedPartner: "Mshirika wa Kuaminika",
    qualityGuarantee: "Hakikisho la Ubora"
  }
};

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  const t = translations[language];
  
  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};