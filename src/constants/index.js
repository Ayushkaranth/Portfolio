import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  nex,
  jobit,
  tripguide,
  threejs,
  tripguide1,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Web3 Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full Stack Intern",
    company_name: "VESIT",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Present",
    points: [
      "Built an automated canteen ordering system with real-time updates and staff order control.",
      "Reduced manual errors by 80% and improved inventory and customer experience.",
      "Worked across the stack using React, Node.js, MongoDB, and REST APIs.",
    ],
  },
  {
    title: "Public Relations Officer",
    company_name: "QuestIT",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sep 2024 - Present",
    points: [
      "Handled digital communications and promotional content for event marketing.",
      "Collaborated on strategies to increase outreach and engagement.",
      "Gained experience in content creation and campaign planning.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "NexTrailer",
    description:
      "Platform to explore latest movie and TV show trailers using a clean React-based UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: nex,
    source_code_link: "https://github.com/Ayushkaranth/netlify",
  },
  {
    name: "LinkedIn Clone",
    description:
      "Full-stack app with custom authentication, profile features, and real-time notifications.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Ayushkaranth/Linkedin",
  },
  {
    name: "Streamify",
    description:
      "Real-time video call platform with features like screen sharing, live reactions, and recordings.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "stream",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Ayushkaranth/Streamify",
  },
  {
  name: "Vox",
  description:
    "A modern SaaS code editor built with TypeScript and Next.js, supporting multi-language execution including Rust and Swift. Integrated with Lemon Squeezy for secure Pro plan subscriptions.",
  tags: [
    {
      name: "nextjs",
      color: "blue-text-gradient",
    },
    {
      name: "typescript",
      color: "green-text-gradient",
    },
    {
      name: "webassembly",
      color: "pink-text-gradient",
    },
    {
      name: "lemon squeezy",
      color: "yellow-text-gradient",
    },
  ],
  image: tripguide1,
  source_code_link: "https://github.com/Ayushkaranth/Vox",
  }
];

export { services, technologies, experiences, testimonials, projects };
