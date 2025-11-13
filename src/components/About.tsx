import { useState } from "react";
import { useTranslation } from "react-i18next";
import Contact from "./Contact";
import styles from "../styles/About.module.css";

function About() {
  const { t } = useTranslation();
  const [firstName] = useState("Lucas");
  const [lastName] = useState("Oliveira");

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutFlex}>
          <div className={styles.aboutText}>
            <h2 className={`${styles.aboutTitle} ${styles.stylizedName}`}>
              {firstName} {lastName}
            </h2>
            <span className={styles.aboutSubtitle}>{t("about.subtitle")}</span>
            <p className={styles.aboutDescription}>{t("about.description")}</p>
            <div className={styles.aboutPresent}>
              <h2>{t("about.present")}</h2>
              <span>{t("about.pos")}</span>
            </div>
            {/* <div className={styles.aboutContact}>
              <Contact />
              <a href="/links" target="_blank" className={styles.linksButton}>
                <div className={styles.animatePulse}></div>
                {t("about.links")}
              </a>
            </div> */}
          </div>
          <div className={styles.aboutSide}>
            <div className={styles.aboutAvatar}>
              <img
                src="https://github.com/lucsoliver.png"
                alt="Lucas Oliveira"
                className={styles.aboutImg}
              />
            </div>
            <button>Ver CV</button>
            <div className={styles.aboutInterests}>
              <h3>Interesses</h3>
              <div className={styles.interestsGrid}>
                <div
                  className={`${styles.interestsCard} ${styles.techCard}`}
                  title="Tecnologia"
                >
                  Tecnologia
                </div>
                <div
                  className={`${styles.interestsCard} ${styles.iaCard}`}
                  title="Inteligência Artificial"
                >
                  Inteligência Artificial
                </div>
                <div
                  className={`${styles.interestsCard} ${styles.gamesCard}`}
                  title="Games"
                >
                  Games
                </div>
                <div
                  className={`${styles.interestsCard} ${styles.innoCard}`}
                  title="Inovação"
                >
                  Inovação
                </div>
                <div
                  className={`${styles.interestsCard} ${styles.musicCard}`}
                  title="Música"
                >
                  Música
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
