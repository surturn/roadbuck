import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/Product";
import { useTranslation } from "@/contexts/TranslationContext";
import  {imageMap } from "@/data/products/imageMap"; // <-- Fixed import

interface ProductCardProps {
  product: Product;
  onQuoteRequest: (product: Product) => void;
}

export const ProductCard = ({ product, onQuoteRequest }: ProductCardProps) => {
  const { language, t } = useTranslation();
  
  const displayName = language === 'sw' ? product.nameSwahili : product.name;
  const displayDescription = language === 'sw' ? product.descriptionSwahili : product.description;
  
  // Use imageMap for the image source
  const filename = product.images?.[0];
  const imageSrc = filename ? imageMap[filename] || '/placeholder.svg' : '/placeholder.svg';

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
      <CardHeader className="p-0">
        <div className="aspect-video overflow-hidden rounded-t-lg bg-muted">
          <img 
            src={imageSrc}
            alt={displayName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-semibold text-lg text-foreground line-clamp-2">
            {displayName}
          </h3>
          {product.inStock && (
            <Badge variant="secondary" className="ml-2 bg-primary/10 text-primary">
              In Stock
            </Badge>
          )}
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {displayDescription}
        </p>
        
        
        <div className="space-y-2">
          <div className="text-xs text-muted-foreground font-medium">
            Key Features:
          </div>
          <ul className="text-xs text-muted-foreground space-y-1">
            {(language === 'sw' ? product.featuresSwahili : product.features)
              .slice(0, 3)
              .map((feature, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                  {feature}
                </li>
              ))
            }
          </ul>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 gap-2">
        <Button variant="outline" size="sm" className="flex-1">
          {t.viewDetails}
        </Button>
    <Button 
  size="sm" 
  className="flex-1 bg-primary hover:bg-primary-hover"
  onClick={() => {
    const message = encodeURIComponent(
      `Hi! I'd like to request a quote for:\n\n` +
      `Product: ${product.name || 'Product Name'}\n` +
      `${product.description ? `Description: ${product.description}\n` : ''}` +
      `\nPlease let me know about:\n` +
      `• Pricing\n` +
      `• Availability\n` +
      `• Delivery options\n\n` +
      `Thank you!`
    );
    window.open(`https://wa.me/254794817115?text=${message}`, '_blank');
  }}
>
  {t.requestQuote}
</Button>
      </CardFooter>
    </Card>
  );
};
