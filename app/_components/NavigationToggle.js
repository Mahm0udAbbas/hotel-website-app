"use client";
import { useState } from "react";
import Overlay from "./Overlay";
import SideinMenu from "./SideinMenu";

export default function NavigationToggle({ children }) {
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
      {children}
    </nav>
  );
}
