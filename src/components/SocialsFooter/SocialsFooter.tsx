import React from "react";
import { Mail } from "lucide-react";

import { LuGithub } from "react-icons/lu";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import Tooltip from "../Tooltip/Tooltip";
import styles from "./SocialsFooter.module.css";

interface Social {
  id: string;
  href: string;
  icon: React.ElementType;
  alt: string;
  title: string;
  rel: string;
}

const socials: Social[] = [
  {
    id: "email",
    href: "mailto:lucasolv.dev@gmail.com",
    icon: Mail,
    alt: "Email",
    title: "E-mail",
    rel: "nofollow",
  },
  {
    id: "github",
    href: "https://github.com/lucsoliver",
    icon: LuGithub,
    alt: "GitHub",
    title: "GitHub",
    rel: "me noopener",
  },
  {
    id: "twitter",
    href: "https://x.com/lyunekou",
    icon: FaXTwitter,
    alt: "Twitter",
    title: "Twitter",
    rel: "me noopener",
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/lucas-oliveira-paula/",
    icon: FaLinkedinIn,
    alt: "Linkedin",
    title: "Linkedin",
    rel: "me noopener",
  },
];

const SocialsFooter: React.FC<{ onHover?: (index: number | null) => void }> = ({
  onHover,
}) => (
  <nav className={styles.socialsNav} aria-label="socials de redes sociais">
    {socials.map((social, idx) => {
      const Icon = social.icon;
      return (
        <Tooltip key={social.id} label={social.title} position="bottom" showArrow={false}>
          <a
            href={social.href}
            rel={social.rel}
            target="_blank"
            className={styles.social}
            aria-label={social.alt}
            onMouseEnter={() => onHover && onHover(idx)}
            onMouseLeave={() => onHover && onHover(null)}
            draggable="false"
          >
            <Icon className={styles.socialIcon} aria-hidden="true" />
            <span className={styles.srOnly}>{social.alt}</span>
          </a>
        </Tooltip>
      );
    })}
  </nav>
);

export default SocialsFooter;
