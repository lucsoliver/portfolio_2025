import { useState, type CSSProperties, type ReactNode } from "react";
import styles from "./Tooltip.module.css";

type TooltipPosition = "top" | "bottom" | "left" | "right";
type TooltipSize = "sm" | "md" | "lg";

interface TooltipProps {
  label: string;
  children: ReactNode;
  className?: string;
  position?: TooltipPosition;
  size?: TooltipSize;
  color?: string;
  showArrow?: boolean;
  visible?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({
  label,
  children,
  className,
  position = "top",
  size = "md",
  color,
  showArrow = true,
  visible,
}) => {
  const [hovered, setHovered] = useState(false);
  const isVisible = visible ?? hovered;

  return (
    <span className={`${styles.wrapper} ${className ?? ""}`.trim()}>
      <span
        className={styles.trigger}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        {children}
      </span>

      <span
        className={`${styles.tooltip} ${styles[position]} ${styles[size]} ${
          isVisible ? styles.visible : ""
        } ${showArrow ? "" : styles.noArrow}`.trim()}
        style={
          color ? ({ "--tooltip-bg": color } as CSSProperties) : undefined
        }
        aria-hidden="true"
      >
        {label}
      </span>
    </span>
  );
};

export default Tooltip;
