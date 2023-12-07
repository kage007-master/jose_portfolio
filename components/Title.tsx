import { useQuery } from "@apollo/client";
import workOperations from "../graphqlOperations/work";
interface Props {
  name: string;
  currentMenu?: string;
  setCurrentMenu?: (tab: string) => void;
}

export default function Title({ name, currentMenu, setCurrentMenu }: Props) {
  const workTabs = [
    { tab: "All" },
    { tab: "Recent" },
    { tab: "Web3" },
    { tab: "AI" },
    { tab: "Personal" },
  ];
  const handler = (tab: string) => {
    if (!setCurrentMenu) return;
    setCurrentMenu(tab);
  };
  return (
    <div className="customLine relative before:bottom-0 borderLeft z-20 py-10 flex flex-wrap gap-8 justify-center sm:justify-between items-center">
      <span className="ml-12 customCircle relative tracking-wide capitalize text-3xl text-gray-300 font-medium">
        {name}
      </span>

      {currentMenu && (
        <ul className="flex flex-wrap items-center gap-6 mr-12 ml-12">
          {workTabs.map((menu, idx) => (
            <li
              key={idx}
              onClick={() => handler(menu.tab)}
              className={`text-[1.4rem] cursor-pointer tracking-wide ${
                currentMenu === menu.tab ? "text-primary" : "text-gray-300"
              }`}
            >
              {menu.tab}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
