import { AiFillLinkedin } from "react-icons/ai";
import { BsFillCloudArrowDownFill } from "react-icons/bs";
import { ProfileData } from "../types";
import MediaIcons from "./MediaIcons";
import MyLink from "./MyLink";
import Image from "next/image";
import Slide from "./Slide";
import Typing from "./Typing";
interface Props {
  profileData: ProfileData;
}

export default function ProfileCard({ profileData }: Props) {
  return (
    <div className="profile h-full lg:w-[42rem] xl:w-[48rem] bg-gray-900 rounded-lg relative lg:block hidden">
      <div className="relative z-40 w-full h-full myShadow">
        <Slide images={profileData.bgImages} />

        <div className="relative z-20 w-56 h-56 mx-auto rounded-full -mt-36 profilePic !border-4 !border-r-lime-300">
          <Image
            src={profileData.ownersPhoto}
            alt="userPic"
            width="140"
            height="140"
            className="w-full h-full block p-0 z-20 relative object-cover rounded-full "
          />
        </div>

        <h1 className="text-center text-gray-300 text-[3.4rem] font-medium mt-4 mb-0.5">
          {profileData.name}
        </h1>

        <Typing />
        <MediaIcons />

        <div className="absolute bottom-0 left-0 flex w-full h-28 borderLeft customLine">
          <MyLink
            name="download cv"
            Icon={BsFillCloudArrowDownFill}
            url={profileData.cv}
            border
          />
          <MyLink
            name="my linkedin"
            Icon={AiFillLinkedin}
            url="https://www.linkedin.com/in/jose4utorres/"
          />
        </div>
      </div>
    </div>
  );
}
