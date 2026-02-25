import { useState } from "react";
import SocialsFooter from "./SocialsFooter";
import SocialsImage from "./SocialsImage";
import { useTranslation } from "react-i18next";
import styles from "../styles/Footer.module.css";

function Footer() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <SocialsImage hoveredIndex={hoveredIndex} />
      <div className={styles.footerContent}>
        <SocialsFooter onHover={setHoveredIndex} />
        <p className={styles.textCenter}>
          © {currentYear} <span className="stylizedName">Lucas Oliveira</span>.{" "}
          {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
