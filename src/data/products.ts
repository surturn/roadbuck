import { Product } from "@/types/Product";

export const products: Product[] = [
  // TYRE CHANGERS
  {
    id: "1",
    name: "V9120 Fully Automatic Tyre Changer",
    nameSwahili: "V9120 Mashine ya Kubadilisha Tairi ya Kiotomatiki",
    category: "tyreSystems",
    description: "Fully‑automatic tilt‑tower tyre changer with pneumatic bead breaker; supports 12″–26″ rims; ideal for high‑volume service.",
    descriptionSwahili: "Mashine ya kiotomatiki kamili ya kubadilisha tairi yenye kifaa cha pneumatic cha kuvunja mzingo; inasaidia rim za 12″–26″; bora kwa huduma ya kiasi kikubwa.",
    features: [
      "Fully automatic tilt-tower operation",
      "Pneumatic bead breaker",
      "12″–26″ rim compatibility",
      "High-volume service capability",
      "Professional grade construction"
    ],
    featuresSwahili: [
      "Utendaji wa kiotomatiki wa tilt-tower",
      "Kifaa cha pneumatic cha kuvunja mzingo",
      "Inapatana na rim za 12″–26″",
      "Uwezo wa huduma ya kiasi kikubwa",
      "Ujenzi wa kiwango cha kitaalamu"
    ],
    specifications: {
      "Rim Range": "12″–26″",
      "Motor Power": "1.1 kW @220V / 0.75 kW @380V",
      "Weight": "425 kg",
      "Air Pressure": "≤10 bar",
      "Operation": "Fully Automatic"
    },
    images: ["/api/placeholder/600/400"],
    inStock: true
  },
  {
    id: "2",
    name: "V7120 Professional Tyre Changer",
    nameSwahili: "V7120 Mashine ya Kubadilisha Tairi ya Kitaalamu",
    category: "tyreSystems",
    description: "Robust professional tyre changer with reliable performance and durable construction for high-volume workshop operations.",
    descriptionSwahili: "Mashine madhubuti ya kitaalamu ya kubadilisha tairi yenye utendaji wa kutegemewa na ujenzi wa kudumu kwa kazi za karakana za wingi.",
    features: [
      "Professional grade construction",
      "High-volume capability",
      "Reliable operation",
      "Easy maintenance",
      "Compact design"
    ],
    featuresSwahili: [
      "Ujenzi wa kiwango cha kitaalamu",
      "Uwezo wa wingi",
      "Utendaji wa kutegemewa",
      "Matengenezo rahisi",
      "Muundo mdogo"
    ],
    specifications: {
      "Power Supply": "220V AC",
      "Rim Diameter": "12\"-26\"",
      "Operation Mode": "Semi-automatic",
      "Construction": "Heavy-duty steel",
      "Warranty": "2 Years"
    },
    images: ["/api/placeholder/600/400"],
    inStock: true
  },
  {
    id: "3",
    name: "V9220 Heavy-Duty Tyre Changer",
    nameSwahili: "V9220 Mashine ya Kubadilisha Tairi ya Uzito Mkuu",
    category: "tyreSystems",
    description: "Heavy-duty tyre changer designed for commercial applications with enhanced power and durability for truck and heavy vehicle tyres.",
    descriptionSwahili: "Mashine ya uzito mkuu ya kubadilisha tairi iliyoundwa kwa matumizi ya kibiashara yenye nguvu iliyoongezwa na kudumu kwa tairi za malori na magari mazito.",
    features: [
      "Heavy-duty construction",
      "Enhanced motor power",
      "Truck tyre capability",
      "Commercial grade",
      "Extended warranty"
    ],
    featuresSwahili: [
      "Ujenzi wa uzito mkuu",
      "Nguvu ya injini iliyoongezwa",
      "Uwezo wa tairi za malori",
      "Kiwango cha kibiashara",
      "Dhamana iliyoongezwa"
    ],
    specifications: {
      "Power Supply": "380V 3-Phase",
      "Motor Power": "2.2kW",
      "Max Wheel Weight": "150kg",
      "Rim Diameter": "14\"-28\"",
      "Warranty": "3 Years"
    },
    images: ["/src/assets/v9220-tire-changer.jpg"],
    inStock: true
  },
  {
    id: "4",
    name: "V500 SE Tyre Changer",
    nameSwahili: "V500 SE Mashine ya Kubadilisha Tairi",
    category: "tyreSystems",
    description: "Standard edition tyre changer offering reliable performance and essential features for small to medium workshops at an affordable price.",
    descriptionSwahili: "Mashine ya kawaida ya kubadilisha tairi inayotoa utendaji wa kutegemewa na vipengele muhimu kwa karakana ndogo hadi za kati kwa bei nafuu.",
    features: [
      "Essential features",
      "Reliable performance",
      "Cost-effective",
      "User-friendly operation",
      "Compact footprint"
    ],
    featuresSwahili: [
      "Vipengele muhimu",
      "Utendaji wa kutegemewa",
      "Bei nafuu",
      "Utendaji rahisi",
      "Eneo dogo"
    ],
    specifications: {
      "Power Supply": "220V AC",
      "Motor Power": "0.75kW",
      "Rim Diameter": "12\"-22\"",
      "Operation Mode": "Manual",
      "Warranty": "1 Year"
    },
    images: ["/api/placeholder/600/400"],
    inStock: true
  },
  {
    id: "5",
    name: "V600 PRO Advanced Tyre Changer",
    nameSwahili: "V600 PRO Mashine ya Hali ya Juu ya Kubadilisha Tairi",
    category: "tyreSystems",
    description: "Professional grade tyre changer with advanced features including automatic functions, assist arms, and premium build quality for demanding applications.",
    descriptionSwahili: "Mashine ya kiwango cha kitaalamu ya kubadilisha tairi yenye vipengele vya hali ya juu vikiwemo kazi za kiotomatiki, mikono ya msaada, na ubora wa ujenzi wa hali ya juu kwa matumizi makubwa.",
    features: [
      "Advanced automation",
      "Professional assist arms",
      "Premium build quality",
      "Multiple operation modes",
      "Enhanced safety features"
    ],
    featuresSwahili: [
      "Otomatiki ya hali ya juu",
      "Mikono ya msaada ya kitaalamu",
      "Ubora wa ujenzi wa hali ya juu",
      "Aina mbalimbali za utendaji",
      "Vipengele vya usalama vilivyoongezwa"
    ],
    specifications: {
      "Power Supply": "220V AC",
      "Motor Power": "1.5kW",
      "Automation Level": "Advanced",
      "Assist Arms": "Pneumatic",
      "Warranty": "3 Years"
    },
    images: ["/src/assets/v600-pro-tire-changer.jpg"],
    inStock: true
  },
  {
    id: "6",
    name: "CT226 Compact Tyre Changer",
    nameSwahili: "CT226 Mashine Ndogo ya Kubadilisha Tairi",
    category: "tyreSystems",
    description: "Compact and portable tyre changer ideal for small workshops and mobile services. Space-saving design without compromising on functionality.",
    descriptionSwahili: "Mashine ndogo na ya kubebeka ya kubadilisha tairi inayofaa kwa karakana ndogo na huduma za mitembezi. Muundo unaookoa nafasi bila kupunguza utendaji.",
    features: [
      "Compact design",
      "Space-saving",
      "Portable operation",
      "Essential functions",
      "Easy storage"
    ],
    featuresSwahili: [
      "Muundo mdogo",
      "Unaookoa nafasi",
      "Utendaji wa kubebeka",
      "Kazi muhimu",
      "Uhifadhi rahisi"
    ],
    specifications: {
      "Power Supply": "220V AC",
      "Motor Power": "0.55kW",
      "Rim Diameter": "10\"-20\"",
      "Weight": "120kg",
      "Footprint": "Compact"
    },
    images: ["/api/placeholder/600/400"],
    inStock: true
  },
  {
    id: "7",
    name: "GT525 SE Professional Tyre Changer",
    nameSwahili: "GT525 SE Mashine ya Kitaalamu ya Kubadilisha Tairi",
    category: "tyreSystems",
    description: "Professional tyre changer with enhanced features and reliable performance for medium to large workshop operations.",
    descriptionSwahili: "Mashine ya kitaalamu ya kubadilisha tairi yenye vipengele vilivyoongezwa na utendaji wa kutegemewa kwa kazi za karakana za kati hadi kubwa.",
    features: [
      "Enhanced performance",
      "Professional features",
      "Reliable operation",
      "Medium to large capacity",
      "Quality construction"
    ],
    featuresSwahili: [
      "Utendaji ulioongezwa",
      "Vipengele vya kitaalamu",
      "Utendaji wa kutegemewa",
      "Uwezo wa kati hadi mkubwa",
      "Ujenzi wa ubora"
    ],
    specifications: {
      "Power Supply": "220V AC",
      "Motor Power": "1.1kW",
      "Rim Diameter": "12\"-24\"",
      "Operation Mode": "Semi-automatic",
      "Warranty": "2 Years"
    },
    images: ["/api/placeholder/600/400"],
    inStock: true
  },
  {
    id: "8",
    name: "GT526 PRO Premium Tyre Changer",
    nameSwahili: "GT526 PRO Mashine ya Hali ya Juu ya Kubadilisha Tairi",
    category: "tyreSystems",
    description: "Premium tyre changer with full automation, advanced assist systems, and professional-grade construction for high-end workshop operations.",
    descriptionSwahili: "Mashine ya hali ya juu ya kubadilisha tairi yenye otomatiki kamili, mifumo ya msaada ya hali ya juu, na ujenzi wa kiwango cha kitaalamu kwa kazi za karakana za hali ya juu.",
    features: [
      "Full automation",
      "Advanced assist systems",
      "Premium construction",
      "Professional grade",
      "Extended warranty"
    ],
    featuresSwahili: [
      "Otomatiki kamili",
      "Mifumo ya msaada ya hali ya juu",
      "Ujenzi wa hali ya juu",
      "Kiwango cha kitaalamu",
      "Dhamana iliyoongezwa"
    ],
    specifications: {
      "Power Supply": "220V AC",
      "Motor Power": "1.5kW",
      "Automation": "Full",
      "Assist System": "Advanced",
      "Warranty": "3 Years"
    },
    images: ["/api/placeholder/600/400"],
    inStock: true
  },
  {
    id: "9",
    name: "GT526 SE Standard Tyre Changer",
    nameSwahili: "GT526 SE Mashine ya Kawaida ya Kubadilisha Tairi",
    category: "tyreSystems",
    description: "Standard edition of the GT526 series offering reliable performance with essential features for professional tyre changing operations.",
    descriptionSwahili: "Toleo la kawaida la mfumo wa GT526 linalotoa utendaji wa kutegemewa na vipengele muhimu kwa kazi za kitaalamu za kubadilisha tairi.",
    features: [
      "Reliable performance",
      "Essential features",
      "Professional quality",
      "Cost-effective",
      "Standard automation"
    ],
    featuresSwahili: [
      "Utendaji wa kutegemewa",
      "Vipengele muhimu",
      "Ubora wa kitaalamu",
      "Bei nafuu",
      "Otomatiki ya kawaida"
    ],
    specifications: {
      "Power Supply": "220V AC",
      "Motor Power": "1.1kW",
      "Automation": "Standard",
      "Rim Diameter": "12\"-24\"",
      "Warranty": "2 Years"
    },
    images: ["/api/placeholder/600/400"],
    inStock: true
  },
  {
    id: "10",
    name: "GT526 Basic Tyre Changer",
    nameSwahili: "GT526 Mashine ya Msingi ya Kubadilisha Tairi",
    category: "tyreSystems",
    description: "Basic model of the GT526 series providing fundamental tyre changing capabilities with manual operation and reliable performance.",
    descriptionSwahili: "Mfano wa msingi wa mfumo wa GT526 unaotoa uwezo wa msingi wa kubadilisha tairi kwa utendaji wa mkono na utendaji wa kutegemewa.",
    features: [
      "Basic functionality",
      "Manual operation",
      "Reliable construction",
      "Affordable pricing",
      "Essential features"
    ],
    featuresSwahili: [
      "Utendaji wa msingi",
      "Utendaji wa mkono",
      "Ujenzi wa kutegemewa",
      "Bei nafuu",
      "Vipengele muhimu"
    ],
    specifications: {
      "Power Supply": "220V AC",
      "Motor Power": "0.75kW",
      "Operation Mode": "Manual",
      "Rim Diameter": "12\"-22\"",
      "Warranty": "1 Year"
    },
    images: ["/api/placeholder/600/400"],
    inStock: true
  },
  {
    id: "11",
    name: "GT325 Professional Tyre Changer",
    nameSwahili: "GT325 Mashine ya Kitaalamu ya Kubadilisha Tairi",
    category: "tyreSystems",
    description: "Professional tyre changer with balanced features and performance, suitable for various workshop sizes and applications.",
    descriptionSwahili: "Mashine ya kitaalamu ya kubadilisha tairi yenye vipengele na utendaji wa usawa, inayofaa kwa ukubwa mbalimbali wa karakana na matumizi.",
    features: [
      "Balanced performance",
      "Professional features",
      "Versatile application",
      "Reliable operation",
      "Quality construction"
    ],
    featuresSwahili: [
      "Utendaji wa usawa",
      "Vipengele vya kitaalamu",
      "Matumizi mbalimbali",
      "Utendaji wa kutegemewa",
      "Ujenzi wa ubora"
    ],
    specifications: {
      "Power Supply": "220V AC",
      "Motor Power": "1.1kW",
      "Rim Diameter": "12\"-24\"",
      "Operation Mode": "Semi-automatic",
      "Warranty": "2 Years"
    },
    images: ["/api/placeholder/600/400"],
    inStock: true
  },
  {
    id: "12",
    name: "GT325 PRO Advanced Tyre Changer",
    nameSwahili: "GT325 PRO Mashine ya Hali ya Juu ya Kubadilisha Tairi",
    category: "tyreSystems",
    description: "Advanced version of GT325 with professional features, enhanced automation, and superior build quality for demanding workshop operations.",
    descriptionSwahili: "Toleo la hali ya juu la GT325 lenye vipengele vya kitaalamu, otomatiki iliyoongezwa, na ubora wa ujenzi wa hali ya juu kwa kazi ngumu za karakana.",
    features: [
      "Advanced automation",
      "Professional grade",
      "Enhanced features",
      "Superior build quality",
      "Extended warranty"
    ],
    featuresSwahili: [
      "Otomatiki ya hali ya juu",
      "Kiwango cha kitaalamu",
      "Vipengele vilivyoongezwa",
      "Ubora wa ujenzi wa hali ya juu",
      "Dhamana iliyoongezwa"
    ],
    specifications: {
      "Power Supply": "220V AC",
      "Motor Power": "1.5kW",
      "Automation": "Advanced",
      "Features": "Enhanced",
      "Warranty": "3 Years"
    },
    images: ["/api/placeholder/600/400"],
    inStock: true
  },
  {
    id: "13",
    name: "GT325 L Leverless Tyre Changer",
    nameSwahili: "GT325 L Mashine ya Kubadilisha Tairi Bila Lever",
    category: "tyreSystems",
    description: "Leverless tyre changer designed to protect expensive alloy wheels and low-profile tyres with gentle, automated operation.",
    descriptionSwahili: "Mashine ya kubadilisha tairi bila lever iliyoundwa kulinda magurudumu ya bei ghali ya aloi na tairi za profaili ya chini kwa utendaji wa upole na wa kiotomatiki.",
    features: [
      "Leverless operation",
      "Alloy wheel protection",
      "Low-profile capability",
      "Gentle automation",
      "Premium features"
    ],
    featuresSwahili: [
      "Utendaji bila lever",
      "Ulinzi wa magurudumu ya aloi",
      "Uwezo wa profaili ya chini",
      "Otomatiki ya upole",
      "Vipengele vya hali ya juu"
    ],
    specifications: {
      "Power Supply": "220V AC",
      "Motor Power": "1.5kW",
      "Operation": "Leverless",
      "Wheel Protection": "Advanced",
      "Warranty": "3 Years"
    },
    images: ["/api/placeholder/600/400"],
    inStock: true
  },
  {
    id: "14",
    name: "GT325 R Run-Flat Tyre Changer",
    nameSwahili: "GT325 R Mashine ya Kubadilisha Tairi za Run-Flat",
    category: "tyreSystems",
    description: "Specialized tyre changer designed for run-flat and low-profile tyres with enhanced power and specialized tooling for challenging applications.",
    descriptionSwahili: "Mashine maalum ya kubadilisha tairi iliyoundwa kwa tairi za run-flat na za profaili ya chini yenye nguvu iliyoongezwa na vifaa maalum kwa matumizi magumu.",
    features: [
      "Run-flat capability",
      "Enhanced power",
      "Specialized tooling",
      "Low-profile expertise",
      "Professional grade"
    ],
    featuresSwahili: [
      "Uwezo wa run-flat",
      "Nguvu iliyoongezwa",
      "Vifaa maalum",
      "Utaalamu wa profaili ya chini",
      "Kiwango cha kitaalamu"
    ],
    specifications: {
      "Power Supply": "220V AC",
      "Motor Power": "2.0kW",
      "Specialization": "Run-flat tyres",
      "Tooling": "Specialized",
      "Warranty": "3 Years"
    },
    images: ["/api/placeholder/600/400"],
    inStock: true
  },

  // WHEEL BALANCERS
  {
    id: "15",
    name: "VS20 LED Wheel Balancer",
    nameSwahili: "VS20 Kifaa cha Kusawazisha Magurudumu cha LED",
    category: "balancingMachines",
    description: "Advanced wheel balancer featuring LED positioning display, laser assist technology, manual input capability, and both dynamic and static balancing modes.",
    descriptionSwahili: "Kifaa cha hali ya juu cha kusawazisha magurudumu chenye onyesho la nafasi la LED, teknolojia ya msaada wa laser, uwezo wa kuingiza kwa mkono, na aina za kusawazisha za dynamic na static.",
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
    id: "16",
    name: "VS50 Advanced Wheel Balancer",
    nameSwahili: "VS50 Kifaa cha Hali ya Juu cha Kusawazisha Magurudumu",
    category: "balancingMachines",
    description: "Advanced wheel balancer with enhanced features, automatic data entry, and improved precision for professional workshop applications.",
    descriptionSwahili: "Kifaa cha hali ya juu cha kusawazisha magurudumu chenye vipengele vilivyoongezwa, kuingiza data kwa kiotomatiki, na usahihi ulioboreshwa kwa matumizi ya karakana za kitaalamu.",
    features: [
      "Enhanced precision",
      "Automatic data entry",
      "Advanced features",
      "Professional grade",
      "Improved performance"
    ],
    featuresSwahili: [
      "Usahihi ulioongezwa",
      "Kuingiza data kwa kiotomatiki",
      "Vipengele vya hali ya juu",
      "Kiwango cha kitaalamu",
      "Utendaji ulioboreshwa"
    ],
    specifications: {
      "Display": "Digital LCD",
      "Data Entry": "Automatic",
      "Precision": "±1g",
      "Max Wheel Weight": "70kg",
      "Warranty": "2 Years"
    },
    images: ["/src/assets/vs50-wheel-balancer.jpg"],
    inStock: true
  },
  {
    id: "17",
    name: "V60 Standard Wheel Balancer",
    nameSwahili: "V60 Kifaa cha Kawaida cha Kusawazisha Magurudumu",
    category: "balancingMachines",
    description: "Standard wheel balancer offering reliable performance and essential balancing features for medium-sized workshop operations.",
    descriptionSwahili: "Kifaa cha kawaida cha kusawazisha magurudumu kinachotoa utendaji wa kutegemewa na vipengele muhimu vya kusawazisha kwa kazi za karakana za ukubwa wa kati.",
    features: [
      "Reliable performance",
      "Essential features",
      "Standard precision",
      "Cost-effective",
      "User-friendly"
    ],
    featuresSwahili: [
      "Utendaji wa kutegemewa",
      "Vipengele muhimu",
      "Usahihi wa kawaida",
      "Bei nafuu",
      "Rahisi kutumia"
    ],
    specifications: {
      "Display": "LED",
      "Max Rim Diameter": "24\"",
      "Balancing Speed": "200 RPM",
      "Accuracy": "±5g",
      "Warranty": "1 Year"
    },
    images: ["/api/placeholder/600/400"],
    inStock: true
  },
  {
    id: "18",
    name: "VS60 Professional Wheel Balancer",
    nameSwahili: "VS60 Kifaa cha Kitaalamu cha Kusawazisha Magurudumu",
    category: "balancingMachines",
    description: "Professional wheel balancer with advanced diagnostic capabilities, multiple balancing programs, and enhanced precision for demanding applications.",
    descriptionSwahili: "Kifaa cha kitaalamu cha kusawazisha magurudumu chenye uwezo wa uchunguzi wa hali ya juu, programu nyingi za kusawazisha, na usahihi ulioongezwa kwa matumizi makubwa.",
    features: [
      "Advanced diagnostics",
      "Multiple programs",
      "Enhanced precision",
      "Professional features",
      "Comprehensive display"
    ],
    featuresSwahili: [
      "Uchunguzi wa hali ya juu",
      "Programu nyingi",
      "Usahihi ulioongezwa",
      "Vipengele vya kitaalamu",
      "Onyesho la kina"
    ],
    specifications: {
      "Display": "Color LCD",
      "Programs": "Multiple",
      "Diagnostics": "Advanced",
      "Precision": "±1g",
      "Warranty": "2 Years"
    },
    images: ["/api/placeholder/600/400"],
    inStock: true
  },
  {
    id: "19",
    name: "VS70 Premium Wheel Balancer",
    nameSwahili: "VS70 Kifaa cha Hali ya Juu cha Kusawazisha Magurudumu",
    category: "balancingMachines",
    description: "Premium wheel balancer with touchscreen interface, automatic measurement, advanced diagnostics, and comprehensive balancing programs.",
    descriptionSwahili: "Kifaa cha hali ya juu cha kusawazisha magurudumu chenye kiolesura cha kugusa, upimaji wa kiotomatiki, uchunguzi wa hali ya juu, na programu za kina za kusawazisha.",
    features: [
      "Touchscreen interface",
      "Automatic measurement",
      "Advanced diagnostics",
      "Comprehensive programs",
      "Premium features"
    ],
    featuresSwahili: [
      "Kiolesura cha kugusa",
      "Upimaji wa kiotomatiki",
      "Uchunguzi wa hali ya juu",
      "Programu za kina",
      "Vipengele vya hali ya juu"
    ],
    specifications: {
      "Interface": "Touchscreen",
      "Measurement": "Automatic",
      "Programs": "Comprehensive",
      "Precision": "±0.5g",
      "Warranty": "3 Years"
    },
    images: ["/api/placeholder/600/400"],
    inStock: true
  },
  {
    id: "20",
    name: "VS80 High-End Wheel Balancer",
    nameSwahili: "VS80 Kifaa cha Hali ya Juu Sana cha Kusawazisha Magurudumu",
    category: "balancingMachines",
    description: "High-end wheel balancer with cutting-edge technology, full automation, integrated printer, and comprehensive diagnostic capabilities for professional workshops.",
    descriptionSwahili: "Kifaa cha hali ya juu sana cha kusawazisha magurudumu chenye teknolojia ya kisasa, otomatiki kamili, printa iliyojumuishwa, na uwezo wa kina wa uchunguzi kwa karakana za kitaalamu.",
    features: [
      "Cutting-edge technology",
      "Full automation",
      "Integrated printer",
      "Comprehensive diagnostics",
      "Professional grade"
    ],
    featuresSwahili: [
      "Teknolojia ya kisasa",
      "Otomatiki kamili",
      "Printa iliyojumuishwa",
      "Uchunguzi wa kina",
      "Kiwango cha kitaalamu"
    ],
    specifications: {
      "Technology": "Latest",
      "Automation": "Full",
      "Printer": "Integrated",
      "Precision": "±0.1g",
      "Warranty": "3 Years"
    },
    images: ["/api/placeholder/600/400"],
    inStock: true
  },
  {
    id: "21",
    name: "CB650 Heavy-Duty Wheel Balancer",
    nameSwahili: "CB650 Kifaa cha Uzito Mkuu cha Kusawazisha Magurudumu",
    category: "balancingMachines",
    description: "Heavy-duty wheel balancer designed for commercial applications with enhanced capacity, touchscreen control, and advanced features for truck and heavy vehicle wheels.",
    descriptionSwahili: "Kifaa cha uzito mkuu cha kusawazisha magurudumu kilichoundwa kwa matumizi ya kibiashara chenye uwezo ulioongezwa, udhibiti wa kugusa, na vipengele vya hali ya juu kwa magurudumu ya malori na magari mazito.",
    features: [
      "Heavy-duty capacity",
      "Touchscreen control",
      "Commercial grade",
      "Truck wheel capability",
      "Advanced features"
    ],
    featuresSwahili: [
      "Uwezo wa uzito mkuu",
      "Udhibiti wa kugusa",
      "Kiwango cha kibiashara",
      "Uwezo wa magurudumu ya malori",
      "Vipengele vya hali ya juu"
    ],
    specifications: {
      "Max Wheel Weight": "200kg",
      "Interface": "Touchscreen",
      "Application": "Commercial/Truck",
      "Precision": "±1g",
      "Warranty": "3 Years"
    },
    images: ["/src/assets/cb650-wheel-balancer.jpg"],
    inStock: true
  },
  {
    id: "22",
    name: "CB150 Basic Wheel Balancer",
    nameSwahili: "CB150 Kifaa cha Msingi cha Kusawazisha Magurudumu",
    category: "balancingMachines",
    description: "Basic wheel balancer offering essential balancing functions at an affordable price point, ideal for small workshops and startup operations.",
    descriptionSwahili: "Kifaa cha msingi cha kusawazisha magurudumu kinachotoa kazi muhimu za kusawazisha kwa bei nafuu, kinachofaa kwa karakana ndogo na kazi za kuanza.",
    features: [
      "Basic functionality",
      "Affordable pricing",
      "Essential features",
      "Compact design",
      "Easy operation"
    ],
    featuresSwahili: [
      "Utendaji wa msingi",
      "Bei nafuu",
      "Vipengele muhimu",
      "Muundo mdogo",
      "Utendaji rahisi"
    ],
    specifications: {
      "Max Wheel Weight": "60kg",
      "Display": "LED",
      "Operation": "Manual input",
      "Accuracy": "±10g",
      "Warranty": "1 Year"
    },
    images: ["/api/placeholder/600/400"],
    inStock: true
  },
  {
    id: "23",
    name: "CB450 Professional Wheel Balancer",
    nameSwahili: "CB450 Kifaa cha Kitaalamu cha Kusawazisha Magurudumu",
    category: "balancingMachines",
    description: "Professional wheel balancer with advanced features, automatic data entry, multiple balancing modes, and reliable performance for professional workshops.",
    descriptionSwahili: "Kifaa cha kitaalamu cha kusawazisha magurudumu chenye vipengele vya hali ya juu, kuingiza data kwa kiotomatiki, aina nyingi za kusawazisha, na utendaji wa kutegemewa kwa karakana za kitaalamu.",
    features: [
      "Professional features",
      "Automatic data entry",
      "Multiple modes",
      "Reliable performance",
      "Quality construction"
    ],
    featuresSwahili: [
      "Vipengele vya kitaalamu",
      "Kuingiza data kwa kiotomatiki",
      "Aina nyingi",
      "Utendaji wa kutegemewa",
      "Ujenzi wa ubora"
    ],
    specifications: {
      "Max Wheel Weight": "80kg",
      "Data Entry": "Automatic",
      "Modes": "Multiple",
      "Precision": "±2g",
      "Warranty": "2 Years"
    },
    images: ["/api/placeholder/600/400"],
    inStock: true
  },
  {
    id: "24",
    name: "CB550 Advanced Wheel Balancer",
    nameSwahili: "CB550 Kifaa cha Hali ya Juu cha Kusawazisha Magurudumu",
    category: "balancingMachines",
    description: "Advanced wheel balancer with comprehensive features, diagnostic capabilities, printer integration, and enhanced precision for demanding professional applications.",
    descriptionSwahili: "Kifaa cha hali ya juu cha kusawazisha magurudumu chenye vipengele vya kina, uwezo wa uchunguzi, ujumuishaji wa printa, na usahihi ulioongezwa kwa matumizi makubwa ya kitaalamu.",
    features: [
      "Comprehensive features",
      "Diagnostic capabilities",
      "Printer integration",
      "Enhanced precision",
      "Professional grade"
    ],
    featuresSwahili: [
      "Vipengele vya kina",
      "Uwezo wa uchunguzi",
      "Ujumuishaji wa printa",
      "Usahihi ulioongezwa",
      "Kiwango cha kitaalamu"
    ],
    specifications: {
      "Features": "Comprehensive",
      "Diagnostics": "Advanced",
      "Printer": "Integrated",
      "Precision": "±1g",
      "Warranty": "3 Years"
    },
    images: ["/api/placeholder/600/400"],
    inStock: true
  },
  {
    id: "25",
    name: "CB250 Standard Wheel Balancer",
    nameSwahili: "CB250 Kifaa cha Kawaida cha Kusawazisha Magurudumu",
    category: "balancingMachines",
    description: "Standard wheel balancer offering reliable performance with essential features and good precision for medium-sized workshop operations.",
    descriptionSwahili: "Kifaa cha kawaida cha kusawazisha magurudumu kinachotoa utendaji wa kutegemewa na vipengele muhimu na usahihi mzuri kwa kazi za karakana za ukubwa wa kati.",
    features: [
      "Reliable performance",
      "Essential features",
      "Good precision",
      "Standard operation",
      "Cost-effective"
    ],
    featuresSwahili: [
      "Utendaji wa kutegemewa",
      "Vipengele muhimu", 
      "Usahihi mzuri",
      "Utendaji wa kawaida",
      "Bei nafuu"
    ],
    specifications: {
      "Max Wheel Weight": "70kg",
      "Display": "Digital",
      "Operation": "Standard",
      "Precision": "±5g",
      "Warranty": "2 Years"
    },
    images: ["/api/placeholder/600/400"],
    inStock: true
  },

  // EXISTING PRODUCTS (keeping original diagnostic tools, alignment, and lift)
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
  },
  {
    id: "28",
    name: "Two Post Car Lift",
    nameSwahili: "Lifti ya Gari ya Nguzo Mbili",
    category: "garageLift", 
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
