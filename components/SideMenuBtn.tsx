import { ReactiveVar } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";
import { MenuData } from "../types";

interface Props {
  menu: MenuData;
  noBorder?: boolean;
  active: boolean;
  setMenuId: (id: number) => void;
  setShowMenu: (flag: boolean) => void;
  last: boolean;
}

export default function SideMenuBtn({
  menu,
  active,
  setMenuId,
  setShowMenu,
  last,
}: Props) {
  function handleClick(): void {
    setShowMenu(false);
    setMenuId(menu.id);
  }

  return (
    <button
      onClick={handleClick}
      className={`flex items-center w-full py-8 pl-14 hover:bg-[rgb(27,36,48)] transition-all duration-300 ${
        active ? "text-gray-300" : "text-gray-500"
      } text-2xl gap-6 border-0 ${
        last && "border-b-2"
      } border-t-2 border-[rgb(24,33,44)] border-solid capitalize font-medium`}
    >
      <menu.Icon className="" />
      {menu.label}
    </button>
  );
}
