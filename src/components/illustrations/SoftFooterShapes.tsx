import styles from "./SoftFooterShapes.module.css";

function SoftFooterShapes() {
  return (
    <svg
      className={styles.shapes}
      viewBox="0 0 400 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M0 40 Q100 10 200 35 T400 30 V60 H0 Z"
        className={styles.wave1}
      />
      <path
        d="M0 50 Q120 25 240 45 T400 40 V60 H0 Z"
        className={styles.wave2}
      />
      <circle cx="60" cy="20" r="6" className={styles.bubble} />
      <circle cx="340" cy="15" r="4" className={styles.bubble} />
      <circle cx="200" cy="10" r="3" className={styles.bubble} />
    </svg>
  );
}

export default SoftFooterShapes;
