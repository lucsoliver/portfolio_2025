import { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Loader2, RotateCcw } from "lucide-react";
import { fetchPinnedRepos } from "../../../services/github";
import type { Repository } from "../../../services/github";
import SearchBar from "../../SearchBar/SearchBar";
import styles from "./Projects.module.css";

const getHostname = (url: string): string => {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
};

function Projects() {
  const { t } = useTranslation();
  const [pinnedRepos, setPinnedRepos] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filtra os repositórios
  const filteredRepos = pinnedRepos.filter((repo) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    const searchableText = [
      repo.name,
      repo.description || "",
      ...(repo.languages || []),
      ...(repo.topics || []),
    ]
      .join(" ")
      .toLowerCase();
    return searchableText.includes(query);
  });

  // Busca os repositórios
  const fetchReposWithRetry = useCallback(async (retries = 3) => {
    for (let i = 0; i < retries; i++) {
      try {
        const repos = await fetchPinnedRepos();
        setPinnedRepos(repos);
        return;
      } catch (e: unknown) {
        if (i === retries - 1) throw e;
        await new Promise((resolve) => setTimeout(resolve, 1000 * (i + 1)));
      }
    }
  }, []);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setError(null);
    fetchReposWithRetry()
      .catch((e: unknown) => {
        if (isMounted)
          setError(e instanceof Error ? e.message : "Erro desconhecido");
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, [fetchReposWithRetry]);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <h2 className="title">
          <span className="stylizedTitle">{t("projects.projects")}</span>
        </h2>

        {!isLoading && !error && (
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder={t("projects.searchPlaceholder")}
          />
        )}

        {isLoading && (
          <div className={styles.loaderWrapper}>
            <Loader2 className={styles.loaderIcon} />
            <span className={styles.loaderText}>{t("projects.loading")}</span>
          </div>
        )}

        {!isLoading && error && (
          <div className={`${styles.error} ${styles.animateFadeIn}`}>
            {error}
            <button
              type="button"
              onClick={() => fetchReposWithRetry()}
              className={styles.clearBtn}
            >
              {t("projects.tryAgain")}
            </button>
          </div>
        )}

        {!isLoading && !error && filteredRepos.length === 0 && (
          <div className={styles.noResults}>
            <span className={styles.emoji} role="img" aria-label="Emoji">
              😔
            </span>
            <p>
              {searchQuery ? t("projects.noResults") : t("projects.noProjects")}
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className={styles.clearBtn}
              >
                <RotateCcw className={styles.iconMd} />
                <span>{t("projects.clearSearch")}</span>
              </button>
            )}
          </div>
        )}

        {!isLoading && !error && filteredRepos.length > 0 && (
          <div className={styles.cardContainer}>
            {filteredRepos.map((repo, index) => (
              <a
                key={repo.url}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardLink}
                draggable="false"
              >
                <article
                  className={styles.card}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div>
                    <div className={styles.cardHeader}>
                      <div>
                        <h3 className={styles.cardTitle}>{repo.name}</h3>
                        <p className={styles.cardDesc}>{repo.description}</p>
                        {repo.homepage && (
                          <div>
                            <a
                              href={repo.homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.cardFooterLink}
                              draggable="false"
                            >
                              {getHostname(repo.homepage)}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={styles.cardTags}>
                      {repo.tags?.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className={styles.cardLangs}>
                      {repo.languages?.map((lang) => (
                        <span key={lang} className={styles.lang}>
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
