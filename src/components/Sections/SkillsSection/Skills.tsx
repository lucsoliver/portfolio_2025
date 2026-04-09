import React from "react";
import { useTranslation } from "react-i18next";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiMui,
  SiExpo,
  SiTypescript,
  SiPhp,
  SiLaravel,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiWebpack,
  SiStyledcomponents,
} from "react-icons/si";

import styles from "./Skills.module.css";

const iconMap: Record<string, React.ReactNode> = {
  html5: <SiHtml5 size={40} color="#E34F26" />,
  css3: <SiCss3 size={40} color="#1572B6" />,
  javascript: <SiJavascript size={40} color="#F7DF1E" />,
  typescript: <SiTypescript size={40} color="#377CC8" />,
  react: <SiReact size={40} color="#61DAFB" />,
  materialui: <SiMui size={40} color="#007FFF" />,
  reactnative: <SiReact size={40} color="#61DAFB" />,
  expo: <SiExpo size={40} color="#000000" />,
  php: <SiPhp size={40} color="#777BB4" />,
  laravel: <SiLaravel size={40} color="#FF2D20" />,
  git: <SiGit size={40} color="#F05032" />,
  github: <SiGithub size={40} color="#181717" />,
  tailwindcss: <SiTailwindcss size={40} color="#06B6D4" />,
  webpack: <SiWebpack size={40} color="#8DD6F9" />,
  styledcomponents: <SiStyledcomponents size={40} color="#FF00FF" />,
};

function Skills() {
  const { t } = useTranslation();

  const skills = t("skills.skillsList", { returnObjects: true }) as string[];

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <h2 className="title">
          <span className="stylizedTitle">{t("skills.title")} </span>
        </h2>
        <p className={styles.description}>{t("skills.description")} </p>
        <div className={styles.skillsList}>
          {skills.map((skill, index) => (
            <span key={index} className={styles.skills}>
              {iconMap[skill.toLowerCase()] ?? skill}
              <p className={styles.skillLabel}>{skill}</p>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
