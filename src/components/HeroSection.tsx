import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/TranslationContext";
import heroImage from "@/assets/hero-automotive.jpg";

export const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative bg-gradient-to-br from-secondary via-accent to-secondary text-white py-16 sm:py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-secondary/80" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm rounded-full px-3 py-2 mb-4 sm:mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-medium">{t.trustedPartner}</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            {t.heroTitle}
          </h1>
          
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8 text-primary px-2">
            {t.heroSubtitle}
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            {t.heroDescription}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-lg shadow-lg w-full sm:w-auto"
            >
              {t.getQuote}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-lg backdrop-blur-sm w-full sm:w-auto"
            >
              {t.viewProducts}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Industrial Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
    </section>
  );
};