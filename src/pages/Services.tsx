import { Header } from "@/components/Header";
import { TranslationProvider, useTranslation } from "@/contexts/TranslationContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesContent = () => {
  const { t, language } = useTranslation();
  
  const services = [
    {
      title: language === 'sw' ? "Usafirishaji na Usakinishaji" : "Delivery & Installation",
      description: language === 'sw' 
        ? "Tunasafirishia na kusakinisha vifaa vyako popote Kenya."
        : "We deliver and install your equipment anywhere in Kenya."
    },
    {
      title: language === 'sw' ? "Mafunzo ya Wataalamu" : "Professional Training", 
      description: language === 'sw'
        ? "Mafunzo ya kina kwa timu yako ili kutumia vifaa ipasavyo."
        : "Comprehensive training for your team on proper equipment usage."
    },
    {
      title: language === 'sw' ? "Msaada wa Kiufundi" : "Technical Support",
      description: language === 'sw'
        ? "Msaada wa saa 24 kutoka kwa wataalamu wetu."
        : "24/7 technical support from our expert technicians."
    }
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">{t.services}</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border">
                <CardHeader>
                  <CardTitle className="text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <TranslationProvider>
      <ServicesContent />
    </TranslationProvider>
  );
};

export default Services;