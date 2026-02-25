import { useState } from "react";
import { useTranslation } from "react-i18next";
import Contact from "./Contact";
import styles from "../styles/Home.module.css";

function Home() {
  const { t } = useTranslation();
  const [firstName] = useState("Lucas");
  const [lastName] = useState("Oliveira");

  return (
    <section id="home" className={styles.homeSection}>
      <div className={styles.homeContainer}>
        <div className={styles.homeFlex}>
          <h2 className={`${styles.homeTitle} stylizedName`}>
            {firstName} {lastName}
          </h2>
          <span className={styles.homeSubtitle}>{t("about.subtitle")}</span>
          <p className={styles.homeDescription}>{t("home.description")}</p>
          <div className={styles.homeContact}>
            <Contact />
            <a
              href="/links"
              target="_blank"
              className={styles.linksButton}
              draggable="false"
            >
              <div className={styles.animatePulse}></div>
              {t("home.links")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
