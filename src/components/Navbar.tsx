import Stars from "../assets/stars.svg?react";

const Navbar = () => {
  return (
    <div className="py-14 px-14 flex gap-28">
      <div>
        <Stars width="100px" height="100px" />
      </div>
      <nav className="flex gap-28">
        <div className="pt-1">
          <ul className="flex gap-5 uppercase font-semibold">
            <li>
              <a href="">home</a>
            </li>
            <li>.</li>
            <li>
              <a href="">about</a>
            </li>
            <li>.</li>
            <li>
              <a href="">credit</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <span>burger</span>
          <span>star</span>
          <span>search</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
