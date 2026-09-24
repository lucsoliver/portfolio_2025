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

const PAGE_SIZE = 10;
const MOBILE_QUERY = "(max-width: 768px)";

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
  git: <FaGitAlt size={40} color="#F05639" />,
  github: <FaGithub size={40} color="#080808" />,
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

  const skills = t("skills.skillsList", { returnObjects: true }) as string[];

  const pages = useMemo(() => {
    const chunks: string[][] = [];
    for (let i = 0; i < skills.length; i += PAGE_SIZE) {
      chunks.push(skills.slice(i, i + PAGE_SIZE));
    }
    return chunks.length ? chunks : [[]];
  }, [skills]);

  const pageCount = pages.length;
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
      if (first) viewport.style.height = `${first.offsetHeight}px`;

      if (!active) return;

      if (mobile) {
        track.style.transform = "";
        if (Math.abs(viewport.scrollLeft - active.offsetLeft) > 4) {
          viewport.scrollTo({ left: active.offsetLeft, behavior: "smooth" });
        }
        return;
      }

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
  }, [currentPage, pageCount, skills.length]);

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
      goToPage(next);
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
              {pages.map((pageSkills, pageIndex) => (
                <div
                  key={pageIndex}
                  className={styles.skillsList}
                  aria-hidden={pageIndex !== currentPage}
                >
                  {pageSkills.map((skill, index) => (
                    <span key={`${skill}-${index}`} className={styles.skills}>
                      {renderSkillIcon(skill)}
                      <p className={styles.skillLabel}>{skill}</p>
                    </span>
                  ))}
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
              {pages.map((_, pageIndex) => (
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
