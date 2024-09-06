"use client";

import { differenceInDays } from "date-fns";
import { useReservation } from "./ReservationsContext";
import { createReservation } from "../_lib/actions";
import Button from "./Button";

function ReservationForm({ settings, bookedDates, cabin, user }) {
  // CHANGE
  const { maxCapacity, id, regularPrice, discount } = cabin;

  const { range, resetRange } = useReservation();
  const endDate = range?.to;
  const startDate = range?.from;

  const numNights = differenceInDays(endDate, startDate);
  const cabinPrice = numNights * (regularPrice - discount);

  const bookingData = {
    cabinId: id,
    startDate,
    endDate,
    numNights,
    cabinPrice,
  };

  const createBookingWithData = createReservation.bind(null, bookingData);

  return (
    <div className="">
      <div className="flex items-center justify-between bg-primary-800 px-8 py-2 text-sm text-primary-300">
        <p>Logged in as</p>

        <div className="flex items-center gap-4">
          <img
            // Important to display google profile images
            referrerPolicy="no-referrer"
            className="h-8 rounded-full"
            src={user.image}
            alt={user.name}
          />
          <p className="text-sm">{user.name}</p>
        </div>
      </div>

      <form
        action={async (formData) => {
          await createBookingWithData(formData);
          resetRange();
        }}
        className="flex flex-col gap-5 bg-primary-900 px-8 py-6 text-lg"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center">
          {!(startDate && endDate) ? (
            <p className="text-base text-primary-300">
              Start by selecting dates
            </p>
          ) : (
            <Button pendingLable="reserving">Reserve now</Button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
