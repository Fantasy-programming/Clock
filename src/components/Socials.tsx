import Twitter from "../assets/twitter.svg?react";
import Github from "../assets/github.svg?react";
import Facebook from "../assets/facebook.svg?react";

function Socials() {
  return (
    <div className="flex order-last justify-center items-center lg:order-first lg:justify-end gap-8 py-8">
      <Facebook width="18px" height="18px" />
      <Twitter width="25px" height="25px" />
      <Github width="22px" height="22px" />
    </div>
  );
}

export default Socials;
