import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import styles from "./Tooltip.module.css";

type TooltipPosition = "top" | "bottom" | "left" | "right";
type TooltipSize = "sm" | "md" | "lg";
type TooltipVariant = "dark" | "light";

interface TooltipProps {
  label: string;
  children: ReactNode;
  className?: string;
  position?: TooltipPosition;
  size?: TooltipSize;
  variant?: TooltipVariant;
  color?: string;
  delay?: number;
  showArrow?: boolean;
  visible?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({
  label,
  children,
  className,
  position = "top",
  size = "md",
  variant = "dark",
  color,
  delay = 0,
  showArrow = true,
  visible,
}) => {
  const [hoverVisible, setHoverVisible] = useState(false);
  const timeoutRef = useRef<number | undefined>(undefined);
  const isControlled = visible !== undefined;
  const isVisible = isControlled ? visible : hoverVisible;

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const setHover = (nextVisible: boolean) => {
    if (isControlled) {
      return;
    }

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    if (!nextVisible || delay <= 0) {
      setHoverVisible(nextVisible);
      return;
    }

    timeoutRef.current = window.setTimeout(() => {
      setHoverVisible(true);
    }, delay);
  };

  const tooltipStyles = {
    "--tooltip-bg":
      color ?? (variant === "dark" ? "rgba(24, 25, 28, 0.96)" : "#f8fafc"),
    "--tooltip-color": variant === "dark" ? "#f2f3f5" : "#1f2328",
    "--tooltip-border":
      variant === "dark"
        ? "rgba(255, 255, 255, 0.08)"
        : "rgba(15, 23, 42, 0.08)",
  } as CSSProperties;

  return (
    <span className={`${styles.wrapper} ${className ?? ""}`.trim()}>
      <span
        className={styles.trigger}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onFocus={() => setHover(true)}
        onBlur={() => setHover(false)}
      >
        {children}
      </span>

      <span
        className={`${styles.tooltip} ${styles[position]} ${styles[size]} ${styles[variant]} ${
          isVisible ? styles.visible : ""
        } ${showArrow ? "" : styles.noArrow}`.trim()}
        style={tooltipStyles}
        aria-hidden="true"
      >
        {label}
      </span>
    </span>
  );
};

export default Tooltip;
