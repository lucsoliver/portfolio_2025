import React from "react";
import styles from "./SocialsFooter.module.css";

import cat1 from "../../assets/images/white-cat.png";
import cat6 from "../../assets/images/black-cat.png";
import cat4 from "../../assets/images/orange-cat.png";
import cat5 from "../../assets/images/siamese-cat.png";

const images = [cat1, cat6, cat4, cat5];

const SocialsImage: React.FC<{ hoveredIndex: number | null }> = ({
  hoveredIndex,
}) => (
  <div className={styles.socialImageContainer}>
    {images.map((src, idx) => (
      <img
        key={`image-${idx}`}
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
