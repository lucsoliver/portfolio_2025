import styles from "./CardCornerDetail.module.css";

interface CardCornerDetailProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: "sm" | "md";
}

function CardCornerDetail({
  position = "top-left",
  size = "md",
}: CardCornerDetailProps) {
  return (
    <svg
      className={`${styles.detail} ${styles[position]} ${styles[size]}`}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 44V4h40"
        className={styles.line}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="4" cy="4" r="3" className={styles.dot} />
      <path
        d="M20 4h8M4 20v8"
        className={styles.tick}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default CardCornerDetail;
