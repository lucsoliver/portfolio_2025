import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { useTranslation } from "react-i18next";
import {
  FaHtml5,
  FaCss3Alt,
  FaVuejs,
  FaReact,
  FaLaravel,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiWebpack,
  SiStyledcomponents,
  SiExpo,
  SiMui,
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiMysql,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

import styles from "./Skills.module.css";

const MOBILE_QUERY = "(max-width: 768px)";

type SkillGroup = {
  title: string;
  skills: string[];
};

const isMobileViewport = () =>
  typeof window !== "undefined" && window.matchMedia(MOBILE_QUERY).matches;

const iconMap: Record<string, ReactNode> = {
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
  mysql: <SiMysql size={40} color="#00758F" />,
  git: <FaGitAlt size={40} color="#F05639" />,
  github: <FaGithub size={40} color="#080808" />,
  figma: <FaFigma size={40} color="#fff" />,
  tailwindcss: <RiTailwindCssFill size={40} color="#08B7D3" />,
  webpack: <SiWebpack size={40} color="#93D6FB" />,
  styledcomponents: <SiStyledcomponents size={40} color="#F7E025" />,
};

const normalizeSkillKey = (skill: string) =>
  skill.toLowerCase().replace(/[^a-z0-9]/g, "");

const renderSkillIcon = (skill: string) => {
  const icon = iconMap[normalizeSkillKey(skill)] ?? skill;

  return <span className={styles.skillIcon}>{icon}</span>;
};

function Skills() {
  const { t } = useTranslation();
  const [page, setPage] = useState(0);
  const boardRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef(0);

  const groups = useMemo(() => {
    const skillGroups = t("skills.groups", {
      returnObjects: true,
    }) as SkillGroup[];

    if (!Array.isArray(skillGroups)) {
      return [{ title: "", skills: [] }];
    }

    const validGroups = skillGroups.filter(
      (group) =>
        group && Array.isArray(group.skills) && group.skills.length > 0,
    );

    return validGroups.length ? validGroups : [{ title: "", skills: [] }];
  }, [t]);

  const pageCount = groups.length;
  const currentPage = Math.min(page, pageCount - 1);
  pageRef.current = currentPage;

  const goToPage = useCallback(
    (next: number) => {
      setPage(Math.max(0, Math.min(pageCount - 1, next)));
    },
    [pageCount],
  );

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const update = () => {
      const mobile = isMobileViewport();
      const first = track.children[0] as HTMLElement | undefined;
      const active = track.children[currentPage] as HTMLElement | undefined;

      if (mobile) {
        viewport.style.height = "auto";

        if (!active) return;
        track.style.transform = "";

        const targetLeft = active.offsetLeft;
        const isNearTarget = Math.abs(viewport.scrollLeft - targetLeft) <= 4;

        if (!isNearTarget) {
          requestAnimationFrame(() => {
            viewport.scrollTo({
              left: targetLeft,
              behavior: "smooth",
            });
          });
        }
        return;
      }

      if (first) {
        viewport.style.height = `${first.offsetHeight}px`;
      }

      if (!active) return;

      viewport.scrollLeft = 0;
      track.style.transform = `translateY(-${active.offsetTop}px)`;
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(track);
    const media = window.matchMedia(MOBILE_QUERY);
    media.addEventListener("change", update);
    window.addEventListener("resize", update);

    return () => {
      observer.disconnect();
      media.removeEventListener("change", update);
      window.removeEventListener("resize", update);
    };
  }, [currentPage, pageCount]);

  useEffect(() => {
    const board = boardRef.current;
    if (!board || pageCount <= 1) return;

    let locked = false;
    let unlockTimer = 0;

    const onWheel = (event: WheelEvent) => {
      if (isMobileViewport()) return;
      if (Math.abs(event.deltaY) < 8) return;

      const atStart = pageRef.current <= 0;
      const atEnd = pageRef.current >= pageCount - 1;
      const goingDown = event.deltaY > 0;
      const goingUp = event.deltaY < 0;

      if ((goingDown && atEnd) || (goingUp && atStart)) return;

      event.preventDefault();
      if (locked) return;

      locked = true;
      goToPage(pageRef.current + (goingDown ? 1 : -1));
      unlockTimer = window.setTimeout(() => {
        locked = false;
      }, 450);
    };

    board.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      board.removeEventListener("wheel", onWheel);
      window.clearTimeout(unlockTimer);
    };
  }, [goToPage, pageCount]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || pageCount <= 1) return;

    const onScroll = () => {
      if (!isMobileViewport()) return;

      const width = viewport.clientWidth;
      if (!width) return;

      const next = Math.round(viewport.scrollLeft / width);
      const clamped = Math.max(0, Math.min(pageCount - 1, next));

      if (clamped !== pageRef.current) {
        goToPage(clamped);
      }
    };

    viewport.addEventListener("scroll", onScroll, { passive: true });
    return () => viewport.removeEventListener("scroll", onScroll);
  }, [goToPage, pageCount]);

  const handleKebabKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (
      event.key === "ArrowDown" ||
      event.key === "ArrowRight" ||
      event.key === "PageDown"
    ) {
      event.preventDefault();
      goToPage(currentPage + 1);
    }
    if (
      event.key === "ArrowUp" ||
      event.key === "ArrowLeft" ||
      event.key === "PageUp"
    ) {
      event.preventDefault();
      goToPage(currentPage - 1);
    }
    if (event.key === "Home") {
      event.preventDefault();
      goToPage(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      goToPage(pageCount - 1);
    }
  };

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <h2 className="title">
          <span className="stylizedTitle">{t("skills.title")} </span>
        </h2>
        <p className={styles.description}>{t("skills.description")} </p>
        <div className={styles.skillsBoard} ref={boardRef}>
          <div className={styles.viewport} ref={viewportRef}>
            <div className={styles.track} ref={trackRef}>
              {groups.map((group, pageIndex) => (
                <div
                  key={`${group.title}-${pageIndex}`}
                  className={styles.skillGroup}
                  aria-hidden={pageIndex !== currentPage}
                >
                  {group.title && (
                    <h3 className={styles.groupTitle}>{group.title}</h3>
                  )}
                  <div className={styles.skillsList}>
                    {group.skills.map((skill, index) => (
                      <span key={`${skill}-${index}`} className={styles.skills}>
                        {renderSkillIcon(skill)}
                        <p className={styles.skillLabel}>{skill}</p>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {pageCount > 1 && (
            <div
              className={styles.kebab}
              role="tablist"
              aria-label={t("skills.paginationLabel")}
              tabIndex={0}
              onKeyDown={handleKebabKeyDown}
            >
              {groups.map((_, pageIndex) => (
                <button
                  key={pageIndex}
                  type="button"
                  role="tab"
                  className={`${styles.kebabItem} ${
                    pageIndex === currentPage ? styles.kebabItemActive : ""
                  }`}
                  aria-selected={pageIndex === currentPage}
                  aria-label={t("skills.pageLabel", {
                    page: pageIndex + 1,
                    total: pageCount,
                  })}
                  onClick={() => goToPage(pageIndex)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Skills;
