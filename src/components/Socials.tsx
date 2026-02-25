import React from "react";
import {
  Github,
  Mail,
  createLucideIcon,
  Linkedin,
  Instagram,
} from "lucide-react";
import styles from "../styles/Socials.module.css";

interface Social {
  href: string;
  icon: React.ElementType;
  alt: string;
  title: string;
  rel: string;
}

const XIcon = createLucideIcon("X", [
  [
    "path",
    {
      d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
      stroke: "none",
      fill: "currentColor",
    },
  ],
]);

const socials: Social[] = [
  {
    href: "https://github.com/lucsoliver",
    icon: Github,
    alt: "GitHub",
    title: "GitHub",
    rel: "me noopener",
  },
  {
    href: "mailto:lucasop888@yahoo.com",
    icon: Mail,
    alt: "Email",
    title: "E-mail",
    rel: "nofollow",
  },
  {
    href: "https://x.com/lyunekou",
    icon: XIcon,
    alt: "Twitter",
    title: "Twitter",
    rel: "me noopener",
  },
  {
    href: "https://www.linkedin.com/in/lucas-oliveira-paula/",
    icon: Linkedin,
    alt: "LinkedIn",
    title: "LinkedIn",
    rel: "me noopener",
  },
  {
    href: "https://www.instagram.com/lucasolvp",
    icon: Instagram,
    alt: "Instagram",
    title: "Instagram",
    rel: "me noopener",
  },
];

const Socials: React.FC<{ onHover?: (index: number | null) => void }> = ({
  onHover,
}) => (
  <nav className={styles.socialsNav} aria-label="Links de redes sociais">
    {socials.map((social, idx) => {
      const Icon = social.icon;
      return (
        <a
          key={social.href}
          href={social.href}
          title={social.title}
          rel={social.rel}
          target="_blank"
          className={`${styles.social} ${styles.socialUnderline}`}
          aria-label={social.alt}
          onMouseEnter={() => onHover && onHover(idx)}
          onMouseLeave={() => onHover && onHover(null)}
          draggable="false"
        >
          <Icon className={styles.socialIcon} aria-hidden="true" />
          <span className={styles.srOnly}>{social.alt}</span>
        </a>
      );
    })}
  </nav>
);

export default Socials;
