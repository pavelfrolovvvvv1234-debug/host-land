"use client";

import { ServicePageTemplate } from "../../../components/services/ServicePageTemplate";

const hero = {
  heading: "Web Hosting",
  subheading: "Reliable shared hosting for websites and applications",
  summary: "Professional web hosting service with cPanel control panel, one-click installs, and 99.9% uptime guarantee. Perfect for small to medium websites, blogs, and business applications."
};

const sections = [
  {
    title: "Easy Management",
    body: "Manage your hosting with an intuitive cPanel interface. Install applications with one click, manage domains, databases, and email accounts effortlessly.",
    bullets: [
      "cPanel control panel included",
      "One-click application installer (WordPress, Joomla, etc.)",
      "Email accounts and webmail access",
      "File manager and FTP access"
    ]
  },
  {
    title: "Performance & Reliability",
    body: "Fast SSD storage, optimized servers, and reliable infrastructure ensure your website loads quickly and stays online.",
    bullets: [
      "SSD storage for faster performance",
      "99.9% uptime guarantee",
      "Daily automated backups",
      "PHP 8.x and MySQL support"
    ]
  },
  {
    title: "Security Features",
    body: "Built-in security measures protect your website from common threats and vulnerabilities.",
    bullets: [
      "Free SSL certificates",
      "DDoS protection",
      "Malware scanning",
      "Regular security updates"
    ]
  }
];

const steps = [
  {
    title: "Choose a plan",
    description: "Select the web hosting plan that fits your needs and budget."
  },
  {
    title: "Register or transfer domain",
    description: "Register a new domain or transfer your existing domain to our hosting."
  },
  {
    title: "Install your website",
    description: "Use one-click installer to set up WordPress, Joomla, or any other CMS."
  },
  {
    title: "Launch your site",
    description: "Your website is ready to go live with full cPanel access."
  }
];

const faqs = [
  {
    question: "What is included with web hosting?",
    answer: "Web hosting includes cPanel control panel, one-click application installer, email accounts, SSL certificates, daily backups, and 24/7 support."
  },
  {
    question: "Can I host multiple websites?",
    answer: "Yes, depending on your plan, you can host multiple domains and websites on a single hosting account."
  },
  {
    question: "Do you provide email hosting?",
    answer: "Yes, all web hosting plans include email accounts with webmail access and support for IMAP/POP3/SMTP."
  },
  {
    question: "What applications can I install?",
    answer: "You can install popular CMS platforms like WordPress, Joomla, Drupal, and many other applications through our one-click installer."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes, we offer a 30-day money-back guarantee on all web hosting plans."
  }
];

export default function WebHostingPage() {
  return (
    <ServicePageTemplate
      hero={hero}
      sections={sections}
      steps={steps}
      faqs={faqs}
    />
  );
}

