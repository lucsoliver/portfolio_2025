import { useState } from "react";
import { Copy } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";

import { useTranslation } from "react-i18next";

import styles from "./Contact.module.css";

const emailAddress = "lucasolv.dev@gmail.com";

const contactMethods = [
  {
    href: "https://www.linkedin.com/in/lucas-oliveira-paula",
    icon: FaLinkedinIn,
    labelKey: "home.socials.linkedin" as const,
    value: "LinkedIn",
    rel: "noopener noreferrer",
  },
];

function Contact() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
    } catch {
      // no-op
    } finally {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.subtitle}>{t("contact.subtitle")}</span>
        <h2 className={styles.title}>{t("contact.title")}</h2>
        <div className={styles.contactBar}>
          <div className={styles.contactItemWrap}>
            <button
              type="button"
              className={`${styles.emailCopyButton} ${copied ? styles.emailCopyButtonActive : ""}`}
              onClick={handleCopyEmail}
              aria-label={`${t("contact.copyEmail")}: ${emailAddress}`}
              title={t("contact.copyEmail")}
            >
              <Copy
                className={`${styles.icon} ${copied ? styles.iconActive : ""}`}
                aria-hidden="true"
              />
            </button>

            <a
              href={`mailto:${emailAddress}`}
              rel="nofollow"
              className={styles.contactItem}
              draggable="false"
            >
              <span className={`${styles.contactValue} desktopLink`}>
                {emailAddress}
              </span>
            </a>
          </div>

          {contactMethods.map(({ href, icon: Icon, value, rel }) => (
            <a
              key={href}
              href={href}
              rel={rel}
              target="_blank"
              className={styles.contactItem}
              draggable="false"
            >
              <Icon className={styles.icon} aria-hidden="true" />

              <span className={`${styles.contactValue} desktopLink`}>
                {value}
              </span>
            </a>
          ))}

          {copied && (
            <span className={styles.copyToast} role="status" aria-live="polite">
              {t("contact.emailCopied")}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
