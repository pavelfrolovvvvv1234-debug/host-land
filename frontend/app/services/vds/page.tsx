import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

export default function RegularVdsPage() {
  return (
    <ServicePageTemplate
      title="Virtual Servers (VDS)"
      subtitle="Regular VDS for standard operations with full OS customization"
      description="Regular virtual servers (VDS) are designed for standard 'white' or 'gray' operations. These servers follow standard hosting policies - complaints are processed according to provider terms. Ideal for legitimate businesses that need full OS control without special abuse-handling requirements."
      features={[
        {
          title: "Full Root Access",
          description: "Complete control over your virtual server with root/administrator access to install and configure any software."
        },
        {
          title: "Any OS Installation",
          description: "Install any operating system - Linux distributions (Ubuntu, CentOS, Debian), Windows Server, or custom images."
        },
        {
          title: "Standard Compliance",
          description: "Servers follow standard hosting policies. DMCA and abuse complaints are processed according to provider terms of service."
        },
        {
          title: "Flexible Resources",
          description: "Scalable CPU, RAM, and storage resources. Upgrade or downgrade as your needs change."
        },
        {
          title: "Fast Network",
          description: "High-speed network connectivity with DDoS protection and 99.9% uptime guarantee."
        },
        {
          title: "24/7 Support",
          description: "Round-the-clock technical support for server management, troubleshooting, and maintenance."
        }
      ]}
      plans={[
        {
          name: "VDS Basic",
          price: "$12.99",
          period: "/month",
          specs: [
            "2 CPU Cores",
            "2GB RAM",
            "40GB SSD Storage",
            "Unlimited Bandwidth",
            "1 IPv4 Address",
            "Full Root Access"
          ],
          orderLink: "https://my.dior.host/billmgr?func=logon"
        },
        {
          name: "VDS Standard",
          price: "$24.99",
          period: "/month",
          specs: [
            "4 CPU Cores",
            "4GB RAM",
            "80GB SSD Storage",
            "Unlimited Bandwidth",
            "1 IPv4 Address",
            "Full Root Access"
          ],
          orderLink: "https://my.dior.host/billmgr?func=logon"
        },
        {
          name: "VDS Pro",
          price: "$49.99",
          period: "/month",
          specs: [
            "8 CPU Cores",
            "8GB RAM",
            "160GB SSD Storage",
            "Unlimited Bandwidth",
            "1 IPv4 Address",
            "Full Root Access"
          ],
          orderLink: "https://my.dior.host/billmgr?func=logon"
        }
      ]}
      useCases={[
        {
          title: "Web Hosting",
          description: "Host multiple websites, web applications, or e-commerce platforms with full control over the server environment."
        },
        {
          title: "Development & Testing",
          description: "Create isolated development and testing environments for software projects without affecting production."
        },
        {
          title: "Database Servers",
          description: "Run MySQL, PostgreSQL, MongoDB or other database systems with dedicated resources and performance."
        },
        {
          title: "Game Servers",
          description: "Host multiplayer game servers with low latency and dedicated resources for smooth gameplay."
        }
      ]}
      ctaText="Order Regular VDS"
      ctaLink="https://my.dior.host/billmgr?func=logon"
      locale="en"
    />
  );
}



