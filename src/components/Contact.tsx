import React from "react";
import { Mail, Twitter } from "lucide-react";
import styles from "../styles/Contact.module.css";

interface Contact {
  href: string;
  icon: React.ElementType;
  alt: string;
  title: string;
  rel: string;
}
const contacts: Contact[] = [
  {
    href: "mailto:lucasop888@yahoo.com",
    icon: Mail,
    alt: "Email",
    title: "E-mail",
    rel: "nofollow",
  },
  {
    href: "#",
    icon: Twitter,
    alt: "CV",
    title: "CV",
    rel: "me noopener",
  },
];

const Contact: React.FC<{ onHover?: (index: number | null) => void }> = ({
  onHover,
}) => (
  <nav className={styles.contactNav} aria-label="Contato">
    {contacts.map((contact, idx) => {
      const Icon = contact.icon;
      return (
        <a
          key={contact.href}
          href={contact.href}
          title={contact.title}
          rel={contact.rel}
          target="_blank"
          className={`${styles.contact} ${styles.contactUnderline}`}
          aria-label={contact.alt}
          onMouseEnter={() => onHover && onHover(idx)}
          onMouseLeave={() => onHover && onHover(null)}
        >
          <Icon className={styles.contactIcon} aria-hidden="true" />
          <span className={styles.srOnly}>{contact.alt}</span>
        </a>
      );
    })}
  </nav>
);

export default Contact;
