import { type CSSProperties, type MouseEvent, type ReactNode } from "react";
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
  const hideUntilNextHover = (event: MouseEvent<HTMLSpanElement>) => {
    if (!(event.target instanceof Element) || !event.target.closest("a")) {
      return;
    }

    event.currentTarget.classList.add(styles.pressed);
  };

  const clearPressed = (event: MouseEvent<HTMLSpanElement>) => {
    event.currentTarget.classList.remove(styles.pressed);
  };

  const isManual = visible !== undefined;

  return (
    <span
      className={`${styles.wrapper} ${className ?? ""} ${isManual ? styles.manual : ""}`.trim()}
      onMouseEnter={isManual ? undefined : clearPressed}
      onMouseDown={isManual ? undefined : hideUntilNextHover}
    >
      <span className={styles.trigger}>{children}</span>
      <span
        className={`${styles.tooltip} ${styles[position]} ${styles[size]} ${
          visible ? styles.visible : ""
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
