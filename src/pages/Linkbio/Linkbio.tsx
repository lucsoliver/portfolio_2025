import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Github, createLucideIcon, Linkedin, Instagram } from "lucide-react";
import styles from "./Linkbio.module.css";

interface Project {
  href: string;
  icon: React.ElementType;
  alt: string;
  title: string;
  rel: string;
}

const XIcon = createLucideIcon("X", [
  [
    "path",
    {
      d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
      stroke: "none",
      fill: "currentColor",
    },
  ],
]);

const projects: Project[] = [
  {
    href: "https://github.com/lucsoliver",
    icon: Github,
    alt: "Github",
    title: "Github",
    rel: "nofollow",
  },
  {
    href: "https://x.com/lyunekou",
    icon: XIcon,
    alt: "Twitter",
    title: "Twitter",
    rel: "me noopener",
  },
  {
    href: "https://www.linkedin.com/in/lucas-oliveira-paula",
    icon: Linkedin,
    alt: "Linkedin",
    title: "Linkedin",
    rel: "me noopener",
  },
  {
    href: "https://www.instagram.com/lucasolvp",
    icon: Instagram,
    alt: "Instagram",
    title: "Instagram",
    rel: "me noopener",
  },
];

function Links() {
  const { t } = useTranslation();
  const [firstName] = useState("Lucas");
  const [lastName] = useState("Oliveira");

  return (
    <main className={styles.linksSection}>
      <img
        src="https://github.com/lucsoliver.png"
        alt="Lucas Oliveira"
        className={styles.linkAvatar}
        draggable="false"
      />
      <h2 className={styles.linksTitle}>
        <span className="stylizedName">
          {firstName} {lastName}
        </span>
      </h2>
      <span className={styles.linkDev}> {t("links.dev")}</span>
      <span className={styles.linkStack}>{t("links.stack")}</span>
      <div className={styles.socialsContainer}>
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <a
              key={project.href}
              href={project.href}
              title={project.title}
              rel={project.rel}
              target="_blank"
              className={styles.projectLink}
              aria-label={project.alt}
              draggable="false"
            >
              <Icon className={styles.projectIcon} aria-hidden="true" />
              <span className={styles.projectSpan}>{project.alt}</span>
            </a>
          );
        })}
      </div>
      <div className={styles.linksList}>
        <a
          href="#"
          target="_blank"
          rel="me noopener"
          className={styles.linkItem}
          draggable="false"
        >
          <div className={styles.linkBox}>
            <span className={styles.linkTitle}>{t("links.website")}</span>
          </div>
        </a>
        <a
          href="https://github.com/lucsoliver/clima-tempo"
          target="_blank"
          rel="me noopener"
          className={styles.linkItem}
          draggable="false"
        >
          <div className={styles.linkBox}>
            <span className={styles.linkTitle}>{t("links.climatempo")}</span>
          </div>
        </a>
        <a
          href="#"
          target="_blank"
          rel="me noopener"
          className={styles.linkItem}
          draggable="false"
        >
          <div className={styles.linkBox}>
            <span className={styles.linkTitle}>{t("links.cvpt")}</span>
          </div>
        </a>
        <a
          href="#"
          target="_blank"
          rel="me noopener"
          className={styles.linkItem}
          draggable="false"
        >
          <div className={styles.linkBox}>
            <span className={styles.linkTitle}>{t("links.cven")}</span>
          </div>
        </a>
        <a
          href="mailto:lucasop888@yahoo.com"
          target="_blank"
          rel="nofollow"
          className={styles.linkItem}
          draggable="false"
        >
          <div className={styles.linkBox}>
            <span className={styles.linkTitle}>{t("links.email")}</span>
          </div>
        </a>
      </div>
    </main>
  );
}

export default Links;
