import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        skills: "Skills",
      },
      about: {
        title: "Lucas Oliveira",
        description:
          "Graduated in Information Systems, I work as a Front-End Developer with the most diverse technologies on the current market such as React, React Native, Laravel and JavaScript. Also in the area of ​​game development with the Unity graphics engine in Interface development.",
        links: {
          email: "Email",
          twitter: "Twitter",
          github: "Github",
          linkedin: "LinkedIn",
        },
      },
      projects: {
        projects: "My projects",
        viewOnGithub: "View on GitHub →",
        searchPlaceholder: "Search projects by name or language...",
        noResults: "No projects found",
        noProjects: "No projects available",
        tryAgain: "Try again",
        loading: "Loading projects...",
        clearSearch: "Clear search",
      },
      skills: {
        title: "Some Skills",
        description:
          "Here are some of the technologies and tools I have experience with:",
        skillsList: [
          "JavaScript",
          "TypeScript",
          "React",
          "ReactNative",
          "PHP",
          "Laravel",
          "Git",
          "GitHub",
          "HTML5",
          "CSS3",
          "TailwindCSS",
          "Webpack",
          // "JS Libraries and Packages Design",
          // "Code Design/Architecture",
        ],
      },
      footer: {
        rights: "All rights reserved.",
      },
    },
  },
  pt: {
    translation: {
      nav: {
        home: "Início",
        about: "Sobre",
        projects: "Projetos",
        skills: "Habilidades",
      },
      about: {
        title: "Lucas Oliveira",
        description:
          "Graduado em Sistemas de Informação, trabalho como Desenvolvedor Front-End com as mais diversas tecnologias do mercado atual como, React, React Native, Laravel e JavaScript. Também na área de desenvolvimento de jogos com o motor gráfico Unity em desenvolvimento de Interfaces.",
        links: {
          email: "E-mail",
          twitter: "Twitter",
          github: "Github",
          linkedin: "LinkedIn",
        },
      },
      projects: {
        projects: "Meus projetos",
        viewOnGithub: "Ver no GitHub →",
        searchPlaceholder: "Buscar projetos por nome ou linguagem...",
        noResults: "Nenhum projeto encontrado",
        noProjects: "Nenhum projeto disponível",
        tryAgain: "Tentar novamente",
        loading: "Carregando projetos...",
        clearSearch: "Limpar busca",
      },
      skills: {
        title: "Habilidades",
        description:
          "Aqui estão algumas das tecnologias e ferramentas com as quais tenho experiência:",
        skillsList: [
          "JavaScript",
          "TypeScript",
          "React",
          "ReactNative",
          "PHP",
          "Laravel",
          "Git",
          "GitHub",
          "HTML5",
          "CSS3",
          "TailwindCSS",
          "Webpack",
          // "JS Libraries and Packages Design",
          // "Code Design/Architecture",
        ],
      },
      footer: {
        rights: "Todos os direitos reservados.",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
