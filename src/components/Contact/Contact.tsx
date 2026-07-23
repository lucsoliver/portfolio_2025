import { Mail, Github, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import styles from "./Contact.module.css";

const contacts = [
  {
    href: "mailto:lucasolv.dev@gmail.com",
    icon: Mail,
    labelKey: "home.socials.email" as const,
    rel: "nofollow",
  },
  {
    href: "https://github.com/lucsoliver",
    icon: Github,
    labelKey: "home.socials.github" as const,
    rel: "noopener noreferrer",
  },
  {
    href: "https://www.linkedin.com/in/lucas-oliveira-paula/",
    icon: Linkedin,
    labelKey: "home.socials.linkedin" as const,
    rel: "noopener noreferrer",
  },
];

function Contact() {
  const { t } = useTranslation();

  return (
    <nav className={styles.contactNav} aria-label="Social links">
      {contacts.map((contact) => {
        const Icon = contact.icon;
        const label = t(contact.labelKey);
        return (
          <a
            key={contact.href}
            href={contact.href}
            title={label}
            rel={contact.rel}
            target="_blank"
            className={`${styles.contact} ${styles.contactUnderline}`}
            aria-label={label}
            draggable="false"
          >
            <Icon className={styles.contactIcon} aria-hidden="true" />
            <span className={styles.srOnly}>{label}</span>
          </a>
        );
      })}
    </nav>
  );
}

export default Contact;
