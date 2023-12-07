import { ProfileData } from "../types";
import UserAvatar from "../assets/jose.png";
import TotalInkDashboard from "../assets/projects/totalInk/dashboard.png";
import KeywordDashboard from "../assets/projects/keywordSpy/dashboard.png";
import ShopKeepersDashboard from "../assets/projects/shopKeepers/dashboard.png";
import MeasureRiskDashboard from "../assets/projects/measureRisk/dashboard.png";
import TwelveDashboard from "../assets/projects/twelve/dashboard.png";
import SevenCellsDashboard from "../assets/projects/sevenCells/dashboard.png";
import FosterDashboard from "../assets/projects/foster/dashboard.png";
import PluckitDashboard from "../assets/projects/pluckit/dashboard.png";
import CrashGameDashboard from "../assets/projects/crashGame/dashboard.png";
import MakaiDashboard from "../assets/projects/makai/dashboard.png";

export const profileData: ProfileData = {
  id: "jose.torres",
  cv: "https://drive.google.com/file/d/1gBM14jTNTgkRh9Ph_2H3XM1DzwzY2JER/view",
  name: "Jose Torres",
  ownersPhoto: UserAvatar,
  bgImages: [
    TotalInkDashboard,
    KeywordDashboard,
    ShopKeepersDashboard,
    MeasureRiskDashboard,
    TwelveDashboard,
    SevenCellsDashboard,
    FosterDashboard,
    PluckitDashboard,
    CrashGameDashboard,
    MakaiDashboard,
  ],
};
