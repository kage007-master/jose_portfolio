import { BsCheckLg } from "react-icons/bs";
import { FieldValueData } from "../../types";
import KnowledgeSkeleton from "./KnowledgeSkeleton";

interface Props {
  knowledge: string[] | undefined;
}

export default function Knowledge({ knowledge }: Props) {
  return (
    <div className="py-11">
      {knowledge ? (
        knowledge.map((k, idx) => (
          <div key={idx} className="flex gap-6 items-center mb-6">
            <div className="h-[15px] w-[15px]">
              <BsCheckLg className="text-primary text-2xl" />
            </div>
            <span className="text-gray-300 text-xl">{k}</span>
          </div>
        ))
      ) : (
        <>
          {new Array(8).fill(0).map((_, idx) => (
            <KnowledgeSkeleton key={idx} />
          ))}
        </>
      )}
    </div>
  );
}
