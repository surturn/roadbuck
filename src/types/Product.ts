export interface Product {
  id: string;
  name: string;
  nameSwahili: string;
  category: ProductCategory;
  price?: string;
  description: string;
  descriptionSwahili: string;
  features: string[];
  featuresSwahili: string[];
  specifications: Record<string, string>;
  images: string[];
  brochureUrl?: string;
  inStock: boolean;
}

export type ProductCategory = 
  | 'diagnosticTools'
  | 'wheelAlignment' 
  | 'balancingMachines'
  | 'tyreSystems'
  | 'garageLift';

export const productCategories: ProductCategory[] = [
  'diagnosticTools',
  'wheelAlignment',
  'balancingMachines', 
  'tyreSystems',
  'garageLift'
];