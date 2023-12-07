import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import {
  FaDiscord,
  FaEnvelopeSquare,
  FaMobileAlt,
  FaEye,
  FaRegListAlt,
  FaRegNewspaper,
  FaRegUser,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { MdComputer, MdDashboard } from "react-icons/md";
import { SiBitcoin, SiPixiv, SiNextdotjs, SiNodedotjs } from "react-icons/si";
import About from "./components/aboutPage/About";
import Blogs from "./components/blogsPage/Blogs";
import DevBlogs from "./components/blogsPage/DevBlogs";
import Contact from "./components/contactPage/Contact";
import GuestBook from "./components/guestbookPage/GuestBook";
import Resume from "./components/resumePage/Resume";
import Stats from "./components/statistics/Stats";
import Works from "./components/worksPage/Works";
import {
  ClientData,
  MenuData,
  ServiceData,
  SocialMedia,
  StatisticsData,
  TestimonialData,
} from "./types";

export const menus: MenuData[] = [
  {
    id: 1,
    label: "about",
    Icon: FaRegUser,
    Component: About,
  },
  {
    id: 2,
    label: "resume",
    Icon: FaRegListAlt,
    Component: Resume,
  },
  {
    id: 3,
    label: "works",
    Icon: FaEye,
    Component: Works,
  },
  {
    id: 4,
    label: "blog",
    Icon: FaRegNewspaper,
    Component: DevBlogs,
  },
  {
    id: 5,
    label: "contact",
    Icon: FiSend,
    Component: Contact,
  },
];

export const socialMedia: SocialMedia[] = [
  {
    id: 1,
    Icon: AiOutlineGithub,
    label: "Github",
    logoColor: "#171515",
    mediaUrl: "https://www.github.com/wuffle1125",
    info: "Star my projects on Github",
  },
  {
    id: 2,
    Icon: AiFillLinkedin,
    label: "Linkedin",
    logoColor: "#0072b1",
    mediaUrl: "https://www.linkedin.com/in/jose4utorres/",
    info: "Let's connect on Linkedin",
  },
  {
    id: 3,
    Icon: FaEnvelopeSquare,
    label: "Gmail",
    logoColor: "#171515",
    mediaUrl: "mailto:smart.jamesjin@gmail.com",
    info: "mailto:smart.jamesjin@gmail.com",
  },
  {
    id: 4,
    Icon: FaMobileAlt,
    label: "Mobile",
    logoColor: "#0072b1",
    mediaUrl: "sms:+13234993770?&body=Hi Jose, nice to meet you!!!",
    info: "sms:+13234993770?&body=Hi Jose, nice to meet you!!!",
  },
  {
    id: 5,
    Icon: FaDiscord,
    label: "Discord",
    logoColor: "#5865f2",
    mediaUrl: "https://www.discord.com",
    info: "Let's chat on Discord. My username - tommy1629",
  },
];

export const services: ServiceData[] = [
  {
    id: 1,
    title: "Front-end",
    Icon: SiNextdotjs,
    description:
      "Javascript based libraries and frameworks, prefer Next.js as I value SEO and performance optimization.",
  },
  {
    id: 2,
    title: "Back-end",
    Icon: SiNodedotjs,
    description:
      "Node.js/Express, AWS lambda, Laravel and MySQL, PostgreSQL, MongoDB for database.",
  },
  {
    id: 3,
    title: "Blockchain",
    Icon: SiBitcoin,
    description: "Smart contracts on EVM network using Solidity.",
  },
  {
    id: 4,
    title: "Other",
    Icon: SiPixiv,
    description: "CMS, Analytics, 3rd API integration, Optimization...",
  },
];

export const clients: ClientData[] = [
  {
    id: 1,
    linkLocation: "https://www.linkedin.com/",
    imgLocation: "/images/lin.png",
  },
  {
    id: 2,
    linkLocation: "https://www.freelancer.com/",
    imgLocation: "/images/freelancer.png",
  },
  {
    id: 3,
    linkLocation: "https://www.upwork.com/",
    imgLocation: "/images/upwork.png",
  },
  {
    id: 4,
    linkLocation: "https://www.envato.com/",
    imgLocation: "/images/envato.png",
  },
];

export const quoteData: TestimonialData = {
  id: "quote",
  quote:
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  userName: "Martin Fowler",
  userProfession: "Software Developer",
  userImage: { url: "/images/martin.jpg" },
};

export const statisticsData: StatisticsData[] = [
  {
    title: "stack",
    info: "MERN or T3",
  },
  {
    title: "projects",
    info: "70+",
  },
  {
    title: "clients",
    info: "40+",
  },
];
