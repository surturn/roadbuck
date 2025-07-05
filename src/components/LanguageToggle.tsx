import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/TranslationContext";

export const LanguageToggle = () => {
  const { language, setLanguage } = useTranslation();
  
  return (
    <div className="flex items-center gap-1 bg-muted rounded-md p-1">
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="h-8 px-3 text-xs font-medium"
      >
        EN
      </Button>
      <Button
        variant={language === 'sw' ? 'default' : 'ghost'}  
        size="sm"
        onClick={() => setLanguage('sw')}
        className="h-8 px-3 text-xs font-medium"
      >
        SW
      </Button>
    </div>
  );
};