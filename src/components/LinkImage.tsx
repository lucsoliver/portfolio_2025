import React from 'react';
import styles from '../styles/Links.module.css';

const images = [
  '/images/follow-cat7.png',
  '/images/follow-cat6.png',
  '/images/follow-cat4.png',
  '/images/follow-cat5.png',
];

const LinkImage: React.FC<{ hoveredIndex: number | null }> = ({ hoveredIndex }) => (
  <div className={styles.LinkImageContainer}>
    {images.map((src, idx) => (
      <img
        key={src}
        src={src}
        alt="Gato Imagem"
        className={`${styles.linkImage} ${hoveredIndex === idx ? styles.imageTranslocated : ''}`}
      />
    ))}
  </div>
);

export default LinkImage;