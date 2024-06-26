import type { NextPage } from "next";
import Head from "next/head";
import Background from "../components/Background";
import LoaderPage from "../components/LoaderPage";
import Menus from "../components/Menus";
import ProfileCard from "../components/ProfileCard";
import "react-loading-skeleton/dist/skeleton.css";
import { ProfileData } from "../types";
import { profileData } from "../config/profile";
import { menus } from "../data";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useContext } from "react";
import { Toaster } from "react-hot-toast";
import WorkLb from "../components/worksPage/WorkLb";
import SideMenuLb from "../components/SideMenuLb";
import { BiMenu } from "react-icons/bi";
import { PortfolioContext } from "../components/context";
import { Animation } from "../components/animation";
interface Props {
  profileData: ProfileData;
}

const clipPaths = [
  "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)",
  "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
];

const Home: NextPage<Props> = ({ profileData }) => {
  const { menuId, showMenu, workId, setMenuId, setShowMenu, setWorkId } =
    useContext(PortfolioContext);
  const [loaderPage, setLoaderPage] = useState<boolean>(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setLoaderPage(false), 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [setLoaderPage]);

  return (
    <main className="relative flex items-center justify-center min-h-screen home">
      <Head>
        <title>Portfolio</title>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jose Torres | Full stack Developer" />
        <meta property="og:description" content="Full Stack Developer" />
        <meta property="og:url" content="https://portfolio-josetorres.vercel.app/" />
        <meta property="og:site_name" content="Jose Torres | Full Stack Developer" />
        <meta property="article:publisher" content="https://portfolio-josetorres.vercel.app/" />
        <meta property="og:image" content="https://portfolio-josetorres.vercel.app/images/jose.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Jose" />
        <meta name="twitter:title" content="Full Stack Developer | Blockchain Developer | AI Solutions engineer" />
        <meta name="twitter:description" content="Web Developer" />
        <meta name="author" content="Jose Torres" />
        <meta name="description" content="Full Stack Developer with a passion for backend development and artificial intelligence." />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="q9koIGW2YKelYpxe4sdR0S8bnaTX0-MDX4RBwDMgpUc" />
        <meta name="keywords" content="" data-rh="true" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loaderPage && <LoaderPage />}
      <Background />
      <Animation />

      <AnimatePresence>
        {workId && <WorkLb workId={workId} setWorkId={setWorkId} />}
      </AnimatePresence>

      <SideMenuLb
        profile={profileData}
        showMenu={showMenu}
        menuId={menuId}
        setShowMenu={setShowMenu}
        setMenuId={setMenuId}
      />

      <button
        onClick={() => setShowMenu(true)}
        className="fixed z-40 flex items-center justify-center text-white rounded-full top-6 right-6 w-14 h-14 bg-primary lg:hidden"
      >
        <BiMenu className="w-10 h-10" />
      </button>

      <section className="z-10 w-full h-full lg:w-[115rem] xl:w-[126.8rem] lg:h-[62.5rem] lg:flex p-10 sm:p-24 lg:p-0">
        <Menus
          menuId={menuId}
          setMenuId={setMenuId}
          setShowMenu={setShowMenu}
        />
        <ProfileCard profileData={profileData} />

        <div className="xl:w-[70.5rem] lg:w-[66rem] w-full h-full lg:py-6">
          <div className="relative bg-gray-900 h-full before:content-[''] before:absolute before:top-0 before:left-0 before:right-[0.7rem] before:h-6 before:bg-gray-900 before:z-30 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-[0.7rem] after:h-6 after:bg-gray-900 after:z-30">
            <AnimatePresence mode="wait">
              {menus.map(
                (m) =>
                  menuId === m.id && (
                    <motion.div
                      key={m.id}
                      className="w-full h-full max-h-full bg-gray-900"
                      initial="initialState"
                      animate="animateState"
                      exit="exitState"
                      transition={{
                        duration: 0.75,
                      }}
                      variants={{
                        initialState: {
                          opacity: 0,
                          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                        },
                        animateState: {
                          opacity: 1,
                          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                        },
                        exitState: {
                          clipPath:
                            clipPaths[
                              Math.floor(Math.random() * clipPaths.length)
                            ],
                        },
                      }}
                    >
                      <m.Component />
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <Toaster />
    </main>
  );
};

export async function getStaticProps() {
  return {
    props: {
      profileData,
    },
    revalidate: 3600,
  };
}

export default Home;
