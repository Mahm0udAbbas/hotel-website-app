"use client";
import { isWithinInterval } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationsContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to }),
    )
  );
}

function DateSelector({ settings, bookedDates, cabin }) {
  const { range, setRange, resetRange } = useReservation();

  // CHANGE
  const regularPrice = 23;
  const discount = 23;
  const numNights = 23;
  const cabinPrice = 23;
  // const range = { from: null, to: null };

  // SETTINGS
  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className="flex h-full flex-col justify-between">
      <DayPicker
        className="place-self-center p-3"
        mode="range"
        onSelect={setRange}
        selected={range}
        min={minBookingLength + 1}
        max={maxBookingLength}
        startMonth={new Date()}
        disabled={{ before: new Date() }}
        endMonth={new Date(new Date().getFullYear() + 5, 0)}
        captionLayout="dropdown"
        numberOfMonths={2}
        hideNavigation
      />

      <div className="flex flex-col items-center justify-between bg-accent-500 px-4 py-3 text-primary-800 sm:flex-row">
        <div className="flex items-baseline gap-2 sm:gap-4 md:gap-6">
          <p className="flex items-baseline gap-2">
            {discount > 0 ? (
              <>
                <span className="text-base sm:text-lg md:text-2xl">
                  ${regularPrice - discount}
                </span>
                <span className="text-sm font-semibold text-primary-700 line-through sm:text-base md:text-xl">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-base sm:text-lg md:text-2xl">
                ${regularPrice}
              </span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="flex items-center justify-between bg-accent-600 px-3 py-2 text-base sm:text-lg md:text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-base font-bold uppercase sm:text-lg md:text-2xl">
                  Total
                </span>{" "}
                <span className="text-base font-semibold sm:text-lg md:text-2xl">
                  ${cabinPrice}
                </span>
              </p>
            </>
          ) : null}
        </div>

        {range?.from || range?.to ? (
          <button
            className="mt-3 border border-primary-800 px-4 py-2 text-sm font-semibold sm:mt-0"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
