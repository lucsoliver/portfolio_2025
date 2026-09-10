import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import LinksBackground from "../../components/illustrations/LinksBackground";
import Tooltip from "../../components/Tooltip/Tooltip";
import { socialLinks } from "../../data/socials";
import styles from "./Linkbio.module.css";

const COPY_FEEDBACK_MS = 1500;

function Links() {
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

  const handleCopyDiscordName = async (username: string) => {
    try {
      await navigator.clipboard.writeText(username);
    } catch {
      // ignora falha do clipboard e mantém o feedback visual
    }

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
    <div className={styles.page}>
      <LinksBackground />

      <main className={styles.linkSection}>
        <img
          src="https://github.com/lucsoliver.png"
          alt="Lucas Oliveira"
          className={styles.avatar}
          draggable="false"
        />
        <h2 className={styles.titleName}>
          <span className="stylizedName">Lucas Oliveira</span>
        </h2>
        <span className={styles.dev}>{t("links.dev")}</span>
        <span className={styles.stack}>{t("links.stack")}</span>

        <div className={styles.socialsContainer}>
          {socialLinks.map((project) => {
            const Icon = project.icon;
            const socialContent = (
              <>
                <Icon className={styles.icon} aria-hidden="true" />
                <span className={styles.label}>{project.label}</span>
              </>
            );

            if (project.copyText) {
              return (
                <Tooltip
                  key={project.label}
                  label={message === "copied" ? "Copiado!" : project.label}
                  color={message === "copied" ? "#22c55e" : undefined}
                  position="bottom"
                  showArrow={false}
                  visible={open}
                >
                  <button
                    type="button"
                    className={styles.linkIconButton}
                    aria-label={project.label}
                    draggable="false"
                    onClick={() => handleCopyDiscordName(project.copyText!)}
                    onMouseEnter={showHint}
                    onMouseLeave={hideHint}
                    onFocus={showHint}
                    onBlur={hideHint}
                  >
                    {socialContent}
                  </button>
                </Tooltip>
              );
            }

            return (
              <Tooltip
                key={project.href}
                label={project.label}
                position="bottom"
                showArrow={false}
              >
                <a
                  href={project.href}
                  rel={project.rel}
                  target="_blank"
                  className={styles.linkIcon}
                  aria-label={project.label}
                  draggable="false"
                >
                  {socialContent}
                </a>
              </Tooltip>
            );
          })}
        </div>

        <div className={styles.linksList}>
          <a
            href="/"
            rel="me noopener"
            className={styles.linkItem}
            draggable="false"
          >
            <div className={styles.linkBox}>
              <span className={styles.linkTitle}>{t("links.website")}</span>
            </div>
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="me noopener"
            className={styles.linkItem}
            draggable="false"
          >
            <div className={styles.linkBox}>
              <span className={styles.linkTitle}>{t("links.cvpt")}</span>
            </div>
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="me noopener"
            className={styles.linkItem}
            draggable="false"
          >
            <div className={styles.linkBox}>
              <span className={styles.linkTitle}>{t("links.cven")}</span>
            </div>
          </a>
          <a
            href="mailto:lucasolv.dev@gmail.com"
            rel="nofollow"
            className={styles.linkItem}
            draggable="false"
          >
            <div className={styles.linkBox}>
              <span className={styles.linkTitle}>{t("links.email")}</span>
            </div>
          </a>
        </div>
      </main>
    </div>
  );
}

export default Links;
