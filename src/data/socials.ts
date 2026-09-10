import type { ElementType } from "react";
import { LuGithub } from "react-icons/lu";
import { FaXTwitter, FaLinkedinIn, FaDiscord } from "react-icons/fa6";

export interface SocialLink {
  href?: string;
  copyText?: string;
  icon: ElementType;
  label: string;
  rel?: string;
}

export const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/lucsoliver",
    icon: LuGithub,
    label: "Github",
    rel: "nofollow",
  },
  {
    href: "https://x.com/lyunekou",
    icon: FaXTwitter,
    label: "Twitter",
    rel: "me noopener",
  },
  {
    href: "https://www.linkedin.com/in/lucas-oliveira-paula",
    icon: FaLinkedinIn,
    label: "Linkedin",
    rel: "me noopener",
  },
  {
    copyText: "lyunekou",
    icon: FaDiscord,
    label: "Discord - Copiar nome de usuário",
    rel: "me noopener",
  },
];
