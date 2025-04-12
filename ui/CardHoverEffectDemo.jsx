import { HoverEffect } from "./HoverEffect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-2xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "HTML",
    image: "/images/html.jpeg", // Replace with actual image URL
  },
  {
    title: "CSS",
    image: "/images/css.png", // Replace with actual image URL
  },
  {
    title: "JS",
    image: "/images/js.avif", // Replace with actual image URL
  },

  {
    title: "Tailwind CSS",
    image: "/images/tailwind.png", // Replace with actual image URL
  },

  {
    title: "React",
    image: "/images/react.png",
  },
  {
    title: "Node JS",
    image: "/images/node.png",
  },
  {
    title: "Express JS",
    image: "/images/express.png",
  },
  {
    title: "PHP",
    image: "images/php.png", 
  },
  {
    title: "MongoDB",
    image: "/images/mongo.png",
  },
  {
    title: "MySql",
    image: "/images/mysql.jpeg",
  },
  {
    title: "GIT",
    image: "/images/git.png",
  },
  {
    title: "Vercel",
    image: "/images/vercel.png",
  },
  {
    title: "npm packages",
    image: "/images/npm.png",
  },
  
];
