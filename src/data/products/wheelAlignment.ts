import { Product } from "./types";

export const wheelAlignment: Product[] = [
  {
    id: "27", 
    name: "3D Wheel Alignment System",
    nameSwahili: "Mfumo wa Uratibu wa Magurudumu 3D",
    category: "wheelAlignment",
    description: "State-of-the-art 3D wheel alignment system with camera-based measurement technology for precise vehicle alignment.",
    descriptionSwahili: "Mfumo wa kisasa wa uratibu wa magurudumu wa 3D unaotumia teknolojia ya kamera kwa upimaji sahihi wa uratibu wa gari.",
    features: [
      "3D camera measurement",
      "Wireless operation",
      "Database of 40,000+ vehicles",
      "Real-time alignment display",
      "Printable reports"
    ],
    featuresSwahili: [
      "Upimaji wa kamera ya 3D",
      "Utendaji bila waya",
      "Hifadhidata ya magari 40,000+",
      "Onyesho la uratibu la wakati halisi",
      "Ripoti zinazoweza kuchapishwa"
    ],
    specifications: {
      "Measurement Range": "±20°",
      "Accuracy": "±1'",
      "Measurement Time": "< 2 minutes",
      "Power Supply": "220V AC"
    },
    images: ["/api/placeholder/600/400"],
    inStock: true
  }
];