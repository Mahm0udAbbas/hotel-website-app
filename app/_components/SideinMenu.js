"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import SideNavigation from "./SideNavigation";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function SideinMenu({ state, toggleMenu }) {
  const [isOpen, setIsOpen] = useState(false);
  function openDropdown() {
    setIsOpen(!isOpen);
  }
  function handleCloseMenu() {
    setIsOpen(false);
    toggleMenu();
    console.log("iam clicked");
  }

  return (
    <div
      className={`fixed left-0 top-0 z-10 h-full w-3/4 max-w-sm bg-primary-700 transition-transform duration-300 ${
        state ? "translate-x-0" : "-translate-x-full"
      } md:hidden`}
    >
      <div className="flex items-center justify-between p-2">
        <Logo />
        <button
          className="text-2xl focus:outline-none"
          onClick={handleCloseMenu}
          aria-label="Close Menu"
        >
          &#10005;
        </button>
      </div>
      <ul className="mt-8 flex flex-col items-start">
        <li
          onClick={handleCloseMenu}
          className="w-full cursor-pointer border-solid border-b-accent-400 transition duration-300 ease-in-out hover:border-b-2 hover:bg-primary-900 hover:text-accent-400"
        >
          <Link href="/cabins" className="inline-block w-full px-4 py-4">
            Cabins
          </Link>
        </li>
        <li
          onClick={handleCloseMenu}
          className="w-full cursor-pointer border-solid border-b-accent-400 transition duration-300 ease-in-out hover:border-b-2 hover:bg-primary-900 hover:text-accent-400"
        >
          <Link href="/about" className="inline-block w-full px-4 py-4">
            About
          </Link>
        </li>
        <li
          onClick={openDropdown}
          className="flex w-full cursor-pointer items-center justify-between border-solid border-b-accent-400 py-4 transition duration-300 ease-in-out hover:border-b-2 hover:bg-primary-900 hover:text-accent-400"
        >
          <span className="ml-4">Guest area</span>
          {/* {isOpen ? ( */}
          <ChevronDownIcon
            className={`transition-transform ${isOpen ? "rotate-0" : "-rotate-90"} h-7 w-7 origin-center p-2 duration-300 ease-in-out`}
          />
        </li>
        <ul
          className={`transition-max-height flex w-full flex-col items-start gap-8 overflow-hidden duration-300 ease-in-out ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <SideNavigation toggleMenu={handleCloseMenu} />
        </ul>
      </ul>
    </div>
  );
}
