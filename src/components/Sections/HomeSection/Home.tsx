import { useTranslation } from "react-i18next";
import { ArrowDown, FileDown } from "lucide-react";
import Contact from "../../Contact/Contact";
import styles from "./Home.module.css";

function scrollToSection(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Home() {
  const { t } = useTranslation();
  const highlights = t("home.highlights", { returnObjects: true }) as string[];

  return (
    <section
      id="home"
      className={styles.homeSection}
      aria-labelledby="home-heading"
    >
      <div className={styles.homeContainer}>
        <div className={styles.homeGrid}>
          <div className={styles.homeContent}>
            <h1
              id="home-heading"
              className={`${styles.homeTitle} stylizedName`}
            >
              {t("home.title")}
            </h1>

            <p className={styles.homeSubtitle}>{t("home.subtitle")}</p>

            <p className={styles.homeDescription}>{t("home.description")}</p>

            <ul className={styles.highlights} aria-label="Main technologies">
              {highlights.map((tech) => (
                <li key={tech} className={styles.highlightTag}>
                  {tech}
                </li>
              ))}
            </ul>
            <div className={styles.ctaGroup}>
              <a
                href="/cv.pdf"
                className={styles.ctaSecondary}
                target="_blank"
                rel="noopener noreferrer"
                draggable="false"
              >
                <FileDown size={18} aria-hidden="true" />
                {t("home.ctaCv")}
              </a>
            </div>

            <div className={styles.homeContact}>
              <Contact />
              <a href="/links" className={styles.linksButton} draggable="false">
                <span className={styles.animatePulse} aria-hidden="true" />
                {t("home.links")}
              </a>
            </div>
          </div>
        </div>

        <button
          type="button"
          className={styles.scrollHint}
          onClick={() => scrollToSection("about")}
          aria-label={t("home.ctaAbout")}
        >
          <ArrowDown size={24} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}

export default Home;
