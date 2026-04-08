import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./components/ThemeContext";

import "./index.css";
import "../public/colors/colors.css";
import i18n from "./i18n";
import App from "./App";

const root = createRoot(document.getElementById("app")!);

const saved = (localStorage.getItem("language") as string) ?? "en";
i18n
  .changeLanguage(saved)
  .catch((err) => console.error("i18n changeLanguage failed:", err));

root.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
