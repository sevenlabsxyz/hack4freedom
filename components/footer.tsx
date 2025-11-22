import React from "react";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const XIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-480 -466.815 2160 2160"
    className={className}
  >
    <path
      fill="#fff"
      d="M306.615 79.694H144.011L892.476 1150.3h162.604ZM0 0h357.328l309.814 450.883L1055.03 0h105.86L714.15 519.295 1200 1226.37H842.672L515.493 750.215 105.866 1226.37H0l468.485-544.568Z"
    />
  </svg>
);

const defaultSections = [
  {
    title: "Hack4Freedom 2026",
    links: [
      { name: "Apply Now", href: "https://tally.so/r/3jXA2a" },
      { name: "Become a Sponsor", href: "mailto:sponsor@evento.so" },
      { name: "Join Mentorship Programme", href: "mailto:mentors@evento.so" },
    ],
  },
  {
    title: "2025 Series",
    links: [
      { name: "Mentors & Speakers", href: "#mentors" },
      { name: "2025 Winners", href: "#winners" },
      { name: "Impact", href: "#work-2025" },
      { name: "Get Involved", href: "#get-involved" },
    ],
  },
  {
    title: "Evento",
    links: [
      { name: "Our Website", href: "https://evento.so" },
      { name: "Evento Story", href: "https://evento.so/blog/story" },
      { name: "Why Evento", href: "#why-evento" },
      { name: "Create Event", href: "https://evento.so/create" },
    ],
  },
];

const defaultSocialLinks = [
  {
    icon: <Instagram className="size-5" />,
    href: "https://instagram.com/evento.so",
    label: "Instagram",
  },
  {
    icon: <Github className="size-5" />,
    href: "https://github.com/sevenlabsxyz",
    label: "GitHub",
  },
  {
    icon: <XIcon className="size-6 -ml-2" />,
    href: "https://twitter.com/evento_so",
    label: "X (formerly Twitter)",
  },
];

const defaultLegalLinks = [
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
];

export const Footer = ({
  logo = {
    url: "/",
    src: "/hack4freedom-logo.png",
    alt: "logo",
    title: "hack4freedom.com",
  },
  sections = defaultSections,
  description = "A freedom tech hackathon for the next generation of female developers in Bitcoin",
  socialLinks = defaultSocialLinks,
  copyright = "© 2026 Evento -- evento.so",
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <section className="py-16 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <a href={logo.url}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-8"
                />
              </a>
            </div>
            <p className="text-muted-foreground max-w-[70%] text-sm">
              {description}
            </p>
            <ul className="text-muted-foreground flex items-center space-x-6">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="hover:text-primary font-medium">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="text-muted-foreground space-y-3 text-sm">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-primary font-medium"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="text-muted-foreground mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-6 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary">
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
