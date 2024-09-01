import React from "react";
import ReservationForm from "./ReservationForm";
import DateSelector from "./DateSelector";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import { auth } from "../_lib/auth";
import LoginMessage from "./LoginMessage";

export default async function Reservstions({ cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  const session = await auth();

  return (
    <div className="grid grid-cols-1 border border-primary-800 md:grid-cols-5">
      <div className="md:col-span-3">
        <DateSelector
          settings={settings}
          bookedDates={bookedDates}
          cabin={cabin}
        />
      </div>
      <div className="md:col-span-2">
        {session?.user ? (
          <ReservationForm cabin={cabin} user={session?.user} />
        ) : (
          <LoginMessage />
        )}
      </div>
    </div>
  );
}
