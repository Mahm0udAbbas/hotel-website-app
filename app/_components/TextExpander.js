"use client";

import React, { useState } from "react";

export default function TextExpander({ children }) {
  const [isExpand, setIsExpand] = useState(false);

  const displayText = isExpand
    ? children
    : children.split(" ").slice(0, 40).join(" ") + "....";

  function handleToggle() {
    setIsExpand(!isExpand);
  }
  return (
    <span>
      {displayText}
      <button
        onClick={handleToggle}
        className="leading-3 text-primary-700 underline"
      >
        {isExpand ? "Show less" : "Show more"}
      </button>
    </span>
  );
}
