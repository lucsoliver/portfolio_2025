import { useTranslation } from "react-i18next";
import LinksBackground from "../../components/illustrations/LinksBackground";
import CardCornerDetail from "../../components/illustrations/CardCornerDetail";
import { socialLinks } from "../../data/socials";
import styles from "./Linkbio.module.css";

function Links() {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <LinksBackground />

      <main className={styles.linksSection}>
        <img
          src="https://github.com/lucsoliver.png"
          alt="Lucas Oliveira"
          className={styles.linkAvatar}
          draggable="false"
        />
        <h2 className={styles.linksTitle}>
          <span className="stylizedName">Lucas Oliveira</span>
        </h2>
        <span className={styles.linkDev}>{t("links.dev")}</span>
        <span className={styles.linkStack}>{t("links.stack")}</span>

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
                className={styles.projectLink}
                aria-label={project.label}
                draggable="false"
              >
                <Icon className={styles.projectIcon} aria-hidden="true" />
                <span className={styles.projectSpan}>{project.label}</span>
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
              <CardCornerDetail position="top-left" size="sm" />
              <CardCornerDetail position="top-right" size="sm" />
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
              <CardCornerDetail position="top-left" size="sm" />
              <CardCornerDetail position="top-right" size="sm" />
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
              <CardCornerDetail position="top-left" size="sm" />
              <CardCornerDetail position="top-right" size="sm" />
              <span className={styles.linkTitle}>{t("links.cven")}</span>
            </div>
          </a>
          <a href="/card" className={styles.linkItem} draggable="false">
            <div className={styles.linkBox}>
              <CardCornerDetail position="top-left" size="sm" />
              <CardCornerDetail position="top-right" size="sm" />
              <span className={styles.linkTitle}>{t("links.card")}</span>
            </div>
          </a>
          <a
            href="mailto:lucasolv.dev@gmail.com"
            rel="nofollow"
            className={styles.linkItem}
            draggable="false"
          >
            <div className={styles.linkBox}>
              <CardCornerDetail position="top-left" size="sm" />
              <CardCornerDetail position="top-right" size="sm" />
              <span className={styles.linkTitle}>{t("links.email")}</span>
            </div>
          </a>
        </div>
      </main>
    </div>
  );
}

export default Links;
