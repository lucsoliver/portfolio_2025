import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import styles from "./Contact.module.css";

const contacts = [
  {
    href: "https://github.com/lucsoliver",
    icon: LuGithub,
    labelKey: "GitHub",
    rel: "noopener noreferrer",
  },
  {
    href: "https://www.linkedin.com/in/lucas-oliveira-paula/",
    icon: FaLinkedinIn,
    labelKey: "LinkedIn",
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
            className={styles.contact}
            aria-label={label}
            draggable="false"
          >
            <Icon className={styles.contactIcon} aria-hidden="true" />
          </a>
        );
      })}
    </nav>
  );
}

export default Contact;
