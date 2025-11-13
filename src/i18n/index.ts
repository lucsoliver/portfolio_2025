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
      home: {
        title: "Lucas Oliveira",
        subtitle: "Front-end Developer",
        description:
          "Graduated in Information Systems, I work as a Front-End Developer with the most diverse technologies on the current market such as React, React Native, Laravel and JavaScript. Also in the area of ​​game development with the Unity graphics engine in Interface development.",
        socials: {
          email: "Email",
          twitter: "Twitter",
          github: "Github",
          linkedin: "LinkedIn",
        },
        links: "/links",
      },
      about: {
        title: "Lucas Oliveira",
        subtitle: "Front-end Developer",
        present: "Currently",
        pos: "🎓 Post-graduation in Software Engineering",
        description:
          "With 5 years of development experience, I use my creativity and technical expertise to create solutions that simplify and solve everyday challenges and result in modern, accessible interfaces focused on the best user experience.",

        socials: {
          email: "Email",
          twitter: "Twitter",
          github: "Github",
          linkedin: "LinkedIn",
        },
        links: "/links",
      },
      projects: {
        projects: "Projects",
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
          "MaterialUI",
          "ReactNative",
          "Expo",
          "PHP",
          "Laravel",
          "Git",
          "GitHub",
          "HTML5",
          "CSS3",
          "TailwindCSS",
          "Webpack",
          "StyledComponents",
          // "JS Libraries and Packages Design",
          // "Code Design/Architecture",
        ],
      },
      links: {
        dev: "Front-end Developer",
        stack: "React, Next, React Native, PHP and more!",
        socials: "Social Media",
        website: "Personal Website",
        climatempo: "Clima Tempo",
        cvpt: "CV (PT) br",
        cven: "CV (ENG) us",
        email: "E-mail",
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
      home: {
        title: "Lucas Oliveira",
        subtitle: "Desenvolvedor Front-end",
        description:
          "Formado em Sistemas de Informação e cursando pós-graduação",
        socials: {
          email: "E-mail",
          twitter: "Twitter",
          github: "Github",
          linkedin: "LinkedIn",
        },
        links: "/links",
      },
      about: {
        title: "Lucas Oliveira",
        subtitle: "Desenvolvedor Front-end",
        present: "Atualmente",
        pos: "🎓 Pós-graduação em Engenharia de Software",
        description:
          "Com 5 anos de experiência em desenvolvimento, utilizo minha criatividade e expertise técnica para criar soluções que simplificam e resolvem desafios do dia a dia e resultam em interfaces modernas, acessíveis e focadas na melhor experiência do usuário.",
        socials: {
          email: "E-mail",
          twitter: "Twitter",
          github: "Github",
          linkedin: "LinkedIn",
        },
        links: "/links",
      },
      projects: {
        projects: "Projetos",
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
          "MaterialUI",
          "ReactNative",
          "Expo",
          "PHP",
          "Laravel",
          "Git",
          "GitHub",
          "HTML5",
          "CSS3",
          "TailwindCSS",
          "Webpack",
          "StyledComponents",
          // "JS Libraries and Packages Design",
          // "Code Design/Architecture",
        ],
      },
      links: {
        dev: "Desenvolvedor Front-end ",
        stack: "React, Next, React Native, PHP e mais!",
        website: "Site Pessoal",
        cvpt: "CV (PT) br",
        cven: "CV (ENG) us",
        email: "E-mail",
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
