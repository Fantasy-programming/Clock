import Astrology from "./Astrology";
import Highlight from "./Highlight";
import Hours from "./Hours";
import Items from "./Items";
import Socials from "./Socials";
import InfoHeader from "./InfoHeader";

function SideBar() {
  return (
    <div className="lg:w-[430px] flex flex-col w-full h-full bg-secondary px-8">
      <Socials />
      <Astrology />
      <Hours />
      <InfoHeader text="holiday" />
      <Items />
      <InfoHeader text="national day calendar" />
      <Items />
      <InfoHeader text="this day in history" />
      <Highlight />
    </div>
  );
}

export default SideBar;
