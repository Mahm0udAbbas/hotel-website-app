import React from "react";

export default function Overlay({ state }) {
  return (
    <div
      className={`fixed left-0 top-0 h-full w-full bg-black bg-opacity-50 transition-opacity duration-300 ${
        state ? "visible opacity-100" : "invisible opacity-0"
      } sm:hidden`}
    ></div>
  );
}
