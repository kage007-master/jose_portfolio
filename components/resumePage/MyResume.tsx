import IconTitle from "./IconTitle";
import ResumeItem from "./ResumeItem";
import { FaGraduationCap, FaNetworkWired } from "react-icons/fa";
import { ExperienceData } from "../../types";
import { experiences } from "../../config/experiences";
import { education } from "../../config/education";

interface ExperienceQuery {
  resumes: ExperienceData[];
}

export default function MyResume() {
  return (
    <ul className="grid grid-cols-1">
      <li className="py-8 px-12">
        <IconTitle title="experience" Icon={FaNetworkWired} />

        {experiences.map((r, idx) => (
          <ResumeItem
            key={r.id}
            resume={r}
            border={idx !== experiences.length - 1}
          />
        ))}
      </li>

      <li className="py-8 px-12 relative vCustomLine sm:before:block before:hidden before:left-0">
        <IconTitle title="education" Icon={FaGraduationCap} />

        <ResumeItem key={education.id} resume={education} />
      </li>
    </ul>
  );
}
