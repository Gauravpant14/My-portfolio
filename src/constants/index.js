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
  carrent,
  jobit,
  tripguide,
  threejs,
  softprodigy,
  PS,
  kmit,
  AllBall,
  BargainAir,
  PccTour,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Senior Experience Engineer",
    company_name: "Publicis Sapient",
    icon: PS,
    iconBg: "#D93D7A",
    date: "SEPT 2024 - Current",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Softprodigy System Solutions PVT LTD",
    icon: softprodigy,
    iconBg: "#383E56",
    date: "JULY 2021 - SEPT 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Developer",
    company_name: "KeyMouse IT PVT LTD",
    icon: kmit,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - july 2021",
    points: [
      "Contributed to a diverse range of projects, meeting the specific need of varios clients and gaining valuable hands on experience",
      "Actively participated in design discussions, brainstroming sessions and code reviews.",
      "Successfully implemented front-end components and features, guaranteeing a seamless user experience and compliance with project specifications.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Gaurav proved me wrong.",
    name: "Umesh",
    designation: "CEO",
    company: "Pcc Tours & Travel",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Gaurav does.",
    name: "Neeraj",
    designation: "Tech Lead",
    company: "Bargain Air Ticket",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Gaurav optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  // {
  //   name: "Event Scheduler App",
  //   description:
  //     "A Comprehensive Sports Management Software Suite. designed to keep coaches, players, and league operators connected and on the same page. ",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Bootstrap",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "Redux",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: AllBall,
  //   source_code_link: "https://www.allballapp.com/",
  // },
  {
    name: "Car Booking Webapp",
    description:
      "Web application for finding cheapest domestic and International travel deals on Bargainairticket. Compare 100's of travel suppliers and select the cheapes",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "Redux-Toolkit",
        color: "pink-text-gradient",
      },
    ],
    image: BargainAir,
    source_code_link: "https://bargainairticket.com/cars",
  },
  // {
  //   name: "EMED",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://www.emed.com/",
  // },
  {
    name: "Tour & Travel Landing Page",
    description: "A landing page for a tour and travel company.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Styled Component",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: PccTour,
    source_code_link: "https://www.pcctoursandtravel.in/",
  },
];

export { services, technologies, experiences, testimonials, projects };
