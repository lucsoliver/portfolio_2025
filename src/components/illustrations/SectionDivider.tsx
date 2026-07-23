import styles from "./SectionDivider.module.css";

function SectionDivider() {
  return (
    <svg
      className={styles.divider}
      viewBox="0 0 400 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M0 8h160M200 8h0M240 8h160"
        className={styles.line}
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="200" cy="8" r="4" className={styles.dot} />
      <path
        d="M196 8l4-3 4 3-4 3z"
        className={styles.diamond}
      />
    </svg>
  );
}

export default SectionDivider;
