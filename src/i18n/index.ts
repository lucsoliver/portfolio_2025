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
        contact: "Contact",
        skipToContent: "Skip to content",
      },
      home: {
        title: "Lucas Oliveira",
        subtitle: "Front-end Developer",
        ctaCv: "Download CV",
        links: "Links",
        contact: "Contact",
      },
      about: {
        about: "About",
        title: "Lucas Oliveira",
        subtitle: "Front-end Developer",
        present: "Currently",
        pos: "🎓 Post-graduation in Software Engineering",
        job: "🏢 Working at ALFA Software AutoPeças",
        description:
          "With 5 years of development experience, I use my creativity and technical expertise to create solutions that simplify and solve everyday challenges and result in modern, accessible interfaces focused on the best user experience.",
        interests: "Interests",
        interestsDescription: {
          tech: "Technology",
          ia: "Artificial Intelligence",
          leitura: "Reading",
          games: "Games",
          film: "Sci-fi Films",
          anime: "Anime",
          music: "Music",
          dorama: "Asian Dramas",
        },
        curriculum: "Download CV",
        cvTitle: "Curriculum",
        cvPTBR: "CV PT-BR",
        cvEN: "CV ENG",
        close: "X",
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
        title: "Skills",
        description:
          "Here are some of the technologies and tools I have experience with:",
        paginationLabel: "Skill pages",
        pageLabel: "Page {{page}} of {{total}}",
        groups: [
          {
            title: "Front-end",
            skills: [
              "TypeScript",
              "React",
              "Vue.js",
              "HTML5",
              "CSS3",
              "JavaScript",
              "Tailwind CSS",
              "Material UI",
              "styled-components",
              "Webpack",
            ],
          },
          {
            title: "Back-end",
            skills: [
              "PHP",
              "Laravel",
              "Node.js",
              "Express",
              "MySQL",
              "PostgreSQL",
              "REST APIs",
            ],
          },
          {
            title: "Mobile",
            skills: ["React Native", "Expo"],
          },
          {
            title: "Dev Tools & Engineering",
            skills: ["Git", "GitHub", "Figma", "Docker", "NPM"],
          },
        ],
      },
      contact: {
        title: "Contact me",
        subtitle: "Get in touch",
        email: "Email",
        linkedin: "LinkedIn",
        copyEmail: "Copy Email",
        emailCopied: "Email copied to clipboard!",
      },
      links: {
        dev: "Front-end Developer",
        stack: "Vue.js, TypeScript, React Native, PHP and more!",
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
        contact: "Contato",
        skipToContent: "Ir para o conteúdo",
      },
      home: {
        title: "Lucas Oliveira",
        subtitle: "Desenvolvedor Front-end",
        ctaCv: "Baixar CV",
        contact: "Contate-me",
        links: "Links",
      },
      about: {
        about: "Sobre",
        title: "Lucas Oliveira",
        subtitle: "Desenvolvedor Front-end",
        present: "Atualmente",
        pos: "🎓 Pós-graduação em Engenharia de Software",
        job: "🏢 Trabalhando na ALFA Software AutoPeças",
        description:
          "Com 5 anos de experiência em desenvolvimento, utilizo minha criatividade e expertise técnica para criar soluções que simplificam e resolvem desafios do dia a dia e resultam em interfaces modernas, acessíveis e focadas na melhor experiência do usuário.",
        interests: "Interesses",
        interestsDescription: {
          tech: "Tecnologia",
          ia: "Inteligência Artificial",
          leitura: "Leitura",
          games: "Games",
          film: "Filmes Sci-fi",
          anime: "Anime",
          music: "Música",
          dorama: "Dorama",
        },
        curriculum: "Download CV",
        cvTitle: "Currículo",
        cvPTBR: "CV PT-BR",
        cvEN: "CV ENG",
        close: "X",
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
        paginationLabel: "Páginas de habilidades",
        pageLabel: "Página {{page}} de {{total}}",
        groups: [
          {
            title: "Front-end",
            skills: [
              "TypeScript",
              "React",
              "Vue.js",
              "HTML5",
              "CSS3",
              "JavaScript",
              "Tailwind CSS",
              "Material UI",
              "styled-components",
              "Webpack",
            ],
          },
          {
            title: "Back-end",
            skills: [
              "PHP",
              "Laravel",
              "Node.js",
              "Express",
              "MySQL",
              "PostgreSQL",
              "REST APIs",
            ],
          },
          {
            title: "Mobile",
            skills: ["React Native", "Expo"],
          },
          {
            title: "Ferramentas e Engenharia",
            skills: ["Git", "GitHub", "Figma", "Docker", "NPM"],
          },
        ],
      },
      contact: {
        title: "Contate-me",
        subtitle: "Entre em contato",
        email: "E-mail",
        linkedin: "LinkedIn",
        copyEmail: "Copiar E-mail",
        emailCopied: "E-mail copiado para a área de transferência!",
      },
      links: {
        dev: "Desenvolvedor Front-end ",
        stack: "Vue.js, TypeScript, React Native, PHP e mais!",
        website: "Site Pessoal",
        climatempo: "Clima Tempo",
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
