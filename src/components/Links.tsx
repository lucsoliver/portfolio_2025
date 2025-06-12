import React from 'react';
import { Mail, Twitter, Github, Linkedin } from 'lucide-react';
import styles from '../styles/Links.module.css';

interface Link {
  href: string;
  icon: React.ElementType;
  alt: string;
  title: string;
  rel: string;
}
const links: Link[] = [
  {
    href: 'mailto:lucasop888@gmail.com',
    icon: Mail,
    alt: 'Email',
    title: 'E-mail',
    rel: 'nofollow',
  },
  {
    href: 'https://twitter.com/lyunnee',
    icon: Twitter,
    alt: 'Twitter',
    title: 'Twitter',
    rel: 'me noopener',
  },
  {
    href: 'https://github.com/lucsoliver',
    icon: Github,
    alt: 'GitHub',
    title: 'GitHub',
    rel: 'me noopener',
  },
  {
    href: 'https://www.linkedin.com/in/lucas-oliveira-paula/',
    icon: Linkedin,
    alt: 'LinkedIn',
    title: 'LinkedIn',
    rel: 'me noopener',
  },
];

const Links: React.FC<{ onHover?: (index: number | null) => void }> = ({ onHover }) => (
  <nav className={styles.linksNav} aria-label="Links de redes sociais">
    {links.map((link, idx) => {
      const Icon = link.icon;
      return (
        <a
          key={link.href}
          href={link.href}
          title={link.title}
          rel={link.rel}
          target="_blank"
          className={`${styles.link} ${styles.linkUnderline}`}
          aria-label={link.alt}
          onMouseEnter={() => onHover && onHover(idx)}
          onMouseLeave={() => onHover && onHover(null)}
        >
          <Icon className={styles.linkIcon} aria-hidden="true" />
          <span className={styles.srOnly}>{link.alt}</span>
        </a>
      );
    })}
  </nav>
);

export default Links;
