"use client";
import Link from "next/link";
import { useState } from "react";
import Overlay from "./Overlay";
import SideinMenu from "./SideinMenu";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="relative z-10">
      {!isOpen && (
        <div className="sm:hidden flex justify-between items-center p-4">
          <button
            className=" text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            &#9776;
          </button>
        </div>
      )}
      <Overlay state={isOpen} />
      <SideinMenu state={isOpen} toggleMenu={toggleMenu} />
      <ul className="hidden sm:flex flex-row gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors"
          >
            Guest area
          </Link>
        </li>
      </ul>
    </nav>
  );
}
