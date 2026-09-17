import {
  useState,
  useId,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ReactNode,
} from "react";
import styles from "./Tooltip.module.css";

type TooltipPosition = "top" | "bottom" | "left" | "right";
type TooltipSize = "sm" | "md" | "lg";

interface TooltipProps extends Omit<ComponentPropsWithoutRef<"span">, "color"> {
  label: string;
  children: ReactNode;
  position?: TooltipPosition;
  size?: TooltipSize;
  background?: string;
  showArrow?: boolean;
  open?: boolean;
}

const cn = (...parts: Array<string | false | undefined>) =>
  parts.filter(Boolean).join(" ");

export function Tooltip({
  label,
  children,
  className,
  position = "top",
  size = "md",
  background,
  showArrow = true,
  open,
  ...rest
}: TooltipProps) {
  const id = useId();
  const [suppressed, setSuppressed] = useState(false);

  if (!label) return <>{children}</>;

  return (
    <span
      {...rest}
      className={cn(styles.wrapper, className)}
      onPointerEnter={() => setSuppressed(false)}
      onPointerDown={() => open === undefined && setSuppressed(true)}
    >
      <span className={styles.trigger} aria-describedby={id}>
        {children}
      </span>
      <span
        id={id}
        role="tooltip"
        className={cn(
          styles.tooltip,
          styles[position],
          styles[size],
          open === true && styles.forceVisible,
          open === false && styles.forceHidden,
          open === undefined && suppressed && styles.suppressed,
          !showArrow && styles.noArrow,
        )}
        style={
          background
            ? ({ "--tooltip-bg": background } as CSSProperties)
            : undefined
        }
      >
        {label}
      </span>
    </span>
  );
}

export default Tooltip;
