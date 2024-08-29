"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";

export default function Filter() {
  const searchParams = useSearchParams();
  const activeFilter = searchParams.get("capacity");
  const router = useRouter();
  const pathName = usePathname();
  function handleFilter(filter) {
    const param = new URLSearchParams(searchParams);
    param.set("capacity", filter);
    router.replace(`${pathName}?${param.toString()}`, { scroll: false });
  }
  return (
    <div className="grid w-full grid-cols-2 border border-primary-800 sm:w-auto sm:grid-cols-4">
      <FilterButton
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All cabins
      </FilterButton>
      <FilterButton
        filter="small"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        1-3 guests
      </FilterButton>
      <FilterButton
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4-7 guests
      </FilterButton>
      <FilterButton
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8-12 guests
      </FilterButton>
    </div>
  );
}

function FilterButton({ filter, activeFilter, handleFilter, children }) {
  return (
    <button
      className={`border-r border-primary-800 px-4 py-2 hover:bg-primary-700 ${activeFilter === filter ? "bg-primary-700 text-primary-50" : ""}`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}
