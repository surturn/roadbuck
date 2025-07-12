import { Button } from "@/components/ui/button";
import { LanguageToggle } from "./LanguageToggle";
import { useTranslation } from "@/contexts/TranslationContext";

export const Header = () => {
  const { t } = useTranslation();
  
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">{t.companyName}</h1>
              <p className="text-xs text-muted-foreground">{t.yearsExperience}</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              {t.home}
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              {t.about}
            </a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors font-medium">
              {t.products}
            </a>
            <a href="/services" className="text-foreground hover:text-primary transition-colors font-medium">
              {t.services}
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              {t.contact}
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <LanguageToggle />
           <a href="tel:+254794817115">
              <Button size="sm" className="bg-primary hover:bg-primary-hover">
                {t.callNow}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};