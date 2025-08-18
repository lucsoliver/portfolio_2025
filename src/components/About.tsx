import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Links from "./Links";
import styles from "../styles/About.module.css";

const About: React.FC = () => {
  const { t } = useTranslation();
  const [firstName] = useState("Lucas");
  const [lastName] = useState("Oliveira");

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutFlex}>
          <div className={styles.aboutText}>
            <h2 className={styles.aboutTitle}>
              <span className={styles.stylizedName}>
                {firstName} {lastName}
              </span>
            </h2>
            <p className={styles.aboutDescription}>{t("about.description")}</p>
            <Links />
          </div>
          <div className={styles.aboutAvatar}>
            <img
              src="https://github.com/lucsoliver.png"
              alt="Lucas Oliveira"
              className={styles.aboutImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
