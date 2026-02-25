import React from "react";
import styles from "../styles/SocialsFooter.module.css";

const images = [
  "/images/follow-cat7.png",
  "/images/follow-cat6.png",
  "/images/follow-cat4.png",
  "/images/follow-cat5.png",
];

const SocialsImage: React.FC<{ hoveredIndex: number | null }> = ({
  hoveredIndex,
}) => (
  <div className={styles.socialImageContainer}>
    {images.map((src, idx) => (
      <img
        key={src}
        src={src}
        alt="Gato fofinho"
        className={`${styles.socialImage} ${
          hoveredIndex === idx ? styles.imageTranslocated : ""
        }`}
        draggable="false"
      />
    ))}
  </div>
);

export default SocialsImage;
