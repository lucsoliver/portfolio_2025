import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaHtml5,
  FaCss3Alt,
  FaVuejs,
  FaReact,
  FaLaravel,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiWebpack,
  SiStyledcomponents,
  SiExpo,
  SiMui,
  SiPhp,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

import styles from "./Skills.module.css";

const iconMap: Record<string, React.ReactNode> = {
  html5: <FaHtml5 size={40} color="#E5532D" />,
  css3: <FaCss3Alt size={40} color="#1572B6" />,
  javascript: <SiJavascript size={40} color="#F7E025" />,
  typescript: <SiTypescript size={40} color="#377CC8" />,
  vuejs: <FaVuejs size={40} color="#42B883" />,
  react: <FaReact size={40} color="#66DBFB" />,
  materialui: <SiMui size={40} color="#0883FF" />,
  reactnative: <FaReact size={40} color="#2DDAFD" />,
  expo: <SiExpo size={40} color="#080827" />,
  php: <SiPhp size={40} color="#7B7FB5" />,
  laravel: <FaLaravel size={40} color="#FF3427" />,
  git: <FaGitAlt size={40} color="#F05639" />,
  github: <FaGithub size={40} color="#080808" />,
  tailwindcss: <RiTailwindCssFill size={40} color="#08B7D3" />,
  webpack: <SiWebpack size={40} color="#93D6FB" />,
  styledcomponents: <SiStyledcomponents size={40} color="#F7E025" />,
};

const normalizeSkillKey = (skill: string) =>
  skill.toLowerCase().replace(/[^a-z0-9]/g, "");

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
              {iconMap[normalizeSkillKey(skill)] ?? skill}
              <p className={styles.skillLabel}>{skill}</p>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
