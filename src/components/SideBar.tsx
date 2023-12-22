import Astrology from "./Astrology";
import Highlight from "./Highlight";
import Hours from "./Hours";
import Socials from "./Socials";
import InfoHeader from "./InfoHeader";
import Holidays from "./Holidays";
import Birth from "./Birth";

function SideBar() {
  return (
    <div className="lg:w-[430px] flex flex-col w-full bg-secondary px-8 rounded-t-[2rem] md:rounded-none shadow-lg ">
      <Socials />
      <Astrology />
      <Hours />
      <InfoHeader text="Holiday" />
      <Holidays />
      <InfoHeader text="They were born today" />
      <Birth />
      <InfoHeader text="This day in history" />
      <Highlight />
    </div>
  );
}

export default SideBar;
