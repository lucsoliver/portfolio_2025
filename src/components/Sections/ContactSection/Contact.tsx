import { Mail, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

import styles from "./Contact.module.css";

const contactMethods = [
  {
    href: "mailto:lucasolv.dev@gmail.com",
    icon: Mail,
    value: "lucasolv.dev@gmail.com",
    rel: "nofollow",
  },
  {
    href: "https://www.linkedin.com/in/lucas-oliveira-paula/",
    icon: Linkedin,
    labelKey: "home.socials.linkedin" as const,
    value: "LinkedIn",
    rel: "noopener noreferrer",
  },
];

function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.subtitle}>{t("contact.subtitle")}</span>
        <h2 className={styles.title}>{t("contact.title")}</h2>
        <div className={styles.contactBar}>
          {contactMethods.map(({ href, icon: Icon, value, rel }) => (
            <a
              key={href}
              href={href}
              rel={rel}
              target="_blank"
              className={styles.contactItem}
              draggable="false"
            >
              <span className={styles.iconWrapper}>
                <Icon className={styles.icon} aria-hidden="true" />
              </span>
              <span className={styles.contactValue}>{value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
