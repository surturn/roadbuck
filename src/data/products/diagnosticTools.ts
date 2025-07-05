import { Product } from "./types";

export const diagnosticTools: Product[] = [
  {
    id: "26",
    name: "Professional OBD2 Scanner",
    nameSwahili: "Kifaa cha Uchunguzi OBD2",
    category: "diagnosticTools",
    description: "Advanced automotive diagnostic scanner with full system coverage and live data streaming capabilities.",
    descriptionSwahili: "Kifaa cha hali ya juu cha uchunguzi wa magari chenye uwezo wa kufunika mifumo yote na kuonyesha data ya moja kwa moja.",
    features: [
      "Full OBD2 protocol support",
      "Live data streaming", 
      "Freeze frame analysis",
      "I/M readiness status",
      "DTC lookup database"
    ],
    featuresSwahili: [
      "Inaungaa itifaki zote za OBD2",
      "Kuonyesha data ya moja kwa moja",
      "Uchambuzi wa picha zilizosimama",
      "Hali ya utayari wa I/M", 
      "Hifadhidata ya DTC"
    ],
    specifications: {
      "Screen": "5.5 inch HD Display",
      "Battery": "3000mAh Li-ion",
      "Operating Temp": "-10°C to +60°C",
      "Warranty": "2 Years"
    },
    images: ["/api/placeholder/600/400"],
    inStock: true
  },
  {
    id: "29",
    name: "Digital Multimeter Pro",
    nameSwahili: "Kipimo cha Kidijitali cha Kitaalamu",
    category: "diagnosticTools",
    description: "Professional automotive multimeter with advanced testing capabilities for electrical diagnostics.",
    descriptionSwahili: "Kipimo cha umeme cha kitaalamu cha magari chenye uwezo wa juu wa kupima kwa ajili ya uchunguzi wa umeme.",
    features: [
      "True RMS measurement",
      "Automotive test functions",
      "Data logging capability",
      "Safety rated CAT III",
      "Backlit display"
    ],
    featuresSwahili: [
      "Upimaji wa RMS halisi",
      "Kazi za kupima za magari",
      "Uwezo wa kurekodi data",
      "Kiwango cha usalama CAT III",
      "Onyesho lenye mwanga wa nyuma"
    ],
    specifications: {
      "DC Voltage": "0.1mV - 1000V",
      "AC Voltage": "0.1mV - 750V", 
      "Current": "0.01μA - 10A",
      "Display": "6000 counts"
    },
    images: ["/api/placeholder/600/400"],
    inStock: true
  }
];