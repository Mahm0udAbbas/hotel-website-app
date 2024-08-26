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
        <div className="flex items-center justify-between p-4 md:hidden">
          <button
            className="text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            &#9776;
          </button>
        </div>
      )}
      <Overlay state={isOpen} />
      <SideinMenu state={isOpen} toggleMenu={toggleMenu} />
      <ul className="hidden flex-row items-center gap-16 md:flex">
        <li>
          <Link
            href="/cabins"
            className="transition-colors hover:text-accent-400"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="transition-colors hover:text-accent-400"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="transition-colors hover:text-accent-400"
          >
            Guest area
          </Link>
        </li>
      </ul>
    </nav>
  );
}
