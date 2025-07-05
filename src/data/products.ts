import { Product } from "@/types/Product";

export const products: Product[] = [
  {
    id: "1",
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
    id: "2", 
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
    id: "3",
    name: "Automatic Wheel Balancer",
    nameSwahili: "Kifaa cha Kusawazisha Magurudumu cha Kiotomatiki",
    category: "balancingMachines", 
    price: "KSh 320,000",
    description: "High-precision automatic wheel balancer with advanced diagnostic features and user-friendly operation.",
    descriptionSwahili: "Kifaa cha usahihi wa juu cha kusawazisha magurudumu chenye vipengele vya uchunguzi wa hali ya juu na utendaji rahisi kwa mtumiaji.",
    features: [
      "Automatic measurement",
      "LED positioning display", 
      "Motorcycle program",
      "Self-calibration function",
      "Protective guard"
    ],
    featuresSwahili: [
      "Upimaji wa kiotomatiki",
      "Onyesho la nafasi la LED",
      "Programu ya pikipiki",
      "Kipengele cha kujirekebisha",
      "Kinga ya usalama"
    ],
    specifications: {
      "Rim Diameter": "10\"-28\"",
      "Max Wheel Weight": "80kg",
      "Balancing Speed": "200 RPM",
      "Accuracy": "±1g"
    },
    images: ["/api/placeholder/600/400"],
    inStock: true
  },
  {
    id: "4",
    name: "Tyre Changer Machine", 
    nameSwahili: "Mashine ya Kubadilisha Tairi",
    category: "tyreSystems",
    price: "KSh 180,000",
    description: "Professional tyre changing machine designed for efficient and safe tyre mounting and demounting operations.",
    descriptionSwahili: "Mashine ya kitaalamu ya kubadilisha tairi iliyoundwa kwa ajili ya kazi za kupandisha na kuondoa tairi kwa ufanisi na usalama.",
    features: [
      "Suitable for all tyre types",
      "Pneumatic operation",
      "Bead breaker system",
      "Tool kit included",
      "Heavy-duty construction"
    ],
    featuresSwahili: [
      "Inafaa kwa aina zote za tairi",
      "Utendaji wa pneumatic",
      "Mfumo wa kuvunja bead",
      "Kifurushi cha vifaa kimejumuishwa",
      "Ujenzi wa uzito mkuu"
    ],
    specifications: {
      "Rim Diameter": "12\"-26\"",
      "Max Wheel Width": "15\"",
      "Operating Pressure": "8-10 bar",
      "Power": "1.1kW"
    },
    images: ["/api/placeholder/600/400"],
    inStock: true
  },
  {
    id: "5",
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
    id: "6",
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