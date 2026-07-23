import { Mail, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

import styles from "./Contact.module.css";

const contactMethods = [
  {
    href: "mailto:lucasolv.dev@gmail.com",
    icon: Mail,
    labelKey: "home.socials.email" as const,
    value: "lucasolv.dev@gmail.com",
    rel: "nofollow",
  },
  {
    href: "https://www.linkedin.com/in/lucas-oliveira-paula/",
    icon: Linkedin,
    labelKey: "home.socials.linkedin" as const,
    value: "linkedin.com/in/lucas-oliveira-paula",
    rel: "noopener noreferrer",
  },
];

function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <h2 className="title">
          <span className="stylizedTitle">{t("contact.title")}</span>
        </h2>
        <p className={styles.overline}>{t("contact.description")}</p>

        <div className={styles.contactGroup}>
          {contactMethods.map(({ href, icon: Icon, labelKey, value, rel }) => (
            <a
              key={href}
              href={href}
              rel={rel}
              target="_blank"
              className={styles.contactCard}
              draggable="false"
            >
              <span className={styles.iconWrapper}>
                <Icon className={styles.icon} aria-hidden="true" />
              </span>
              <div className={styles.textGroup}>
                <span className={styles.contactLabel}>{t(labelKey)}</span>
                <span className={styles.contactValue}>{value}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
