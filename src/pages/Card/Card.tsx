import { useTranslation } from "react-i18next";
import { Mail, ExternalLink } from "lucide-react";
import CardBackground from "../../components/illustrations/CardBackground";
import CardCornerDetail from "../../components/illustrations/CardCornerDetail";
import SectionDivider from "../../components/illustrations/SectionDivider";
import SoftFooterShapes from "../../components/illustrations/SoftFooterShapes";
import { socialLinks } from "../../data/socials";
import styles from "./Card.module.css";

function CardHeroBg() {
  return (
    <svg
      className={styles.heroBg}
      viewBox="0 0 400 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="card-hero-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--base-color)" stopOpacity="0.2" />
          <stop
            offset="100%"
            stopColor="var(--base-color)"
            stopOpacity="0.05"
          />
        </linearGradient>
      </defs>
      <rect width="400" height="120" fill="url(#card-hero-grad)" rx="12" />
      <path
        d="M0 80 Q100 40 200 70 T400 60"
        className={styles.heroWave}
        strokeWidth="2"
      />
      <circle cx="350" cy="30" r="20" className={styles.heroCircle} />
      <circle cx="50" cy="90" r="12" className={styles.heroCircle} />
    </svg>
  );
}

function CardPage() {
  const { t } = useTranslation();
  const highlights = t("home.highlights", { returnObjects: true }) as string[];

  return (
    <div className={styles.page}>
      <CardBackground />

      <main className={styles.cardWrapper}>
        <article className={styles.card}>
          <CardCornerDetail position="top-left" />
          <CardCornerDetail position="top-right" />
          <CardCornerDetail position="bottom-left" />
          <CardCornerDetail position="bottom-right" />

          <div className={styles.hero}>
            <CardHeroBg />
            <img
              src="https://github.com/lucsoliver.png"
              alt="Lucas Oliveira"
              className={styles.avatar}
              draggable="false"
            />
          </div>

          <div className={styles.body}>
            <h1 className={`${styles.name} stylizedName`}>{t("card.title")}</h1>
            <p className={styles.subtitle}>{t("card.subtitle")}</p>

            <SectionDivider />

            <p className={styles.description}>{t("card.description")}</p>

            <div className={styles.present}>
              <h2 className={styles.presentTitle}>{t("card.present")}</h2>
              <p>{t("card.job")}</p>
              <p>{t("card.education")}</p>
            </div>

            <ul className={styles.highlights} aria-label="Technologies">
              {highlights.map((tech) => (
                <li key={tech} className={styles.highlightTag}>
                  {tech}
                </li>
              ))}
            </ul>
            <div className={styles.actions}>
              <a href="/" className={styles.primaryBtn} draggable="false">
                <ExternalLink size={16} aria-hidden="true" />
                {t("card.visitSite")}
              </a>
              <a
                href="mailto:lucasolv.dev@gmail.com"
                className={styles.secondaryBtn}
                draggable="false"
              >
                <Mail size={16} aria-hidden="true" />
                {t("card.contact")}
              </a>
            </div>

            <nav className={styles.socials} aria-label="Social links">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    title={link.label}
                    rel={link.rel}
                    target="_blank"
                    className={styles.socialLink}
                    aria-label={link.label}
                    draggable="false"
                  >
                    <Icon size={20} aria-hidden="true" />
                  </a>
                );
              })}
            </nav>
          </div>

          <SoftFooterShapes />
        </article>
      </main>
    </div>
  );
}

export default CardPage;
