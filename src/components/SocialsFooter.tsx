import React from "react";
import { Mail, Twitter, Github, Linkedin } from "lucide-react";
import styles from "../styles/SocialsFooter.module.css";

interface Social {
  href: string;
  icon: React.ElementType;
  alt: string;
  title: string;
  rel: string;
}
const socials: Social[] = [
  {
    href: "mailto:lucasop888@yahoo.com",
    icon: Mail,
    alt: "Email",
    title: "E-mail",
    rel: "nofollow",
  },
  {
    href: "https://github.com/lucsoliver",
    icon: Github,
    alt: "GitHub",
    title: "GitHub",
    rel: "me noopener",
  },
  {
    href: "https://twitter.com/lyunnee",
    icon: Twitter,
    alt: "Twitter",
    title: "Twitter",
    rel: "me noopener",
  },
  {
    href: "https://www.linkedin.com/in/lucas-oliveira-paula/",
    icon: Linkedin,
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
        <a
          key={social.href}
          href={social.href}
          title={social.title}
          rel={social.rel}
          target="_blank"
          className={styles.social}
          aria-label={social.alt}
          onMouseEnter={() => onHover && onHover(idx)}
          onMouseLeave={() => onHover && onHover(null)}
        >
          <Icon className={styles.socialIcon} aria-hidden="true" />
          <span className={styles.srOnly}>{social.alt}</span>
        </a>
      );
    })}
  </nav>
);

export default SocialsFooter;
