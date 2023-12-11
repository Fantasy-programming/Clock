import useAstro from "../hooks/useAstro";

import Aquarius from "../assets/aquarius.svg?react";
// import Virgo from "../assets/virgo.svg";
// import Taurus from "../assets/taurus.svg";
// import Leo from "../assets/leo.svg";
// import Cancer from "../assets/cancer.svg";
// import Gemini from "../assets/gemini.svg";
// import Balance from "../assets/balance.svg";
// import Capricorn from "../assets/capricorn.svg";
// import Sagittarius from "../assets/sagittarius.svg";

function Astrology({ date }) {
  const sign = useAstro(date);

  return (
    <div className="flex px-3 order-2 lg:order-first pt-2  items-center justify-center lg:justify-start gap-8">
      <div className="rounded-full p-2 border-2 border-tertiary ">
        <Aquarius width="25px" height="25px" />
      </div>
      <p className="uppercase font-medium">capricorn</p>
    </div>
  );
}

export default Astrology;