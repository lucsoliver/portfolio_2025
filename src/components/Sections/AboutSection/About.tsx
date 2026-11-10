import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./About.module.css";

const cvPdf = "/docs/CV_Lucas_Oliveira_Novembro2026.pdf";
const cvPdfEN = "/docs/CV_Lucas_Oliveira_October2026.pdf";

function About() {
  const { t } = useTranslation();
  const [firstName] = useState("Lucas");
  const [lastName] = useState("Oliveira");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setIsModalOpen(false);
    }
    if (isModalOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isModalOpen]);

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <h2 className="title">
          <span className="stylizedTitle">{t("about.about")}</span>
        </h2>
        <div className={styles.aboutFlex}>
          <div className={styles.aboutText}>
            <h2 className={`${styles.aboutTitle} stylizedName`}>
              {firstName} {lastName}
            </h2>
            <span className={styles.aboutSubtitle}>{t("about.subtitle")}</span>
            <p className={styles.aboutDescription}>{t("about.description")}</p>
            <div className={styles.aboutPresent}>
              <h2>{t("about.past")}</h2>
              <span>{t("about.job")}</span>
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
                width={256}
                height={256}
                loading="lazy"
                decoding="async"
                draggable="false"
              />
            </div>
            <button
              type="button"
              className={styles.aboutCV}
              onClick={() => setIsModalOpen(true)}
              aria-haspopup="dialog"
            >
              {t("about.curriculum")}
            </button>

            {isModalOpen && (
              <div
                className={styles.modalOverlay}
                onClick={() => setIsModalOpen(false)}
                aria-hidden={false}
              >
                <div
                  className={styles.modalContent}
                  role="dialog"
                  aria-modal="true"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    className={styles.modalBtnClose}
                    onClick={() => setIsModalOpen(false)}
                    aria-label={t("about.close")}
                  >
                    {t("about.close")}
                  </button>
                  <h3>{t("about.cvTitle")}</h3>
                  <div className={styles.modalButtons}>
                    <a
                      className={styles.modalButton}
                      href={cvPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      draggable="false"
                    >
                      {t("about.cvPTBR")}
                    </a>
                    <a
                      className={styles.modalButton}
                      href={cvPdfEN}
                      target="_blank"
                      rel="noopener noreferrer"
                      draggable="false"
                    >
                      {t("about.cvEN")}
                    </a>
                  </div>
                </div>
              </div>
            )}

            <div className={styles.aboutInterests}>
              <h3>{t("about.interests")}</h3>
              <div className={styles.interestsGrid}>
                <div className={`${styles.interestsCard} ${styles.techCard}`}>
                  {t("about.interestsDescription.tech")}
                </div>
                <div className={`${styles.interestsCard} ${styles.iaCard}`}>
                  {t("about.interestsDescription.ia")}
                </div>
                <div className={`${styles.interestsCard} ${styles.innoCard}`}>
                  {t("about.interestsDescription.leitura")}
                </div>
                <div className={`${styles.interestsCard} ${styles.gamesCard}`}>
                  {t("about.interestsDescription.games")}
                </div>
                <div className={`${styles.interestsCard} ${styles.filmCard}`}>
                  {t("about.interestsDescription.film")}
                </div>
                <div className={`${styles.interestsCard} ${styles.animeCard}`}>
                  {t("about.interestsDescription.anime")}
                </div>
                <div className={`${styles.interestsCard} ${styles.musicCard}`}>
                  {t("about.interestsDescription.music")}
                </div>
                <div className={`${styles.interestsCard} ${styles.doramaCard}`}>
                  {t("about.interestsDescription.dorama")}
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
