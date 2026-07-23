import styles from "./CardBackground.module.css";

function CardBackground() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <svg
        className={styles.svg}
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="card-bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              stopColor="var(--base-color)"
              stopOpacity="0.08"
            />
            <stop
              offset="50%"
              stopColor="var(--base-color)"
              stopOpacity="0.03"
            />
            <stop
              offset="100%"
              stopColor="var(--base-color)"
              stopOpacity="0.1"
            />
          </linearGradient>
          <pattern
            id="card-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M40 0H0V40"
              fill="none"
              className={styles.gridLine}
              strokeWidth="0.5"
            />
          </pattern>
        </defs>

        <rect width="1440" height="900" className={styles.base} />
        <rect width="1440" height="900" fill="url(#card-bg-grad)" />
        <rect width="1440" height="900" fill="url(#card-grid)" opacity="0.6" />

        <circle
          cx="120"
          cy="800"
          r="180"
          className={styles.glow}
        />
        <circle
          cx="1320"
          cy="100"
          r="140"
          className={styles.glow}
        />

        <path
          d="M0 0 L80 0 L0 80 Z"
          className={styles.cornerAccent}
        />
        <path
          d="M1440 900 L1360 900 L1440 820 Z"
          className={styles.cornerAccent}
        />
      </svg>
    </div>
  );
}

export default CardBackground;
