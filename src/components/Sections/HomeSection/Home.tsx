import { useTranslation } from "react-i18next";
import Contact from "../../Contact/Contact";
import LinksBackground from "../../illustrations/LinksBackground";

import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

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

          <div className={styles.homeActions}>
            <Contact className={styles.mobileSocialLinks} />

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

      <div className={styles.socialRail} aria-label="Social links">
        <div className={styles.socialRailLine} aria-hidden="true" />
        <Contact className={styles.socialLinks} />
        <div className={styles.socialRailLine} aria-hidden="true" />
      </div>
    </section>
  );
}

export default Home;
