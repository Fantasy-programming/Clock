import Twitter from "@/assets/twitter.svg?react";
import Github from "@/assets/github.svg?react";
import Facebook from "@/assets/facebook.svg?react";

function Socials() {
  return (
    <div className="flex order-last justify-center items-center lg:order-first lg:justify-end gap-8 py-8">
      <a href="https://twitter.com/ridyrich">
        <Facebook width="18px" height="18px" className="fill-tertiary" />
      </a>
      <a href="https://twitter.com/ridyrich">
        <Twitter width="25px" height="25px" className="fill-tertiary" />
      </a>
      <a href="https://github.com/Fantasy-programming">
        <Github width="22px" height="22px" className="fill-tertiary" />
      </a>
    </div>
  );
}

export default Socials;
