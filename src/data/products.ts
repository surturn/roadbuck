import { Product } from "@/types/Product";

export const products: Product[] = [
  {
    id: "1",
    name: "V9120 Fully Automatic Tyre Changer",
    nameSwahili: "V9120 Mashine ya Kubadilisha Tairi ya Kiotomatiki",
    category: "tyreSystems",
    price: "KSh 380,000",
    description: "Professional fully automatic tyre changer designed for high efficiency operations. Handles cars, SUVs, and motorcycles with advanced pneumatic assistance and user-friendly controls.",
    descriptionSwahili: "Mashine ya kitaalamu ya kubadilisha tairi ya kiotomatiki iliyoundwa kwa kazi za ufanisi wa juu. Inashughulikia magari, SUV, na pikipiki kwa msaada wa hewa na vidhibiti rahisi.",
    features: [
      "Fully automatic operation",
      "Car/SUV/Motorcycle compatibility",
      "Advanced pneumatic assistance",
      "High efficiency performance",
      "User-friendly interface"
    ],
    featuresSwahili: [
      "Utendaji wa kiotomatiki kabisa",
      "Inapatana na magari/SUV/pikipiki",
      "Msaada wa hewa wa kisasa",
      "Utendaji wa ufanisi wa juu",
      "Kiolesura cha kutumia kwa urahisi"
    ],
    specifications: {
      "Power Supply": "220V AC",
      "Motor Power": "1.1kW",
      "Vehicle Types": "Car/SUV/Motorcycle",
      "Operation Mode": "Fully Automatic",
      "Warranty": "2 Years"
    },
    images: ["/src/assets/v9120-tire-changer.jpg"],
    inStock: true
  },
  {
    id: "2",
    name: "V7120 GT325 R Professional Tyre Changer",
    nameSwahili: "V7120 GT325 R Mashine ya Kubadilisha Tairi ya Kitaalamu",
    category: "tyreSystems",
    price: "KSh 450,000",
    description: "Heavy-duty professional tyre changer with multiple variants (PRO/SE/L/R) featuring automation levels, assist arms, and advanced functionality for demanding workshop operations.",
    descriptionSwahili: "Mashine ya uzito mkuu ya kitaalamu ya kubadilisha tairi yenye aina mbalimbali (PRO/SE/L/R) zenye viwango vya otomatiki, mikono ya msaada, na utendaji wa hali ya juu kwa kazi ngumu za karakana.",
    features: [
      "Multiple automation variants",
      "Heavy-duty construction",
      "Professional assist arms",
      "Advanced functionality",
      "Workshop-grade reliability"
    ],
    featuresSwahili: [
      "Aina mbalimbali za otomatiki",
      "Ujenzi wa uzito mkuu",
      "Mikono ya msaada ya kitaalamu",
      "Utendaji wa hali ya juu",
      "Kutegemewa kwa kiwango cha karakana"
    ],
    specifications: {
      "Model Range": "CT226 to Heavy-duty",
      "Variants": "PRO/SE/L/R available",
      "Assist Arms": "Professional grade",
      "Automation": "Multiple levels",
      "Construction": "Heavy-duty"
    },
    images: ["/src/assets/v7120-tire-changer.jpg"],
    inStock: true
  },
  {
    id: "3",
    name: "VS20 LED Wheel Balancer",
    nameSwahili: "VS20 Kifaa cha Kusawazisha Magurudumu cha LED",
    category: "balancingMachines",
    price: "KSh 280,000",
    description: "Advanced wheel balancer featuring LED positioning display, laser assist technology, manual input capability, and both dynamic and static balancing modes for precise wheel balancing operations.",
    descriptionSwahili: "Kifaa cha hali ya juu cha kusawazisha magurudumu chenye onyesho la nafasi la LED, teknolojia ya msaada wa laser, uwezo wa kuingiza kwa mkono, na aina za kusawazisha za dynamic na static kwa kazi sahihi za kusawazisha magurudumu.",
    features: [
      "LED positioning display",
      "Laser assist technology",
      "Manual input capability",
      "Dynamic balancing mode",
      "Static balancing mode"
    ],
    featuresSwahili: [
      "Onyesho la nafasi la LED",
      "Teknolojia ya msaada wa laser",
      "Uwezo wa kuingiza kwa mkono",
      "Hali ya kusawazisha ya dynamic",
      "Hali ya kusawazisha ya static"
    ],
    specifications: {
      "Display Type": "LED positioning",
      "Assist Technology": "Laser guided",
      "Input Method": "Manual",
      "Balancing Modes": "Dynamic & Static",
      "Precision": "High accuracy"
    },
    images: ["/src/assets/vs20-wheel-balancer.jpg"],
    inStock: true
  },
  {
    id: "4",
    name: "VS/CB Series Advanced Wheel Balancer",
    nameSwahili: "VS/CB Mfumo wa Hali ya Juu wa Kusawazisha Magurudumu",
    category: "balancingMachines",
    price: "KSh 520,000",
    description: "Premium wheel balancer series with advanced automation, touchscreen interface, automatic data entry, multiple spindle adapters, integrated printer, and comprehensive diagnostics for professional workshops.",
    descriptionSwahili: "Mfumo wa hali ya juu wa kusawazisha magurudumu wenye otomatiki ya hali ya juu, kiolesura cha kugusa, kuingiza data kwa otomatiki, viunganishi vingi vya spindle, printa iliyojumuishwa, na uchunguzi wa kina kwa karakana za kitaalamu.",
    features: [
      "Advanced automation system",
      "Touchscreen interface",
      "Automatic data entry",
      "Multiple spindle adapters",
      "Integrated printer options",
      "Comprehensive diagnostics"
    ],
    featuresSwahili: [
      "Mfumo wa otomatiki wa hali ya juu",
      "Kiolesura cha kugusa",
      "Kuingiza data kwa otomatiki",
      "Viunganishi vingi vya spindle",
      "Chaguo za printa zilizojumuishwa",
      "Uchunguzi wa kina"
    ],
    specifications: {
      "Interface": "Touchscreen",
      "Data Entry": "Automatic",
      "Adapters": "Multiple spindle types",
      "Printer": "Integrated options",
      "Diagnostics": "Comprehensive"
    },
    images: ["/src/assets/vs-cb-wheel-balancer.jpg"],
    inStock: true
  },
  {
    id: "5",
    name: "Professional OBD2 Scanner",
    nameSwahili: "Kifaa cha Uchunguzi OBD2",
    category: "diagnosticTools",
    price: "KSh 45,000",
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
    id: "6", 
    name: "3D Wheel Alignment System",
    nameSwahili: "Mfumo wa Uratibu wa Magurudumu 3D",
    category: "wheelAlignment",
    price: "KSh 850,000",
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
  },
  {
    id: "7",
    name: "Two Post Car Lift",
    nameSwahili: "Lifti ya Gari ya Nguzo Mbili",
    category: "garageLift", 
    price: "KSh 450,000",
    description: "Heavy-duty two-post car lift with symmetric design for reliable vehicle lifting and maintenance operations.",
    descriptionSwahili: "Lifti ya gari ya uzito mkuu ya nguzo mbili yenye muundo sawa kwa ajili ya kuinua gari kwa kutegemewa na kazi za matengenezo.",
    features: [
      "4.0 ton lifting capacity",
      "Symmetric arm configuration", 
      "Safety lock system",
      "Adjustable arm pads",
      "CE certified"
    ],
    featuresSwahili: [
      "Uwezo wa kuinua tani 4.0",
      "Mpangilio sawa wa mikono",
      "Mfumo wa kufunga kwa usalama", 
      "Pedi za mikono zinazoweza kurekebishwa",
      "Imethibitishwa na CE"
    ],
    specifications: {
      "Lifting Capacity": "4000kg",
      "Max Lifting Height": "1900mm",
      "Overall Height": "3700mm",
      "Power Supply": "380V 3-Phase"
    },
    images: ["/api/placeholder/600/400"],
    inStock: true
  },
  {
    id: "8",
    name: "Digital Multimeter Pro",
    nameSwahili: "Kipimo cha Kidijitali cha Kitaalamu",
    category: "diagnosticTools",
    price: "KSh 12,500",
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