import { PremiumSaaSBackground } from "../../components/PremiumSaaSBackground";
import "../premium-saas-background.css";

/**
 * Homepage-only layout: lightweight static SaaS background (no Spline / iframe).
 */
export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PremiumSaaSBackground />
      {children}
    </>
  );
}
