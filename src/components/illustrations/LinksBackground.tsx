import styles from "./LinksBackground.module.css";

function LinksBackground() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <svg
        className={styles.svg}
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="links-dots"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" className={styles.dot} />
          </pattern>
        </defs>

        <rect width="1440" height="900" className={styles.base} />
        <rect width="1440" height="900" fill="url(#links-dots)" opacity="0.5" />
      </svg>
    </div>
  );
}

export default LinksBackground;
