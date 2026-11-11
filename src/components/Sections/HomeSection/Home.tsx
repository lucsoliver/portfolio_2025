import { useTranslation } from "react-i18next";
import Contact from "../../Contact/Contact";
import LinksBackground from "../../illustrations/LinksBackground";

import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

function scrollToSection(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className={styles.homeSection}
      aria-labelledby="home-heading"
    >
      <LinksBackground className={styles.background} />

      <div className={styles.homeContainer}>
        <div className={styles.homeContent}>
          <h1 id="home-heading" className={`${styles.homeTitle} stylizedName`}>
            {t("home.title")}
          </h1>

          <p className={styles.homeSubtitle}>{t("home.subtitle")}</p>

          <div className={styles.btnGroup}>
            <button
              className={styles.btnContact}
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("contact");
              }}
            >
              {t("home.contact")}
            </button>
          </div>

          <div className={styles.homeContact}>
            <Contact />
            <button
              type="button"
              onClick={() => navigate("/links")}
              className={styles.linksButton}
              draggable="false"
            >
              <span className={styles.animatePulse} aria-hidden="true" />
              {t("home.links")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
