import TotalInkDashboard from "../assets/projects/totalInk/dashboard.png";
import TotalInkPic1 from "../assets/projects/totalInk/pic1.png";
import TotalInkPic2 from "../assets/projects/totalInk/pic2.png";
import KeywordDashboard from "../assets/projects/keywordSpy/dashboard.png";
import KeywordPic1 from "../assets/projects/keywordSpy/pic1.png";
import KeywordPic2 from "../assets/projects/keywordSpy/pic2.png";
import ShopKeepersDashboard from "../assets/projects/shopKeepers/dashboard.png";
import ShopKeepersPic1 from "../assets/projects/shopKeepers/pic1.png";
import ShopKeepersPic2 from "../assets/projects/shopKeepers/pic2.png";
import MeasureRiskDashboard from "../assets/projects/measureRisk/dashboard.png";
import MeasureRiskPic1 from "../assets/projects/measureRisk/pic1.png";
import MeasureRiskPic2 from "../assets/projects/measureRisk/pic2.png";
import TwelveDashboard from "../assets/projects/twelve/dashboard.png";
import TwelvePic1 from "../assets/projects/twelve/pic1.png";
import TwelvePic2 from "../assets/projects/twelve/pic2.png";
import SevenCellsDashboard from "../assets/projects/sevenCells/dashboard.png";
import SevenCellsPic1 from "../assets/projects/sevenCells/pic1.png";
import SevenCellsPic2 from "../assets/projects/sevenCells/pic2.png";
import FosterDashboard from "../assets/projects/foster/dashboard.png";
import FosterPic1 from "../assets/projects/foster/pic1.png";
import FosterPic2 from "../assets/projects/foster/pic2.png";
import PluckitDashboard from "../assets/projects/pluckit/dashboard.png";
import PluckitPic1 from "../assets/projects/pluckit/pic1.png";
import PluckitPic2 from "../assets/projects/pluckit/pic2.png";
import CrashGameDashboard from "../assets/projects/crashGame/dashboard.png";
import CrashGamePic1 from "../assets/projects/crashGame/pic1.png";
import MakaiDashboard from "../assets/projects/makai/dashboard.png";
import MakaiPic1 from "../assets/projects/makai/pic1.png";
import MakaiPic2 from "../assets/projects/makai/pic2.png";
import MakaiPic3 from "../assets/projects/makai/pic3.png";
import { WorksConnectionData } from "../types";

export const works: WorksConnectionData = {
  edges: [
    {
      node: {
        id: "1",
        title: "TotalInk",
        images: [TotalInkDashboard],
        workTabs: [{ tab: "All" }, { tab: "Recent" }],
      },
    },
    {
      node: {
        id: "2",
        title: "KeywordSpy",
        images: [KeywordDashboard],
        workTabs: [{ tab: "All" }, { tab: "Recent" }, { tab: "AI" }],
      },
    },
    {
      node: {
        id: "3",
        title: "ShopKeepers",
        images: [ShopKeepersDashboard],
        workTabs: [
          { tab: "All" },
          { tab: "Recent" },
          { tab: "AI" },
          { tab: "Personal" },
        ],
      },
    },
    {
      node: {
        id: "4",
        title: "MeasureRiskReport",
        images: [MeasureRiskDashboard],
        workTabs: [
          { tab: "All" },
          { tab: "Recent" },
          { tab: "AI" },
          { tab: "Personal" },
        ],
      },
    },
    {
      node: {
        id: "5",
        title: "SevenCells",
        images: [SevenCellsDashboard],
        workTabs: [{ tab: "All" }],
      },
    },
    {
      node: {
        id: "6",
        title: "FosterMarketPlace",
        images: [FosterDashboard],
        workTabs: [{ tab: "All" }, { tab: "Recent" }, { tab: "Web3" }],
      },
    },
    {
      node: {
        id: "7",
        title: "TwelvFund",
        images: [TwelveDashboard],
        workTabs: [{ tab: "All" }, { tab: "Recent" }, { tab: "Web3" }],
      },
    },
    {
      node: {
        id: "8",
        title: "Pluckit",
        images: [PluckitDashboard],
        workTabs: [{ tab: "All" }, { tab: "Personal" }],
      },
    },
    {
      node: {
        id: "9",
        title: "CrashGame",
        images: [CrashGameDashboard],
        workTabs: [
          { tab: "All" },
          { tab: "Recent" },
          { tab: "Web3" },
          { tab: "Personal" },
        ],
      },
    },
    {
      node: {
        id: "10",
        title: "Makai",
        images: [MakaiDashboard],
        workTabs: [{ tab: "All" }, { tab: "Personal" }],
      },
    },
  ],
  pageInfo: {
    hasNextPage: false,
    endCursor: "string",
  },
};

export const worksData = [
  {
    id: "1",
    description:
      "The primary objective of this platform is to assist students in obtaining the necessary information from PDF files through the utilization of the PDFGPT bot.",
    title: "EducateAI",
    workUrl: "https://educate-ai.com",
    githubUrl: "string",
    clientName: "Devin Hatch",
    ownerName: "Jose Torres",
    techStack: [
      "Next.js",
      "Langchain",
      "AWS S3",
      "AWS amplify",
      "Prisma",
      "PlanetScale",
      "Clerk Authentication",
    ],
    userActions: [
      "Sign up or log in effortlessly through Google Authentication.",
      "Upload PDF files for in-depth analytics powered by the advanced GPT model.",
      "Experience the platform as a normal chat bot, even if you haven't uploaded a training file.",
      "Leverage the platform's capabilities to extract valuable information from uploaded training files based on query prompts.",
      "Access a comprehensive history of all interactions, stored in the database. Edit or remove specific items as needed.",
      "Elevate your experience by opting for the premium mode, available for purchase using Credit Card.",
    ],
    images: [TotalInkDashboard, TotalInkPic1, TotalInkPic2],
    date: "04/11/2023",
  },
  {
    id: "2",
    description:
      "KeywordSpy is the only scientifically backed on-page SEO keyword tool that helps SEOs navigate Google’s 5 major on-page AIs: Neural Matching, BERT, RankBrain, Helpful Content Update and Product Reviews.",
    title: "KeywordSpy",
    workUrl: "https://staging.trykeywordspy.com/",
    githubUrl: "string",
    clientName: "Peter Zmijewski",
    ownerName: "Jose Torres",
    techStack: [
      "Vue.js",
      "Tailwind CSS",
      "Langchain",
      "AWS S3",
      "Python/Django",
      "PostgreSQL",
      "Google Auth",
    ],
    userActions: [
      "Seamlessly sign up or log in through Google Authentication for a hassle-free onboarding experience.",
      "Create a new blog effortlessly by inputting a few keywords, leveraging the power of our AI models.",
      "Tailor your blog content to perfection using the intuitive TinyMCE editor. Enjoy features like a painter, drawing table, and image integration for a customized touch.",
      "Boost productivity by easily improving your blogs through our AI models, ensuring they align with Google's on-page AIs for optimal performance.",
      "Access a detailed history of all interactions, securely stored in our database. Edit or remove specific items to maintain control over your content and interactions.",
      "Once your blog is complete, effortlessly download it as a PDF file and print it, giving you the flexibility to share or archive your content.",
      "Elevate your experience by opting for our premium mode, available for purchase using Credit Card. Unlock advanced features and take your SEO journey to new heights.",
    ],
    images: [KeywordDashboard, KeywordPic1, KeywordPic2],
    date: "08/05/2023",
  },
  {
    id: "3",
    description:
      "The Shopkeepers is an ever-growing collection of our favorites, an opportunity for shopkeepers to share their stories and insights, and for you to explore and discover.",
    title: "ShopKeppers",
    workUrl: "https://theshopkeepers.com/",
    githubUrl: "string",
    clientName: "Paula Flynn",
    ownerName: "Jose Torres",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "MapBox",
      "AWS S3",
      "Node.js",
      "MySQL",
    ],
    userActions: [
      "Virtually visit independent shops nestled in special areas and delve into their unique stories and perspectives.",
      "Share your thoughts and insights by leaving comments about each shop. Your feedback adds a valuable layer to the narrative, fostering a sense of community.",
      "Be an active part of the community by contributing to shop rankings. Your input helps recognize and celebrate the standout shops, shaping the collective experience for all users.",
    ],
    images: [ShopKeepersDashboard, ShopKeepersPic1, ShopKeepersPic2],
    date: "09/19/2023",
  },
  {
    id: "4",
    description:
      "The measured risk report provides a comprehensive assessment of the potential risks and vulnerabilities associated with a particular project or initiative.",
    title: "MeasuredRiskReport",
    workUrl: "https://report.measuredrisk.com/",
    githubUrl: "string",
    clientName: "Anders Meyer",
    ownerName: "Jose Torres",
    techStack: [
      "React.js",
      "Ant Design",
      "AWS S3",
      "Python/Django",
      "PostgreSQL",
      "Google Auth",
    ],
    userActions: [
      "Seamlessly sign up or log in through Google Authentication for a hassle-free onboarding experience.",
      "Gain instant insights into business risks by simply entering a few keywords. Our advanced business AI model ensures you receive a comprehensive and user-friendly report.",
      "Easily access the report list by uploading an Excel file containing company information aligned with our AI model. Uncover valuable risk assessments based on the data you provide.",
      "Easily access the report list by uploading an Excel file containing company information aligned with our AI model. Uncover valuable risk assessments based on the data you provide.",
      "Dive deeper into risk analysis by opting for our premium mode. Purchase access to unlock detailed reports, providing a more thorough understanding of potential risks associated with your project or initiative.",
    ],
    images: [MeasureRiskDashboard, MeasureRiskPic1, MeasureRiskPic2],
    date: "07/20/2023",
  },
  {
    id: "5",
    description:
      "Seven Cells is the next standard for wellness, for people who understand the importance of quality and are not afraid to take their health into their own hands.",
    title: "SevenCells",
    workUrl: "https://sevencells.com",
    githubUrl: "string",
    clientName: "Konstantinos Dimopoulos",
    ownerName: "Jose Torres",
    techStack: [
      "Next.js",
      "AWS",
      "Graphql",
      "Apollo",
      "Tailwind CSS",
      "Saleor.io",
    ],
    userActions: [
      "Explore the diverse range of wellness products available on Seven Cells by navigating to the online store.",
      `Access the "Blog" section on the Seven Cells website to discover a wealth of health-related information.`,
      "Stay updated on the latest health trends and scientific advancements for a continuous journey toward a healthier lifestyle.",
      "Schedule a personalized consultation meeting with experienced professionals.  Share your health concerns and goals during the consultation for tailored treatment recommendations.",
      "Utilize account features to track your order history, revisit blog comments, and schedule consultation appointments.",
      "Participate in discussions, polls, or live events organized by Seven Cells for an interactive and supportive community experience.",
    ],
    images: [SevenCellsDashboard, SevenCellsPic1, SevenCellsPic2],
    date: "08/14/2022",
  },
  {
    id: "6",
    description:
      "Foster is on a mission to connect the world in a shared art experience. Our ecosystem and social platform channels serve to connect creators, builders, designers, collectors, and investors of digital art.",
    title: "FosterMarketplace",
    workUrl: "https://fostermarketplace.app/",
    githubUrl: "string",
    clientName: "Andrew Hanna",
    ownerName: "Jose Torres",
    techStack: [
      "Next.js",
      "AWS",
      "Graphql",
      "Apollo",
      "Web3",
      "Subgraph",
      "Tailwind CSS",
      "Solidity",
    ],
    userActions: [
      "Create unique Sneaker NFTs that embody your artistic vision.",
      "Seamlessly buy and sell Sneaker NFTs, unlocking new possibilities for digital art investment.",
      "Foster collaboration by lending/borrowing Sneaker NFTs, amplifying the shared experience within our vibrant community.",
      "Experience the power of fast and cost-effective transactions, ensuring that your digital art journey is both efficient and economical.",
      " Immerse yourself in a realm of community and social features, connecting with fellow creators, designers, collectors, and investors. Share, discuss, and celebrate the world of digital art together.",
    ],
    images: [FosterDashboard, FosterPic1, FosterPic2],
    date: "02/07/2023",
  },
  {
    id: "7",
    description: `The Twelve Fund is a pioneering staking platform designed exclusively for Generation Z and Millennials, 
    offering a unique opportunity to secure their financial future. By aiming for a remarkable 12% annual return, equivalent to 1% per month, 
    the platform not only strives to outpace traditional investment options but also provides these generations with a level of predictability crucial for 
    pension planning. With a commitment to transparency, Twelve Fund empowers users by showcasing the potential returns they can expect upon retirement, 
    filling a critical gap for those without defined income pensions.`,
    title: "Twelve Fund",
    workUrl: "https://mdi.ministrydesign.co.uk/",
    githubUrl: "string",
    clientName: "Bryn Beveridge",
    ownerName: "Jose Torres",
    techStack: [
      "Next.js",
      "AWS",
      "Graphql",
      "Apollo",
      "Material UI",
      "SubGraph",
      "Solidity",
      "Web3",
    ],
    userActions: [
      "Seamlessly invest in your financial future by staking, unstaking, and increasing your holdings of stable coins. Take control of your investments with just a few clicks, leveraging the power of our user-friendly interface.",
      "Gain insights into your potential returns and make informed decisions to maximize your financial gains.",
      "Engage in discussions, stay informed, and grow together with a community that shares your vision.",
    ],
    images: [TwelveDashboard, TwelvePic1, TwelvePic2],
    date: "10/18/2023",
  },
  {
    id: "8",
    description: `Pluckit is the new type of social network for finding Tradies. 
    A greater, more connected platform to leverage personalised referrals & recommendations suggested by people you know to hire reliable and trusted Tradies.`,
    title: "Pluckit",
    workUrl: "https://pluckit.com.au/",
    githubUrl: "string",
    clientName: "Michael Diaz",
    ownerName: "Jose Torres",
    techStack: ["Laravel", "SASS", "MySQL", "Google Auth"],
    userActions: [
      "Using socially-connected integrations, consumers leave recommendations on Tradies they've used.",
      "Friends, family members, or other relevant contacts (or other members of the public) can find these recommendations when searching for a Tradie. They can also see which ones to avoid.",
      "Tradies are then selected, being rewarded for their recommendations. It's a trusted, educated process for all.",
    ],
    images: [PluckitDashboard, PluckitPic1, PluckitPic2],
    date: "04/14/2022",
  },
  {
    id: "9",
    description: `Crash gambling games involve a multiplier increasing steadily until it simply stops (or “crashes”). 
    The player places a bet of whatever size they see fit, and if they can cash out before the multiplier stops, 
    then they will win their original bet times the multiplier.`,
    title: "CrashGame",
    workUrl: "https://crash.ddog.club/",
    githubUrl: "string",
    clientName: "Harrison Watts",
    ownerName: "Jose Torres",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Solidity",
      "Web3",
      "Canvas",
    ],
    userActions: [
      "In the casino crash game, users log in and deposit funds into their casino account.",
      "They navigate to the crash game section and place a bet, specifying a desired multiplier or enabling auto cash out.",
      "As the multiplier curve rises, players monitor the game's progress and strategically choose the optimal moment to cash out.",
      "After the crash, the system reveals the final multiplier, determining whether the bet was successful.",
      "Players then collect their winnings or face potential losses, and they can review statistics before deciding to place another bet or explore other games on the platform.",
    ],
    images: [CrashGameDashboard, CrashGamePic1],
    date: "11/26/2023",
  },
  {
    id: "10",
    description: `Makai, our cutting-edge application, seamlessly facilitates the booking of personalized shopping excursions through a user-friendly 
    website interface. Empowering customers with the ability to select the ideal shopping destination based on hourly rates, shop types, and anticipated 
    travel duration, Makai delivers a sophisticated and tailored experience.`,
    title: "Makai",
    workUrl: "https://dribbble.com/shots/18423079-MAKAI#",
    githubUrl: "string",
    clientName: "Kinsley Stofft",
    ownerName: "Jose Torres",
    techStack: [
      "Fluter",
      "Firebase",
      "Node.js",
      "MongoDB",
      "Typescript",
      "Google Map",
    ],
    userActions: [
      "Seamlessly sign up or log in through Google Authentication for a hassle-free onboarding experience.",
      "Visit the user-friendly website interface for booking ideal shopping destination based on hourly rates, shop types and anticipated travel duration.",
      "Share your thoughts and insights by leaving comments about each ship. Your feedback adds a valuable layer to the narrative, fostering a sense of community.",
    ],
    images: [MakaiDashboard, MakaiPic1, MakaiPic2, MakaiPic3],
    date: "11/02/2022",
  },
];
