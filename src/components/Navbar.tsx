import { Link } from "react-router-dom";
import { confettiBurger } from "@/utils/confetti";

import Stars from "@/assets/stars.svg?react";
import Star from "@/assets/star.svg?react";
import Burger from "@/assets/burger.svg?react";
import Pomodoro from "@/assets/pomo.svg?react";

const Navbar = () => {
  const surprise = () => {
    confettiBurger();
  };

  return (
    <div className="lg:py-14 py-8 pb-4 lg:px-14 px-8 flex justify-between lg:justify-normal lg:gap-28 gap-12">
      <Link to="/">
        <Stars width="100px" height="100px" />
      </Link>
      <nav className="flex gap-28">
        <div className="pt-1 lg:block hidden">
          <ul className="flex gap-5 uppercase font-semibold">
            <li>
              <Link
                className="focus:underline hover:underline underline-offset-4 decoration-wavy"
                to="/"
              >
                home
              </Link>
            </li>
            <li>.</li>
            <li>
              <Link
                className="focus:underline hover:underline underline-offset-4 decoration-wavy"
                to="/pomo"
              >
                pomodoro
              </Link>
            </li>
            <li>.</li>
            <li>
              <Link
                className="focus:underline hover:underline underline-offset-4 decoration-wavy"
                to="/about"
              >
                about
              </Link>
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
            <button onClick={() => surprise()} type="button">
              <Burger width="20px" height="20px" className="fill-tertiary" />
            </button>
            <Link to="/pomo" className="lg:hidden block">
              <Pomodoro width="20px" height="20px" className="fill-tertiary" />
            </Link>
            <a href="https://github.com/Fantasy-programming/Clock">
              <Star width="20px" height="20px" className="fill-tertiary" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
