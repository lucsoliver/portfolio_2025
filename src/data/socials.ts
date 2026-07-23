import type { ElementType } from "react";
import { Github, Linkedin, Instagram, createLucideIcon } from "lucide-react";

export const XIcon = createLucideIcon("X", [
  [
    "path",
    {
      d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
      stroke: "none",
      fill: "currentColor",
    },
  ],
]);

export interface SocialLink {
  href: string;
  icon: ElementType;
  label: string;
  rel: string;
}

export const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/lucsoliver",
    icon: Github,
    label: "Github",
    rel: "nofollow",
  },
  {
    href: "https://x.com/lyunekou",
    icon: XIcon,
    label: "Twitter",
    rel: "me noopener",
  },
  {
    href: "https://www.linkedin.com/in/lucas-oliveira-paula",
    icon: Linkedin,
    label: "Linkedin",
    rel: "me noopener",
  },
  {
    href: "https://www.instagram.com/lucasolvp",
    icon: Instagram,
    label: "Instagram",
    rel: "me noopener",
  },
];
