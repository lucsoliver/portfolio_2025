import React,  { useState }  from 'react';
import LinksFooter from './LinksFooter';
import LinkImage from './LinkImage';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
   <footer className={styles.footer}>
    <LinkImage hoveredIndex={hoveredIndex} />
      <div className={styles.footerContent}>
       <LinksFooter onHover={setHoveredIndex} />
        <p className={styles.textCenter}>
          © {currentYear} <span className={styles.rainbowText}>Lucas Oliveira</span>. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;