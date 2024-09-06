"use client";

import { TrashIcon } from "@heroicons/react/24/solid";
import { deleteReservation } from "../_lib/actions";
import { useTransition } from "react";
import SpinnerMini from "./SpinnerMini";

function DeleteReservation({ bookingId }) {
  const [isPending, stratTransition] = useTransition();
  function handleDeleting() {
    if (confirm("Are you sure you want to delete")) {
      stratTransition(() => deleteReservation(bookingId));
    }
  }

  return (
    <button
      onClick={handleDeleting}
      className="group flex flex-grow items-center justify-center gap-2 px-3 py-4 text-xs font-bold uppercase text-primary-300 transition-colors hover:bg-accent-600 hover:text-primary-900"
    >
      {isPending ? (
        <div className="flex items-center justify-between gap-2">
          <SpinnerMini /> <span>Deleting</span>
        </div>
      ) : (
        <>
          <TrashIcon className="h-5 w-5 text-primary-600 transition-colors group-hover:text-primary-800" />
          <span className="mt-1">Delete</span>
        </>
      )}
    </button>
  );
}

export default DeleteReservation;
