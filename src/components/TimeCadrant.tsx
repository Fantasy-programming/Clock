import React from "react";

function TimeCadrant() {
  return (
    <div className="w-3/4">
      <div>
        <nav className="flex gap-20">
          <div className="flex gap-4">
            <li>
              <a href="">home</a>
            </li>
            <li>
              <a href="">about</a>
            </li>
            <li>
              <a href="">credit</a>
            </li>
          </div>
          <div className="flex gap-4">
            <span>burger</span>
            <span>star</span>
            <span>search</span>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default TimeCadrant;
