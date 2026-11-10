import { useTranslation } from "react-i18next";
import styles from "./Work.module.css";

type WorkExperience = {
  period: string;
  company: string;
  role: string;
  items: string[];
};

function Work() {
  const { t } = useTranslation();
  const experiences = (t("work.experiences", {
    returnObjects: true,
  }) ?? []) as WorkExperience[];

  const shouldShowDivider = (experience: WorkExperience, index: number) => {
    const company = experience.company?.toUpperCase() ?? "";
    const nextCompany = experiences[index + 1]?.company?.toUpperCase() ?? "";

    if (index >= experiences.length - 1) return false;
    if (company.includes("VIRTUS") && nextCompany.includes("VIRTUS"))
      return false;

    return true;
  };

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t("work.title")}</h1>

        <section className={styles.timeline} aria-label={t("work.ariaLabel")}>
          {experiences.map((experience, index) => {
            const showDivider = shouldShowDivider(experience, index);

            return (
              <article
                key={`${experience.company}-${experience.period}`}
                className={`${styles.entry} ${showDivider ? styles.withDivider : ""}`}
              >
                <div className={styles.period}>{experience.period}</div>

                <div className={styles.content}>
                  <div className={styles.headerRow}>
                    <h2 className={styles.company}>{experience.company}</h2>
                    <span className={styles.role}>{experience.role}</span>
                  </div>

                  <ul className={styles.list}>
                    {experience.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default Work;
