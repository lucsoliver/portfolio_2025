import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "../styles/global.css";
import "../styles/colors/colors.css";
import i18n from "../i18n/index";
import { initHighlightColor } from "../utils/highlightColor";
import App from "./App";

initHighlightColor();

const root = createRoot(document.getElementById("app")!);

const saved = (localStorage.getItem("language") as string) ?? "pt";
i18n
  .changeLanguage(saved)
  .catch((err) => console.error("i18n changeLanguage failed:", err));

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
