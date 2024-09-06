"use client";

import { useFormStatus } from "react-dom";
import SpinnerMini from "./SpinnerMini";
export default function Button({ children, pendingLabel }) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="bg-accent-500 px-8 py-4 font-semibold text-primary-800 transition-all hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      {pending ? (
        <div className="flex items-center justify-between gap-2">
          {" "}
          <SpinnerMini /> <span>{pendingLabel}</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
}
