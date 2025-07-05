import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductCard } from "@/components/ProductCard";
import { ProductFilter } from "@/components/ProductFilter";
import { TranslationProvider, useTranslation } from "@/contexts/TranslationContext";
import { products } from "@/data/products";
import { Product, ProductCategory } from "@/types/Product";
import { toast } from "@/hooks/use-toast";

const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const { t, language } = useTranslation();
  
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.nameSwahili.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (language === 'sw' ? product.descriptionSwahili : product.description)
        .toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  const handleQuoteRequest = (product: Product) => {
    toast({
      title: language === 'sw' ? "Ombi la Bei Limetumwa" : "Quote Request Sent",
      description: language === 'sw' 
        ? `Ombi lako la bei kwa ${product.nameSwahili} limetumwa. Tutawasiliana nawe hivi karibuni.`
        : `Your quote request for ${product.name} has been sent. We'll contact you soon.`,
    });
  };
  
  return (
    <section id="products" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.ourProducts}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'sw' 
              ? "Tunapatikana na bidhaa za kisasa za ubora wa juu kwa mahitaji yako yote ya magari"
              : "Discover our comprehensive range of high-quality automotive equipment for all your professional needs"
            }
          </p>
        </div>
        
        <div className="mb-8">
          <ProductFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuoteRequest={handleQuoteRequest}
            />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              {language === 'sw' ? "Hakuna bidhaa zilizopatikana" : "No products found"}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

const IndexContent = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProductsSection />
    </div>
  );
};

const Index = () => {
  return (
    <TranslationProvider>
      <IndexContent />
    </TranslationProvider>
  );
};

export default Index;
