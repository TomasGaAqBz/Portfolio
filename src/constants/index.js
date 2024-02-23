
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
    freelancer
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
            "Lideré lecciones prácticas y teóricas con el objetivo de fomentar un ambiente de aprendizaje interactivo y participativo. Mi responsabilidad incluyó la creación y administración de pruebas y proyectos, proporcionando una evaluación integral del progreso de los estudiantes. Comprometido con el crecimiento y desarrollo de cada estudiante, ofrecí retroalimentación detallada y constructiva para facilitar la mejora continua. En este rol, no solo compartí conocimientos técnicos, sino también contribuí al desarrollo de habilidades críticas para el éxito en el campo de la programación."
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
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/TomasGaAqBz',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/tomas-gabriel-aquino-bajusz/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];