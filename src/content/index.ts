/**
 * Barrel re-export — single entry point for all site content.
 *
 * Each section's data lives in its own file for easy editing.
 * Import from "@/content" (or "../content") and everything is available.
 */

// Types
export * from "./types";

// Data
export { heroData } from "./hero";
export { speakers } from "./speakers";
export { agenda } from "./agenda";
export { venueData } from "./venue";
export {
  partners,
  tierConfig,
  tierOrder,
  partnerCta,
  partnersSectionHeader,
} from "./partners";
export { patrons } from "./patrons";
export { kolaNaukowe } from "./kolaNaukowe";
export { whyAttendCards } from "./whyAttend";
export { navLinks } from "./navbar";
export { footerData } from "./footer";
