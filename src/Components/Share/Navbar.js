import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="navbar bg-[#fbbd23]">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Susmoy Sarkar
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Link 2</Link>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-base-100">
                  <li>
                    <Link to="/">Link 1</Link>
                  </li>
                  <li>
                    <Link to="/">Link 2</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <ThemeSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
