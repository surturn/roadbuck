import { Header } from "@/components/Header";
import { TranslationProvider, useTranslation } from "@/contexts/TranslationContext";

const AboutContent = () => {
  const { t, language } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">{t.about}</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              {language === 'sw' 
                ? "ROADBUCK Kenya Co. Ltd ni kampuni inayoongoza katika usambazaji wa vifaa vya magari nchini Kenya. Tangu kuanzishwa mwaka 2010, tumekuwa tukiwapatia wataalamu wa magari vifaa vya ubora wa juu."
                : "ROADBUCK Kenya Co. Ltd is a leading automotive equipment supplier in Kenya. Since our establishment in 2010, we have been providing automotive professionals with high-quality equipment."
              }
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {language === 'sw' ? "Dhamira Yetu" : "Our Mission"}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'sw'
                    ? "Kuwapatia wataalamu wa magari vifaa vya kisasa na huduma za ubora wa juu ili kuboresha ufanisi wa kazi zao."
                    : "To provide automotive professionals with cutting-edge equipment and superior service to enhance their operational efficiency."
                  }
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {language === 'sw' ? "Maono Yetu" : "Our Vision"}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'sw'
                    ? "Kuwa kampuni inayoongoza katika teknolojia ya magari nchini Kenya na Afrika Mashariki."
                    : "To be the leading automotive technology company in Kenya and East Africa."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <TranslationProvider>
      <AboutContent />
    </TranslationProvider>
  );
};

export default About;