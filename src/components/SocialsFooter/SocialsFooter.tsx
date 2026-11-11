import React from "react";
import { Mail } from "lucide-react";

import { socialLinks } from "../../data/socials";
import Tooltip from "../Tooltip/Tooltip";
import styles from "./SocialsFooter.module.css";

const footerSocials = [
  {
    id: "email",
    href: "mailto:lucasolv.dev@gmail.com",
    icon: Mail,
    alt: "Email",
    title: "E-mail",
    rel: "nofollow",
  },
  ...socialLinks
    .filter((link) => typeof link.href === "string")
    .map((link) => ({
      id: link.label.toLowerCase().replace(/\s+/g, "-"),
      href: link.href as string,
      icon: link.icon,
      alt: link.label,
      title: link.label,
      rel: link.rel ?? "noopener noreferrer",
    })),
];

const SocialsFooter: React.FC<{ onHover?: (index: number | null) => void }> = ({
  onHover,
}) => (
  <nav className={styles.socialsNav} aria-label="socials de redes sociais">
    {footerSocials.map((social, idx) => {
      const Icon = social.icon;
      return (
        <Tooltip
          key={social.id}
          label={social.title}
          position="bottom"
          showArrow={false}
        >
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
