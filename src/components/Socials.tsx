import Twitter from "../assets/twitter.svg?react";
import Github from "../assets/github.svg?react";
import Facebook from "../assets/facebook.svg?react";

function Socials() {
  return (
    <div className="flex order-last justify-center items-center lg:order-first lg:justify-end gap-8 py-6">
      <Facebook width="20px" height="20px" />
      <Twitter width="30px" height="30px" />
      <Github width="25px" height="25px" />
    </div>
  );
}

export default Socials;
