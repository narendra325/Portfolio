import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import personImage from "../assets/testimonial.webp";

import {
  RiHtml5Line,
  RiCss3Line,
  RiBootstrapLine,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
  RiNodejsLine,
  RiNodejsFill,
} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
  RiSignpostLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Narendra singampalli",
  role: "Mern full Stack Developer",
  subheading:
    "Full-Stack Web Developer(Mern)with over 3.2 years of experience in designing and developing user-friendly web applications using React,Node JS,Rest API,HTML, CSS, JavaScript and Typescript. Skilled in both front-end and back-end development, as well as testing and debugging. Looking to leverage my expertise and creativity to contribute to the success of a dynamic and innovative company.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "A full-featured e-commerce website built with React and Node.js. It includes user authentication, product management, and an integrated payment gateway.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    imgSrc: project1,
    link: "https://example-ecommerce.com",
  },
  {
    id: 2,
    title: "Social Media App",
    description:
      "A real-time social media app with chat, notifications, and a customizable profile page. Built with React, Firebase, and Redux for state management.",
    techStack: ["React", "Firebase", "Redux"],
    imgSrc: project2,
    link: "https://example-socialapp.com",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills. Fully responsive and optimized for performance.",
    techStack: ["Next.js", "Tailwind CSS"],
    imgSrc: project3,
    link: "https://myportfolio.com",
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "A blogging platform with a content management system, user authentication, and an intuitive editor.",
    techStack: ["Ruby on Rails", "PostgreSQL", "Tailwind CSS"],
    imgSrc: project4,
    link: "https://example-blogplatform.com",
  },
  {
    id: 5,
    title: "Task Management App",
    description:
      "A task management tool with user authentication, reminders, and collaboration features.",
    techStack: ["Angular", "Firebase", "Material UI"],
    imgSrc: project5,
    link: "https://example-taskapp.com",
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "An e-learning platform offering video courses, quizzes, and progress tracking for students.",
    techStack: ["Vue.js", "Node.js", "MongoDB", "Express"],
    imgSrc: project6,
    link: "https://example-learningplatform.com",
  },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "TypeScript",
    icon: <RiJavascriptLine className="text-blue-500" />,
  },
  {
    name: "JQuery",
    icon: <RiNodejsFill className="text-yellow-500" />,
  },
  {
    name: "Node.js",
    icon: <RiNodeTree className="text-green-500" />,
  },
  {
    name: "Express.js",
    icon: <RiNodejsLine className="text-orange-500" />,
  },
  {
    name: "MongoDB",
    icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "Redux Toolkit",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "Github",
    icon: <RiGitBranchLine className="text-red-500" />,
  },
  {
    name: "Bootstrap",
    icon: <RiBootstrapLine className="text-blue-500" />,
  },
  {
    name: "Post man",
    icon: <RiSignpostLine className="text-red-600" />,
  },
];

export const EXPERIENCES = [ 
  {
    yearRange: "2021 - 2024",
    role: "Mern stack developer",
    company: "TCS",
    description:
      "Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.",
    techStack: ["React.js", "Express.js", "MongoDB", "Nodejs","Version control","Framer motion","npm","Typescript"],
  }
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Mechanical engineering",
    institution: "Pragathi engineering college",
    duration: "2018 - 2021",
    Percentage : "8.4 CGPA",
    description:
      "As a mechanical engineering graduate, I have gained a strong foundation in designing, analyzing, and manufacturing mechanical systems. My studies focused on thermodynamics, fluid mechanics, materials science, and CAD tools to solve real-world engineering problems",
  },
  {
    id: 2,
    degree: "Diploma in Mechanical engineering",
    institution: "Andhara polytecnic ",
    duration: "2015 - 2018",
    Percentage : "81%",
    description:
      "As a mechanical engineering graduate, I have gained a strong foundation in designing, analyzing, and manufacturing mechanical systems. My studies focused on thermodynamics, fluid mechanics, materials science, and CAD tools to solve real-world engineering problems",
  },
  {
    id: 3,
    degree: "Certified React Developer",
    institution: "UDEMY",
    duration: "2023",
    description:
      "Earned a certification in advanced React.js development, including hooks, context API, and performance optimization.",
  },
  {
    id: 3,
    degree: "Certified Nodejs Developer",
    institution: "UDEMY",
    duration: "2023",
    description:
      "Proficient in Node.js with hands-on experience in building RESTful APIs, server-side logic, and working with core modules like http and fs. Skilled in handling asynchronous operations using Promises and async/await.",
  },
];

export const TESTIMONIAL = {
  name: "Ranajit",
  title: "TCS",
  quote:
    "Working with Narendra was a game-changer. His expertise in full-stack development helped us scale our product with ease. His attention to detail and passion for quality are unmatched.",
  image: personImage,
};
