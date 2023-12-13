import Stars from "../assets/stars.svg?react";
import Star from "../assets/star.svg?react";
import Burger from "../assets/burger.svg?react";
import Search from "../assets/search.svg?react";

const Navbar = () => {
  return (
    <div className="lg:py-14 py-8 pb-4 lg:px-14 px-8 flex justify-between lg:justify-normal lg:gap-28 gap-12">
      <div>
        <Stars width="100px" height="100px" />
      </div>
      <nav className="flex gap-28">
        <div className="pt-1 lg:block hidden">
          <ul className="flex gap-5 uppercase font-semibold">
            <li>
              <a className="focus:underline hover:underline underline-offset-4 decoration-wavy" href="/">
                home
              </a>
            </li>
            <li>.</li>
            <li>
              <a className="focus:underline hover:underline underline-offset-4 decoration-wavy" href="/about">
                about
              </a>
            </li>
            <li>.</li>
            <li>
              <a
                className="focus:underline hover:underline underline-offset-4 decoration-wavy"
                href="https://www.instagram.com/studio20.my/"
              >
                credit
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex pt-4 lg:pt-1 gap-8">
            <Burger width="20px" height="20px" />
            <a href="https://github.com/Fantasy-programming/Clock">
              <Star width="20px" height="20px" />
            </a>
            <Search width="20px" height="20px" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
