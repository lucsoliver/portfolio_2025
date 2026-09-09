import { useTranslation } from "react-i18next";
import LinksBackground from "../../components/illustrations/LinksBackground";
import { socialLinks } from "../../data/socials";
import styles from "./Linkbio.module.css";

function Links() {
  const { t } = useTranslation();

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
            return (
              <a
                key={project.href}
                href={project.href}
                title={project.label}
                rel={project.rel}
                target="_blank"
                className={styles.linkIcon}
                aria-label={project.label}
                draggable="false"
              >
                <Icon className={styles.icon} aria-hidden="true" />
                <span className={styles.label}>{project.label}</span>
              </a>
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
