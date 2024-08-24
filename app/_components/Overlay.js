import React from "react";

export default function Overlay({ state }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-300 ${
        state ? "opacity-100 visible" : "opacity-0 invisible"
      } sm:hidden`}
    ></div>
  );
}
