import devByt from "../assets/devbite.jpg";
import shop from "../assets/shop.webp";
import carhub from "../assets/carhub.png";
import movieapp from "../assets/movieapp.jpeg"

// export const Project = [
//   { title: "E-Commerce App", desc: "Full stack store with Supabase & Next.js" },
//   { title: "Admin Dashboard", desc: "Role-based dashboard with auth system" },
// ];
export const Skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Supabase",
  "Node.js",
  "Prisma",
  "Git",
];

export const Projects = [
  {
    id: 1,
    image: movieapp,
    name: "Movie streaming app",
    desc: "A fast, modern movie streaming app built with React and Next.js, featuring real-time movie data and a sleek user experience.",
    technology: [
      { id: 1, name: "Next-js" },
      { id: 2, name: "shadcn" },
      { id: 3, name: "RestAPI" },
    ],
    github:"",
    live_View:"https://movie-stream-2-lxnh-jwddm60ph-kabogomichaels-projects.vercel.app/",
    // category: [
    //   { id: 1, name: "code", logo: github, link: "/", color: "bg-zinc-700" },
    //   {
    //     id: 2,
    //     name: " View Project",
    //     logo: edit,
    //     link: "https://movie-stream-2-lxnh-jwddm60ph-kabogomichaels-projects.vercel.app/",
    //     color: "bg-primary",
    //   },
    // ],
  },
  {
    id: 2,
    image: devByt,
    name: "devByt community",
    desc: "We are a global tech Community Where Developers, Designers, and innovators come together to learn, collaborate, and grow.",
    technology: [
      { id: 1, name: "React-js" },
      { id: 2, name: "tailwind-css" },
      { id: 3, name: "RestAPI" },
    ],
    github:"https://github.com/Kabogomichael/Community-Website-Frontend.git",
    live_View:"https://community-website-frontend-five.vercel.app/",
    // category: [
    //   {
    //     id: 1,
    //     name: "code",
    //     logo: github,
    //     link: "https://github.com/Kabogomichael/Community-Website-Frontend.git",
    //     color: "bg-zinc-700",
    //   },
    //   {
    //     id: 2,
    //     name: " View Project",
    //     logo: edit,
    //     link: "https://community-website-frontend-five.vercel.app/",
    //     color: "bg-primary",
    //   },
    // ],
  },
  {
    id: 3,
    image: shop,
    name: "next-shop",
    desc: "we are changing the way people shop",
    technology: [
      { id: 1, name: "Next-js" },
      { id: 2, name: "shadcn" },
      { id: 3, name: "RestAPI" },
    ],
    github:"https://github.com/Kabogomichael/next_shop.git",
    live_View:"https://next-shop-g6z5-ocm6pzw3f-kabogomichaels-projects.vercel.app/",
    // category: [
    //   {
    //     id: 1,
    //     name: "code",
    //     logo: github,
    //     link: "https://github.com/Kabogomichael/next_shop.git",
    //     color: "bg-zinc-700",
    //   },
    //   {
    //     id: 2,
    //     name: " View Project",
    //     logo: edit,
    //     link: "https://next-shop-g6z5-ocm6pzw3f-kabogomichaels-projects.vercel.app/",
    //     color: "bg-primary",
    //   },
    // ],
  },
  {
    id: 4,
    image: carhub,
    name: "cars_showcase",
    desc: "Find,book or rent a car - quickly and easily",
    technology: [
      { id: 1, name: "Next-js" },
      { id: 2, name: "shadcn" },
      { id: 3, name: "RestAPI" },
    ],
    github:"https://github.com/Kabogomichael/cars_showcase.git",
    live_View:"https://cars-showcase-lod2-fhfir9nqk-kabogomichaels-projects.vercel.app/",
    // category: [
    //   {
    //     id: 1,
    //     name: "code",
    //     logo: github,
    //     link: "https://github.com/Kabogomichael/cars_showcase.git",
    //     color: "bg-zinc-700",
    //   },
    //   {
    //     id: 2,
    //     name: " Go live",
    //     logo: edit,
    //     link: "https://cars-showcase-lod2-fhfir9nqk-kabogomichaels-projects.vercel.app/",
    //     color: "bg-primary",
    //   },
    // ],
  },
];
