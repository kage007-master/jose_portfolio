import { ExperienceData } from "../types";
import Iotasol from "../assets/iotasol.png";
import Unibench from "../assets/unibench.png";
import Luoto from "../assets/luoto.png";

export const experiences: ExperienceData[] = [
  {
    id: 1,
    badge: "Jul 2022 - Jan 2023",
    title: "Luoto",
    logo: Luoto,
    subTitle: "Senior Full-Stack Engineer",
    desc: `
    Luoto Company is an IT company that specializes in application development, software, DevOps, consulting, opensource, and open shift. \n
    ▪ Built the Shopware 6 plugins in backend and implmented the reuseable components and UI/UX using Vue.js. \n
    ▪ Developed many token staking and NFT staking rust smart contracts and integrated into staking dapps. \n
    ▪ Developed various kinds of Dapps such as NFT marketplace, DEX, DEFI, ICO with React typescript, web3, and etherjs. \n
    ▪ Designed and Implemented a GraphQL API to serve as a layber between the frontend and data sources. \n
    ▪ Developed Shopify app using Remix, Shopify Hydrogen and GraphQL, increased the 30% performance rather than original shopify project. \n
    ▪ Implemented real-time token price charts, real-time price change notifications and other features from scratch using React Native. \n
    ▪ Suggested to use React storybook to create and test components in isolation and to speed up the development process.`,
  },
  {
    id: 2,
    badge: "Oct 2018 - Jun 2020",
    title: "Unibench",
    logo: Unibench,
    subTitle: "Senior Backend Engineer",
    desc: `
    Unibench is providing software development expertise and dedicated development resources to world-class tech teams who are shaping the future. \n
    ▪ Developed multi-Video chat application using Next.js/typescript and WebRTC. \n
    ▪ Collaborated with Web Application Engineers, used Python scripts to load the data into AWS Cloud Cassandra database. \n
    ▪ Improved page load time and performance through optimized data query commands. \n
    ▪ Experience with backend development programming languages including PHP(Laravel/Symfony), Python(Django/Flask) and Java(Spring Boot) \n
    ▪ Communicated with clients directly and built various kinds of web applications using React mui frameworks and demonstrated qualified frontend development skills using React typescript. \n
    ▪ Experience with AWS ec2, vercel, heroku, Nginx`,
  },
  {
    id: 3,
    badge: "Sep 2015 - Jun 2020",
    title: "Iotasol",
    logo: Iotasol,
    subTitle: "Senior Frontend Engineer",
    desc: `
    Iotasol is a software developing company with a primary focus on developing high qualitative, cost-effective, and timely delivered software. \n
    ▪ Extensively used HTML, CSS, SASS, JQuery, Javascript to provide an intuitive design for web portals. \n
    ▪ Collaborated with the UX/UI design teams to improve the website and applications, increasing conversion rates by 25%. \n
    ▪ Daily maintenance of code, debugging issues and solving clients' problems. \n
    ▪ Presented findings in a clear and concise manner to key decision-makers. \n
    ▪ Experience with Docker to work with other teammates in the same environment. \n
    ▪ Practical experience with working in cross-functional teams using Agile scrum methodology. \n
    ▪ Handled both SQL and No-SQL databases like MySQL, PostreSQL, and MongoDB. \n
    ▪ Practical experience with working in cross-functional teams using Agile scrum methodology`,
  },
];
