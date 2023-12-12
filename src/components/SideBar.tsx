import Astrology from "./Astrology";
import Highlight from "./Highlight";
import Hours from "./Hours";
import Socials from "./Socials";
import InfoHeader from "./InfoHeader";
import Holidays from "./Holidays";
import Birth from "./Birth";

function SideBar() {
  return (
    <div className="lg:w-[430px] flex flex-col w-full bg-secondary px-8 ">
      <Socials />
      <Astrology />
      <Hours />
      <InfoHeader text="holiday" />
      <Holidays />
      <InfoHeader text="Today | They were born today" />
      <Birth />
      <InfoHeader text="this day in history" />
      <Highlight />
    </div>
  );
}

export default SideBar;
