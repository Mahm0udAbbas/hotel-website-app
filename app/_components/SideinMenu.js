import React from "react";
import Logo from "./Logo";
import Link from "next/link";

export default function SideinMenu({ state, toggleMenu }) {
  return (
    <div
      className={`fixed top-0 left-0 w-3/4 max-w-sm h-full  bg-primary-700 z-20  transition-transform duration-300 ${
        state ? "translate-x-0" : "-translate-x-full"
      } sm:hidden`}
    >
      <div className="p-2 flex items-center justify-between">
        <Logo />
        <button
          className="text-2xl  focus:outline-none"
          onClick={toggleMenu}
          aria-label="Close Menu"
        >
          &#10005;
        </button>
      </div>
      <ul className="flex flex-col gap-8 items-start mt-8 ml-4">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
            onClick={toggleMenu}
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
            onClick={toggleMenu}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors"
            onClick={toggleMenu}
          >
            Guest area
          </Link>
        </li>
      </ul>
    </div>
  );
}
