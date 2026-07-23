export const DEFAULT_HIGHLIGHT_COLOR = "#5d9dfe";

export function hexToHsl(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return { h: h * 360, s, l };
}

export function applyHighlightColor(color: string) {
  document.documentElement.style.setProperty("--base-color", color);
  const { h } = hexToHsl(color);
  document.documentElement.style.setProperty("--logo-hue", `${h}deg`);
}

export function initHighlightColor() {
  const saved =
    localStorage.getItem("highlightColor") ?? DEFAULT_HIGHLIGHT_COLOR;
  applyHighlightColor(saved);
  return saved;
}
