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
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState<"copy" | "copied">("copy");
  const copyTimerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) {
        window.clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

  const showHint = () => {
    if (copied) {
      return;
    }

    setMessage("copy");
    setOpen(true);
  };

  const hideHint = () => {
    if (copied) {
      return;
    }

    setOpen(false);
  };

  const handleCopyEmail = () => {
    void navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setMessage("copied");
    setOpen(true);

    if (copyTimerRef.current) {
      window.clearTimeout(copyTimerRef.current);
    }

    copyTimerRef.current = window.setTimeout(() => {
      setCopied(false);
      setOpen(false);
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
              label={
                message === "copied"
                  ? t("contact.emailCopied")
                  : t("contact.copyEmail")
              }
              color={message === "copied" ? "#22c55e" : undefined}
              visible={open}
            >
              <button
                type="button"
                className={`${styles.emailCopyButton} ${copied ? styles.emailCopyButtonActive : ""}`}
                onClick={handleCopyEmail}
                onMouseEnter={showHint}
                onMouseLeave={hideHint}
                onFocus={showHint}
                onBlur={hideHint}
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
        </div>
      </div>
    </section>
  );
}

export default Contact;
