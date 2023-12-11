import { useContext } from "react";
import useAstro from "../hooks/useAstro";
import DateContext from "../global/dateContext";

function Astrology() {
  const [date] = useContext(DateContext);
  const [sign, Icon] = useAstro(date);

  return (
    <div className="flex px-3 order-2 lg:order-first pt-2  items-center justify-center lg:justify-start gap-8">
      <div className="rounded-full p-2 border-2 border-tertiary ">
        <Icon width="25px" height="25px" />
      </div>
      <p className="uppercase font-medium">{sign}</p>
    </div>
  );
}

export default Astrology;
