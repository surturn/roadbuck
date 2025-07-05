import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ProductCategory, productCategories } from "@/types/Product";
import { useTranslation } from "@/contexts/TranslationContext";

interface ProductFilterProps {
  selectedCategory: ProductCategory | 'all';
  onCategoryChange: (category: ProductCategory | 'all') => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const ProductFilter = ({
  selectedCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange
}: ProductFilterProps) => {
  const { t } = useTranslation();
  
  const getCategoryName = (category: ProductCategory) => {
    const categoryMap = {
      diagnosticTools: t.diagnosticTools,
      wheelAlignment: t.wheelAlignment,
      balancingMachines: t.balancingMachines,
      tyreSystems: t.tyreSystems,
      garageLift: t.garageLift
    };
    return categoryMap[category];
  };
  
  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder={t.searchProducts}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-background border-border"
        />
      </div>
      
      <div className="space-y-3">
        <h3 className="font-semibold text-foreground">{t.filterBy}</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onCategoryChange('all')}
            className={selectedCategory === 'all' ? 'bg-primary hover:bg-primary-hover' : ''}
          >
            {t.allCategories}
          </Button>
          
          {productCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => onCategoryChange(category)}
              className={selectedCategory === category ? 'bg-primary hover:bg-primary-hover' : ''}
            >
              {getCategoryName(category)}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};