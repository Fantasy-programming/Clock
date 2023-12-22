import SideBar from "@/components/SideBar";
import Timecadrant from "@/components/TimeCadrant";

const Home = () => {
  return (
    <>
      <div className="flex lg:overflow-hidden flex-col lg:flex-row h-full font-barlow-condensed">
        <Timecadrant />
        <SideBar />
      </div>
    </>
  );
};

export default Home;
