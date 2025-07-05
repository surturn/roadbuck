import { Product } from "./types";

export const balancingMachines: Product[] = [
  {
    id: "15",
    name: "VS20 LED Wheel Balancer",
    nameSwahili: "VS20 Kifaa cha Kusawazisha Magurudumu cha LED",
    category: "balancingMachines",
    description: "Semi‑automatic wheel balancer; dynamic/static/ALU modes, dual‑LED display, laser weight guide.",
    descriptionSwahili: "Kifaa cha semi-otomatiki cha kusawazisha magurudumu; hali za dynamic/static/ALU, onyesho la LED la maradufu, mwongozo wa uzito wa laser.",
    features: [
      "Semi-automatic operation",
      "Dynamic/static/ALU modes",
      "Dual-LED display",
      "Laser weight guide",
      "High precision balancing"
    ],
    featuresSwahili: [
      "Utendaji wa semi-otomatiki",
      "Hali za dynamic/static/ALU",
      "Onyesho la LED la maradufu",
      "Mwongozo wa uzito wa laser",
      "Kusawazisha kwa usahihi wa juu"
    ],
    specifications: {
      "Max Diameter": "26″",
      "Accuracy": "±1 g",
      "Display Type": "Dual-LED",
      "Weight Guide": "Laser",
      "Modes": "Dynamic/Static/ALU"
    },
    images: ["/src/assets/vs20-wheel-balancer.jpg"],
    inStock: true
  },
  {
    id: "16",
    name: "VS50 Advanced Wheel Balancer",
    nameSwahili: "VS50 Kifaa cha Hali ya Juu cha Kusawazisha Magurudumu",
    category: "balancingMachines",
    description: "LED display balancer; manual diameter/width input; entry‑level model of VS‑series.",
    descriptionSwahili: "Kifaa cha kusawazisha chenye onyesho la LED; kuingiza kwa mkono kwa kipimo/upana; mfano wa kiwango cha kuingia wa mfumo wa VS.",
    features: [
      "LED display system",
      "Manual diameter/width input",
      "Entry-level VS-series",
      "Enhanced precision",
      "Professional grade"
    ],
    featuresSwahili: [
      "Mfumo wa onyesho la LED",
      "Kuingiza kwa mkono kwa kipimo/upana",
      "Mfumo wa VS wa kiwango cha kuingia",
      "Usahihi ulioongezwa",
      "Kiwango cha kitaalamu"
    ],
    specifications: {
      "Max Diameter": "26″",
      "Accuracy": "±1 g",
      "Display": "LED",
      "Input Method": "Manual",
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
    description: "Quick‑balancing LED balancer; builds on VS50 with stronger motor system.",
    descriptionSwahili: "Kifaa cha LED cha kusawazisha kwa haraka; kinajengwa juu ya VS50 na mfumo wa injini mkuu.",
    features: [
      "Quick-balancing capability",
      "LED display technology",
      "Stronger motor system",
      "Standard precision",
      "Cost-effective solution"
    ],
    featuresSwahili: [
      "Uwezo wa kusawazisha kwa haraka",
      "Teknolojia ya onyesho la LED",
      "Mfumo wa injini mkuu",
      "Usahihi wa kawaida",
      "Suluhisho la bei nafuu"
    ],
    specifications: {
      "Max Diameter": "26″",
      "Accuracy": "±1 g",
      "Display": "LED",
      "Motor": "Enhanced",
      "Warranty": "2 Years"
    },
    images: ["/api/placeholder/600/400"],
    inStock: true
  },
  {
    id: "18",
    name: "VS60 Professional Wheel Balancer",
    nameSwahili: "VS60 Kifaa cha Kitaalamu cha Kusawazisha Magurudumu",
    category: "balancingMachines",
    description: "Semi‑automatic balancer; adds auto data entry over VS‑series entry models.",
    descriptionSwahili: "Kifaa cha semi-otomatiki cha kusawazisha; kinaongeza kuingiza data kwa otomatiki juu ya mifano ya kuingia ya mfumo wa VS.",
    features: [
      "Semi-automatic operation",
      "Auto data entry",
      "Enhanced VS-series features",
      "Professional capabilities",
      "Comprehensive display"
    ],
    featuresSwahili: [
      "Utendaji wa semi-otomatiki",
      "Kuingiza data kwa otomatiki",
      "Vipengele vilivyoongezwa vya mfumo wa VS",
      "Uwezo wa kitaalamu",
      "Onyesho la kina"
    ],
    specifications: {
      "Max Diameter": "26″",
      "Accuracy": "±1 g",
      "Data Entry": "Automatic",
      "Operation": "Semi-automatic",
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
    description: "Touch‑screen semi‑pro balancer with diagnostic modes and wheel data storage.",
    descriptionSwahili: "Kifaa cha semi-kitaalamu cha kugusa chenye hali za uchunguzi na uhifadhi wa data ya magurudumu.",
    features: [
      "Touchscreen interface",
      "Semi-pro capabilities",
      "Diagnostic modes",
      "Wheel data storage",
      "Premium features"
    ],
    featuresSwahili: [
      "Kiolesura cha kugusa",
      "Uwezo wa semi-kitaalamu",
      "Hali za uchunguzi",
      "Uhifadhi wa data ya magurudumu",
      "Vipengele vya hali ya juu"
    ],
    specifications: {
      "Max Diameter": "26″",
      "Accuracy": "±1 g",
      "Interface": "Touchscreen",
      "Storage": "Wheel data",
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
    description: "Premium balancer; touchscreen, dual‑plane balancing, diagnostics, save/load.",
    descriptionSwahili: "Kifaa cha hali ya juu; kugusa, kusawazisha kwa ndege mbili, uchunguzi, kuhifadhi/kupakia.",
    features: [
      "Premium grade construction",
      "Touchscreen control",
      "Dual-plane balancing",
      "Advanced diagnostics",
      "Save/load functionality"
    ],
    featuresSwahili: [
      "Ujenzi wa kiwango cha hali ya juu",
      "Udhibiti wa kugusa",
      "Kusawazisha kwa ndege mbili",
      "Uchunguzi wa hali ya juu",
      "Utendaji wa kuhifadhi/kupakia"
    ],
    specifications: {
      "Max Diameter": "26″",
      "Accuracy": "±1 g",
      "Interface": "Touchscreen",
      "Balancing": "Dual-plane",
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
    description: "Top‑tier compact balancer with built‑in printer option (CB650P), self‑calibrating.",
    descriptionSwahili: "Kifaa cha hali ya juu cha kusawazisha chenye chaguo la printa iliyojengewa ndani (CB650P), kinajipanga mwenyewe.",
    features: [
      "Top-tier compact design",
      "Built-in printer option",
      "Self-calibrating system",
      "Heavy-duty construction",
      "Advanced features"
    ],
    featuresSwahili: [
      "Muundo wa hali ya juu mdogo",
      "Chaguo la printa iliyojengewa ndani",
      "Mfumo wa kujipanga mwenyewe",
      "Ujenzi wa uzito mkuu",
      "Vipengele vya hali ya juu"
    ],
    specifications: {
      "Max Diameter": "26″",
      "Accuracy": "±1 g",
      "Printer": "Optional built-in",
      "Calibration": "Self-calibrating",
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
    description: "Compact automatic balancer; self‑calibration and no‑spin mode for delicate alloys.",
    descriptionSwahili: "Kifaa kidogo cha otomatiki cha kusawazisha; kujipanga mwenyewe na hali ya kutokuzunguka kwa aloi nyepesi.",
    features: [
      "Compact automatic design",
      "Self-calibration capability",
      "No-spin mode",
      "Delicate alloy protection",
      "Easy operation"
    ],
    featuresSwahili: [
      "Muundo mdogo wa otomatiki",
      "Uwezo wa kujipanga mwenyewe",
      "Hali ya kutokuzunguka",
      "Ulinzi wa aloi nyepesi",
      "Utendaji rahisi"
    ],
    specifications: {
      "Max Diameter": "26″",
      "Accuracy": "±1 g",
      "Calibration": "Self-calibrating",
      "Special Mode": "No-spin for alloys",
      "Warranty": "2 Years"
    },
    images: ["/api/placeholder/600/400"],
    inStock: true
  },
  {
    id: "23",
    name: "CB250 Standard Wheel Balancer",
    nameSwahili: "CB250 Kifaa cha Kawaida cha Kusawazisha Magurudumu",
    category: "balancingMachines",
    description: "Mid‑range compact balancer with split‑weight and fast cycle times.",
    descriptionSwahili: "Kifaa cha kati cha kusawazisha kidogo chenye uzito uliogawanywa na muda mfupi wa mzunguko.",
    features: [
      "Mid-range compact design",
      "Split-weight capability",
      "Fast cycle times",
      "Reliable performance",
      "Cost-effective"
    ],
    featuresSwahili: [
      "Muundo mdogo wa kati",
      "Uwezo wa uzito uliogawanywa",
      "Muda mfupi wa mzunguko",
      "Utendaji wa kutegemewa",
      "Bei nafuu"
    ],
    specifications: {
      "Max Diameter": "26″",
      "Accuracy": "±1 g",
      "Feature": "Split-weight",
      "Cycle Time": "Fast",
      "Warranty": "2 Years"
    },
    images: ["/api/placeholder/600/400"],
    inStock: true
  },
  {
    id: "24",
    name: "CB450 Professional Wheel Balancer",
    nameSwahili: "CB450 Kifaa cha Kitaalamu cha Kusawazisha Magurudumu",
    category: "balancingMachines",
    description: "Compact automatic balancer; fast startup/braking and patented software.",
    descriptionSwahili: "Kifaa kidogo cha otomatiki cha kusawazisha; kuanza/kusimama kwa haraka na programu ya haki miliki.",
    features: [
      "Compact automatic operation",
      "Fast startup/braking",
      "Patented software",
      "Professional quality",
      "Quality construction"
    ],
    featuresSwahili: [
      "Utendaji mdogo wa otomatiki",
      "Kuanza/kusimama kwa haraka",
      "Programu ya haki miliki",
      "Ubora wa kitaalamu",
      "Ujenzi wa ubora"
    ],
    specifications: {
      "Max Diameter": "26″",
      "Accuracy": "±1 g",
      "Software": "Patented",
      "Operation": "Fast startup/braking",
      "Warranty": "2 Years"
    },
    images: ["/api/placeholder/600/400"],
    inStock: true
  },
  {
    id: "25",
    name: "CB550 Advanced Wheel Balancer",
    nameSwahili: "CB550 Kifaa cha Hali ya Juu cha Kusawazisha Magurudumu",
    category: "balancingMachines",
    description: "Enhanced compact balancer; increased accuracy and faster cycle times.",
    descriptionSwahili: "Kifaa kilichoimarishwa kidogo cha kusawazisha; usahihi ulioongezwa na muda mfupi wa mzunguko.",
    features: [
      "Enhanced compact design",
      "Increased accuracy",
      "Faster cycle times",
      "Professional grade",
      "Enhanced precision"
    ],
    featuresSwahili: [
      "Muundo mdogo ulioboreshwa",
      "Usahihi ulioongezwa",
      "Muda mfupi wa mzunguko",
      "Kiwango cha kitaalamu",
      "Usahihi ulioongezwa"
    ],
    specifications: {
      "Max Diameter": "26″",
      "Accuracy": "±1 g",
      "Precision": "Enhanced",
      "Cycle Time": "Faster",
      "Warranty": "3 Years"
    },
    images: ["/api/placeholder/600/400"],
    inStock: true
  }
];