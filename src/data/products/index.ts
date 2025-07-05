import { Product } from "./types";
import { tyreSystems } from "./tyreSystems";
import { balancingMachines } from "./balancingMachines";
import { diagnosticTools } from "./diagnosticTools";
import { wheelAlignment } from "./wheelAlignment";
import { garageLift } from "./garageLift";

export const products: Product[] = [
  ...tyreSystems,
  ...balancingMachines,
  ...diagnosticTools,
  ...wheelAlignment,
  ...garageLift
];

// Re-export types for convenience
export * from "./types";