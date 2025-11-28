import Link from "next/link";

const services = [
  {
    title: "Bulletproof VDS",
    description:
      "On these servers, you can keep everything. We ignore any type of complaint. The ability to deliver any OS. Anonymity is 100%",
    href: "/bulletproof/vds",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#e0e0e0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
        <path d="M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2" />
        <path d="M6 6h.01" />
        <path d="M6 18h.01" />
        <path d="m13 6-4 6h6l-4 6" />
      </svg>
    )
  },
  {
    title: "Bulletproof Domains",
    description:
      "Bulletproof domains. No blocking and the warranty is for the whole period! Transfer is possible, if desired. All domains for $70",
    href: "/bulletproof/domains",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#e0e0e0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
      </svg>
    )
  },
  {
    title: "Virtual servers (VDS)",
    description:
      'Regular servers for "white" or "gray" operation. Complaints are not ignored! The ability to install any OS',
    href: "/services/vds",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#e0e0e0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
        <line x1="6" x2="6.01" y1="6" y2="6" />
        <line x1="6" x2="6.01" y1="18" y2="18" />
      </svg>
    )
  },
  {
    title: "Bulletproof Dedicated Servers",
    description:
      "Dedicated servers with a 100% guarantee of anonymity. No blocking and no complaints. The ability to deliver any OS.",
    href: "/bulletproof/dedicated",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#e0e0e0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5" />
        <path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5" />
        <path d="M6 6h.01" />
        <path d="M6 18h.01" />
        <path d="m15.7 13.4-.9-.3" />
        <path d="m9.2 10.9-.9-.3" />
        <path d="m10.6 15.7.3-.9" />
        <path d="m13.6 15.7-.4-1" />
        <path d="m10.8 9.3-.4-1" />
        <path d="m8.3 13.6 1-.4" />
        <path d="m14.7 10.8 1-.4" />
        <path d="m13.4 8.3-.3.9" />
      </svg>
    )
  },
  {
    title: "Dedicated Servers",
    description:
      'Dedicated servers for "white" or "gray" operation. Complaints are not ignored! The ability to install any OS.',
    href: "/services/dedicated",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#e0e0e0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5" />
        <path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5" />
        <path d="M6 6h.01" />
        <path d="M6 18h.01" />
        <path d="m15.7 13.4-.9-.3" />
        <path d="m9.2 10.9-.9-.3" />
        <path d="m10.6 15.7.3-.9" />
        <path d="m13.6 15.7-.4-1" />
        <path d="m10.8 9.3-.4-1" />
        <path d="m8.3 13.6 1-.4" />
        <path d="m14.7 10.8 1-.4" />
        <path d="m13.4 8.3-.3.9" />
      </svg>
    )
  },
  {
    title: "TurboVDS",
    description:
      "Servers for parsing, mass-checking, SEO, security analysis, and other high-load network tasks. With up to 10 Gbps bandwidth, they deliver lightning-fast performance and stability. Ideal for port scanning, host availability checks, automation, and API-driven operations. Outperforms standard abuse-resistant VDS thanks to superior network throughput.",
    href: "/services/vdsturbo",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#e0e0e0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
        <path d="M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2" />
        <path d="M6 6h.01" />
        <path d="M6 18h.01" />
        <path d="m13 6-4 6h6l-4 6" />
      </svg>
    )
  },
  {
    title: "Dedicated Servers IPHM",
    description:
      "IPHM servers allow users to hide their real IP address by masking it with another. This can be useful for privacy protection, bypassing geographical restrictions, or conducting network security testing. Bandwidth up to 10 Gbps.",
    href: "/services/iphm",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#e0e0e0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z" />
        <path d="M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z" />
        <path d="M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z" />
      </svg>
    )
  }
];

export default function ServicesPage() {
  return (
    <div className="mt-4">
      <h1 className="text-3xl font-bold mb-6">Services</h1>
      <div className="flex flex-wrap w-full gap-3 relative h-full bg-[#09131c] rounded-lg shadow-[0px_21px_295px_89px_rgba(10,_77,_146,_0.18)] p-4">
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="border relative rounded-lg border-[#09131c] bg-black/60 shadow-md shadow-black w-full p-4 select-none cursor-pointer hover:border-[#446581] transition-all block md:max-w-1/4 md:w-1/4 flex-grow basis-60 service-card scroll-reveal revealed"
          >
            <div className="ml-5 mt-5 top-0 left-0 scale-[1.9] md:scale-[1.2] md:ml-1 md:mt-1 size-10 flex items-center justify-center">
              {service.icon}
            </div>
            <h2 className="font-bold text-blue-400 text-balance mt-4">{service.title}</h2>
            <p className="text-md md:text-xs text-balance mt-2">{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}



