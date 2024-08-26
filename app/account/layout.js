import React from "react";
import SideNavigation from "../_components/SideNavigation";

export default function layout({ children }) {
  return (
    <div className="h-[calc(100% -100px)] container mx-auto grid grid-cols-1 gap-12 md:grid-cols-[16rem_1fr]">
      <div className="hidden md:block">
        <SideNavigation />
      </div>
      <div className="py-1">{children}</div>
    </div>
  );
}
