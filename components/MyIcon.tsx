import { IconType } from "react-icons";
interface Props {
  Icon: IconType;
  size?: string;
}

export default function MyIcon({ Icon, size }: Props) {
  return (
    <div
      className={`icon ${
        size ? size : "w-24 h-24"
      } rounded-full border-2 border-[#29e9ff] border-solid flex items-center justify-center`}
    >
      <Icon className="text-5xl text-[#29e9ff]" />
    </div>
  );
}
