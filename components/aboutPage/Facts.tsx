import {
  BsAwardFill,
  BsCodeSlash,
  BsGlobe,
  BsJournalAlbum,
} from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import Fact from "./Fact";

export default function Facts() {
  return (
    <ul className="grid grid-cols-2 mb-12 logos sm:grid-cols-4">
      <Fact Icon={BsJournalAlbum} desc="Large network of devs" border />
      <Fact Icon={BsAwardFill} desc="6+ years exp at startups" border />
      <Fact Icon={BsCodeSlash} desc="90% thinking 10% coding" border />
      <Fact Icon={BsGlobe} desc="15+ global clients" />
    </ul>
  );
}
