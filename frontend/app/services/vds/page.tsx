import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

export default function RegularVdsPage() {
  return (
    <ServicePageTemplate
      hero={{
        heading: "Virtual Servers (VDS)",
        subheading: "Regular VDS for standard operations with full OS customization",
        summary: "Regular virtual servers (VDS) are designed for standard 'white' or 'gray' operations. These servers follow standard hosting policies - complaints are processed according to provider terms. Ideal for legitimate businesses that need full OS control without special abuse-handling requirements."
      }}
      sections={[
        {
          title: "What are Regular VDS?",
          body: "Regular virtual servers (VDS) provide dedicated virtualized resources on shared hardware. Unlike bulletproof VDS, these servers operate under standard hosting policies where DMCA and abuse complaints are processed according to provider terms.",
          bullets: [
            "Full root/administrator access",
            "Install any operating system (Linux, Windows, custom)",
            "Scalable CPU, RAM, and storage resources",
            "High-speed network with DDoS protection",
            "99.9% uptime guarantee",
            "24/7 technical support"
          ]
        },
        {
          title: "Key Features",
          body: "Regular VDS servers offer complete flexibility and control while maintaining standard compliance policies.",
          bullets: [
            "Complete control over server environment",
            "Suitable for legitimate 'white' or 'gray' operations",
            "Standard complaint processing (not ignored)",
            "Flexible resource upgrades and downgrades",
            "Multiple OS options and custom images supported"
          ]
        }
      ]}
      steps={[
        {
          title: "Choose Your Plan",
          description: "Select CPU, RAM, and storage resources based on your application requirements."
        },
        {
          title: "Select Operating System",
          description: "Install Linux (Ubuntu, CentOS, Debian), Windows Server, or upload custom images."
        },
        {
          title: "Configure & Deploy",
          description: "Set up your server environment with full root access and deploy applications."
        },
        {
          title: "Scale as Needed",
          description: "Upgrade or downgrade resources anytime to match your growing needs."
        }
      ]}
      faqs={[
        {
          question: "What's the difference between Regular VDS and Bulletproof VDS?",
          answer: "Regular VDS follows standard hosting policies where complaints are processed according to provider terms. Bulletproof VDS has special abuse-handling policies where complaints are manually reviewed and often ignored for offshore-friendly content."
        },
        {
          question: "Can I install any operating system?",
          answer: "Yes! You have full root access and can install any Linux distribution (Ubuntu, CentOS, Debian), Windows Server, or upload custom OS images."
        },
        {
          question: "How are complaints handled?",
          answer: "Regular VDS servers follow standard hosting policies. DMCA notices and abuse complaints are processed according to provider's terms of service, and content may be removed if found violating terms."
        },
        {
          question: "Is DDoS protection included?",
          answer: "Yes, all VDS plans include basic DDoS protection and network-level filtering to ensure your server stays online."
        }
      ]}
    />
  );
}



