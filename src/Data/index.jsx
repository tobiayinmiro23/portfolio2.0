import skill from '../Assets/code-tech-dev-svgrepo-com (1).svg'
import database from  '../Assets/database-svgrepo-com.svg'
import backend from '../Assets/datastore-svgrepo-com.svg'
import mobile from  '../Assets/mobile-svgrepo-com.svg'

export  const skillGroups = [
  { icon: skill, title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "Material UI", "Bootstrap", "Sass", "Redux Toolkit"] },
  { icon: backend, title: "Backend", items: ["Node.js", "Express", "REST APIs", "Prisma"] },
  { icon: database, title: "Databases", items: ["PostgreSQL", "MongoDB", "Supabase", "Firebase"] },
  { icon: mobile, title: "Mobile & Tooling", items: ["React Native", "Git & GitHub", "Vercel", "Netlify", "Render"] },
];

export const stack = [
    "React", "Next.js", "TypeScript", "Node.js", "Express", "React Native",
    "Tailwind CSS", "Postgres", "Supabase", "Prisma", "MongoDB", "Redux Toolkit",
    "Firebase", "Material UI", "Sass", "Bootstrap",
  ];
export const experienceSummary=[
            { k: "5+", v: "Years of experience" },
            { k: "20+", v: "Projects shipped" },
            { k: "5", v: "Companies worked with" },
          ]
export const metaData= [
      { title: "Home — Full Stack Developer Portfolio" },
      { name: "description", content: "Full stack developer building fast, beautiful, scalable web and mobile apps." },
      { property: "og:title", content: "Home — Full Stack Developer Portfolio" },
      { property: "og:description", content: "Full stack developer building fast, beautiful, scalable web and mobile apps." },
    ]

export const projects = [
  {
    id: 1,
    img: "/portfoliopic/pexels-nataliya-vaitkevich-6214480 (1).jpg",
    link: "https://skydome.onrender.com/",
    stacks: ["React", "Express", "Paystack", "Tailwind", "Material UI", "Redux Toolkit", "Firebase"],
    info: "Ecommerce website"
  },
  {
    id: 2,
    img: "/portfoliopic/markus-spiske-2G8mnFvH8xk-unsplash (1).jpg",
    link: "https://news-hub01.netlify.app/",
    stacks: ["React", "TypeScript", "TailwindCSS", "shadcn", "Axios", "NewsData API"],
    info: "News website"
  },
  {
    id: 6,
    img: "/portfoliopic/dannie-jing-3GZlhROZIQg-unsplash.webp",
    link: "https://theopenmarket.netlify.app/",
    stacks: ["React", "TypeScript", "Express", "PostgreSQL", "shadcn", "Tailwind", "Supabase", "Unsplash API"],
    info: "Full stack image gallery"
  },
  {
    id: 3,
    img: "/portfoliopic/pexels-katerina-holmes-5905439.webp",
    link: "https://school-portal-zjna.onrender.com",
    stacks: ["MERN", "Firebase", "Material UI", "Sass"],
    info: "Fullstack school portal"
  },
  {
    id: 4,
    img: "/portfoliopic/pexels-fotoaibe-1743227.webp",
    link: "https://jkholdings.netlify.app/",
    stacks: ["React", "Tailwind", "Material UI"],
    info: "Apartment rental dashboard"
  },
  {
    id: 5,
    img: "/portfoliopic/samuel-regan-asante-wMkaMXTJjlQ-unsplash.jpg",
    link: "https://profound-kringle-74cb33.netlify.app/",
    stacks: ["React", "Tailwind", "TypeScript", "Axios", "tmdb api"],
    info: "Movie download website"
  },
  
  {
    id: 7,
    img: "/portfoliopic/pexels-pixabay-256541.webp",
    link: "https://edictionary1.netlify.app/",
    stacks: ["React", "TypeScript", "Axios", "WordsAPI"],
    info: "Dictionary website"
  },
  {
    id: 8,
    img: "/portfoliopic/pexels-vlad-bagacian-1337753.webp",
    link: "https://musicplayef.onrender.com",
    stacks: ["React", "Material UI"],
    info: "Music player"
  },
  {
    id: 9,
    img: "/portfoliopic/pexels-breakingpic-3243 (1).jpg",
    link: "https://next-todo1.netlify.app/",
    stacks: ["Next.js", "MongoDB", "TypeScript", "Tailwind", "Bootstrap"],
    info: "Full stack todo app"
  },
  {
    id: 10,
    img: "/portfoliopic/pexels-pixabay-164595.webp",
    link: "https://tobiayinmiro23.github.io/Hotel/",
    stacks: ["HTML", "CSS", "Tailwind", "GSAP", "JavaScript"],
    info: "Hotel website"
  },
  {
    id: 11,
    img: "/portfoliopic/pexels-pixabay-262978.webp",
    link: "https://tobiayinmiro23.github.io/Restaurant/",
    stacks: ["HTML", "CSS", "JavaScript"],
    info: "Restaurant website"
  }
];