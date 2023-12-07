import { useMemo, useState } from "react";
import Title from "../Title";
import Work from "./Work";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader";
import { motion, AnimatePresence } from "framer-motion";
import { works } from "../../config/works";

interface WorksVariables {
  after?: string;
  first: number;
}

export default function Works() {
  const [currentMenu, setCurrentMenu] = useState<string>("All");
  const filterWorks = useMemo(() => {
    return works.edges.filter((w) =>
      w.node.workTabs.some((t) => t.tab === currentMenu)
    );
  }, [currentMenu]);
  return (
    <div
      id="scrollableDiv"
      className="lg:h-full h-[95rem] overflow-y-scroll myScroll"
    >
      <Title
        name="works"
        currentMenu={currentMenu}
        setCurrentMenu={setCurrentMenu}
      />

      <InfiniteScroll
        dataLength={works.edges.length}
        next={() => {}}
        hasMore={works.pageInfo.hasNextPage}
        loader={
          <div className="flex justify-center mb-8">
            <Loader />
          </div>
        }
        scrollableTarget="scrollableDiv"
      >
        <motion.ul
          layout="position"
          className="grid grid-cols-1 sm:grid-cols-2 relative vCustomLine before:hidden sm:before:block before:left-1/2 before:-translate-x-1/2 pt-12"
        >
          <AnimatePresence>
            {filterWorks.map((w) => (
              <Work
                key={w.node.id}
                title={w.node.title}
                imageUrl={w.node.images[0]}
                projectId={w.node.id}
              />
            ))}
          </AnimatePresence>
        </motion.ul>
      </InfiniteScroll>
    </div>
  );
}
