import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import Tooltip from "../Tooltip/Tooltip";
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

function Contact({ className }: { className?: string }) {
  const { t } = useTranslation();

  return (
    <nav
      className={[styles.contactNav, className].filter(Boolean).join(" ")}
      aria-label="Social links"
    >
      {contacts.map((contact) => {
        const Icon = contact.icon;
        const label = t(contact.labelKey);

        return (
          <Tooltip
            key={contact.href}
            label={label}
            position="left"
            showArrow={false}
          >
            <a
              href={contact.href}
              rel={contact.rel}
              target="_blank"
              className={styles.contact}
              aria-label={label}
              draggable="false"
            >
              <Icon className={styles.contactIcon} aria-hidden="true" />
            </a>
          </Tooltip>
        );
      })}
    </nav>
  );
}

export default Contact;
