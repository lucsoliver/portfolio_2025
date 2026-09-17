import { useEffect, useRef, useState } from "react";
import { Copy } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";

import { useTranslation } from "react-i18next";

import Tooltip from "../../Tooltip/Tooltip";
import styles from "./Contact.module.css";

const emailAddress = "lucasolv.dev@gmail.com";
const COPY_FEEDBACK_MS = 1500;

const contactMethods = [
  {
    href: "https://www.linkedin.com/in/lucas-oliveira-paula",
    icon: FaLinkedinIn,
    value: "LinkedIn",
    rel: "noopener noreferrer",
  },
];

function Contact() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const copyTimerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) {
        window.clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
    } catch {
      // ignora falha do clipboard e mantém o feedback visual
    }

    setCopied(true);

    if (copyTimerRef.current) {
      window.clearTimeout(copyTimerRef.current);
    }

    copyTimerRef.current = window.setTimeout(() => {
      setCopied(false);
    }, COPY_FEEDBACK_MS);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.subtitle}>{t("contact.subtitle")}</span>
        <h2 className={styles.title}>{t("contact.title")}</h2>
        <div className={styles.contactBar}>
          <div className={styles.contactItemWrap}>
            <Tooltip
              label={copied ? t("contact.emailCopied") : t("contact.copyEmail")}
              background={copied ? "#22c55e" : undefined}
              size="md"
              open={copied ? true : undefined}
            >
              <button
                type="button"
                className={`${styles.emailCopyButton} ${copied ? styles.emailCopyButtonActive : ""}`}
                onClick={handleCopyEmail}
                aria-label={`${t("contact.copyEmail")}: ${emailAddress}`}
              >
                <Copy
                  className={`${styles.icon} ${copied ? styles.iconActive : ""}`}
                  aria-hidden="true"
                />
              </button>
            </Tooltip>

            <a
              href={`mailto:${emailAddress}`}
              rel="nofollow"
              className={styles.contactItem}
              draggable="false"
            >
              <span className={`${styles.contactValue} desktopNavBar`}>
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
              className={`${styles.contactItem} ${styles.hiddenMobile}`}
              draggable="false"
            >
              <Icon className={styles.icon} aria-hidden="true" />

              <span className={`${styles.contactValue} desktopNavBar`}>
                {value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
