import { MenuData } from "../types";

interface Props {
  menu: MenuData;
  noBorder?: boolean;
  active: boolean;
  setMenuId: (id: number) => void;
}

export default function MenuBtn({ menu, noBorder, active, setMenuId }: Props) {
  return (
    <div
      onClick={() => setMenuId(menu.id)}
      className={`${
        noBorder ? "" : "relative customLine before:bottom-0 borderRight"
      } h-[7.2rem] bg-gray-900 group gap-2 flex flex-col items-center justify-center cursor-pointer ${
        active ? "text-primary" : "text-gray-300"
      }`}
    >
      <menu.Icon className="text-[2rem] transition-all duration-300 group-hover:text-primary" />
      <p className="uppercase text-base font-medium transition-all duration-300 group-hover:text-primary">
        {menu.label}
      </p>
    </div>
  );
}
