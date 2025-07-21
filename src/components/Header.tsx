import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LanguageToggle } from "./LanguageToggle";
import { useTranslation } from "@/contexts/TranslationContext";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 lg:py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section - Responsive */}
          <div className="flex items-center gap-2 lg:gap-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg lg:text-xl">R</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg lg:text-xl font-bold text-foreground">{t.companyName}</h1>
              <p className="text-xs text-muted-foreground hidden lg:block">{t.yearsExperience}</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
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
          
          {/* Right Side - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageToggle />
            <a href="tel:+254745037446">
              <Button size="sm" className="bg-primary hover:bg-primary-hover">
                {t.callNow}
              </Button>
            </a>
          </div>

          {/* Mobile Right Side */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguageToggle />
            <a href="tel:+254745037446" className="hidden sm:block">
              <Button size="sm" className="bg-primary hover:bg-primary-hover text-xs px-3">
                {t.callNow}
              </Button>
            </a>
            
            {/* Mobile Menu Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 sm:w-96">
                <div className="flex flex-col space-y-6 mt-6">
                  {/* Mobile Logo */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xl">R</span>
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-foreground">{t.companyName}</h1>
                      <p className="text-xs text-muted-foreground">{t.yearsExperience}</p>
                    </div>
                  </div>
                  
                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-4">
                    <a 
                      href="/" 
                      className="text-foreground hover:text-primary transition-colors font-medium py-2 border-b border-border"
                      onClick={() => setIsOpen(false)}
                    >
                      {t.home}
                    </a>
                    <a 
                      href="/about" 
                      className="text-foreground hover:text-primary transition-colors font-medium py-2 border-b border-border"
                      onClick={() => setIsOpen(false)}
                    >
                      {t.about}
                    </a>
                    <a 
                      href="#products" 
                      className="text-foreground hover:text-primary transition-colors font-medium py-2 border-b border-border"
                      onClick={() => setIsOpen(false)}
                    >
                      {t.products}
                    </a>
                    <a 
                      href="/services" 
                      className="text-foreground hover:text-primary transition-colors font-medium py-2 border-b border-border"
                      onClick={() => setIsOpen(false)}
                    >
                      {t.services}
                    </a>
                    <a 
                      href="/contact" 
                      className="text-foreground hover:text-primary transition-colors font-medium py-2 border-b border-border"
                      onClick={() => setIsOpen(false)}
                    >
                      {t.contact}
                    </a>
                  </nav>
                  
                  {/* Mobile Call Button */}
                  <div className="pt-4">
                    <a href="tel:+254745037446" className="w-full block">
                      <Button className="w-full bg-primary hover:bg-primary-hover">
                        {t.callNow}
                      </Button>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};