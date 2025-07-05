import { Product } from "./types";

export const garageLift: Product[] = [
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
  }
];