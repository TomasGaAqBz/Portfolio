import {
  bam,
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  mysql,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  freelancer,
  logoNB,
  logoTis,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mysql,
    name: "MySql",
    type: "Database",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Instructor de Introduccion a la Programacion",
    company_name: "Buenos Aires Multiplica",
    icon: bam,
    iconBg: "#b7e4c7",
    date: "Febrero 2023 - Julio 2023",
    points: [
      "Lideré lecciones prácticas y teóricas con el objetivo de fomentar un ambiente de aprendizaje interactivo y participativo. Mi responsabilidad incluyó la creación y administración de pruebas y proyectos, proporcionando una evaluación integral del progreso de los estudiantes. Comprometido con el crecimiento y desarrollo de cada estudiante, ofrecí retroalimentación detallada y constructiva para facilitar la mejora continua. En este rol, no solo compartí conocimientos técnicos, sino también contribuí al desarrollo de habilidades críticas para el éxito en el campo de la programación.",
    ],
  },
  {
    title: "Freelancer Developer",
    company_name: "none",
    icon: freelancer,
    iconBg: "#a2d2ff",
    date: "Octubre 2022 - Present",
    points: [
      "Me sumergí en diversas facetas del desarrollo web. Mi enfoque abarcó el mantenimiento de páginas web existentes, así como el desarrollo de proyectos propios innovadores. Colaboré estrechamente con clientes para comprender sus requisitos y brindar soluciones personalizadas que superaran sus expectativas. Durante este periodo, perfeccioné mis habilidades en la gestión efectiva del tiempo y recursos, garantizando entregas puntuales y resultados de calidad en cada proyecto. Este capítulo como freelancer no solo amplió mi experiencia técnica, sino que también consolidó mi capacidad para enfrentar desafíos con creatividad y adaptabilidad.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/TomasGaAqBz",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/tomas-gabriel-aquino-bajusz/",
  },
];

export const projects = [
  {
    iconUrl: logoNB,
    theme: "btn-back-red",
    name: "Nancy Barboza Photography",
    description:
      "Diseñé y desarrollé el portafolio profesional de Nancy Barboza, destacando la artística y encantadora fotografía de niños capturada por ella. El sitio web es un viaje visual que resalta su perspectiva única y su habilidad para contar historias a través del lente.",
    link: "https://nancybarboza.com.ar/",
  },
  {
    iconUrl: logoTis,
    theme: 'btn-back-yellow',
    name: "Trip In Sight",
    description:
    "Colaboré estrechamente con un talentoso equipo de compañeros para diseñar y desarrollar 'Trip In Sight', una aplicación que permite a empresas ofrecer y vender tours ecológicos. Este proyecto conjunto refleja nuestro compromiso con la innovación y la creación de soluciones tecnológicas que impactan positivamente en la industria del turismo. Descubre cómo 'Trip In Sight' impulsa experiencias sostenibles y conecta a los amantes de la naturaleza con emocionantes aventuras ecológicas.",
    link: "https://tripinsight-peb3.onrender.com/",
  },
];
