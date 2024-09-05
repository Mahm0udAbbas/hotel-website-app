import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";
import Image from "next/image";
import Link from "next/link";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <div className="flex flex-col border border-primary-800 lg:flex-row">
      <div className="relative aspect-square h-40">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="border-r border-primary-800 object-cover"
        />
      </div>

      <div className="flex flex-grow flex-col px-6 py-3">
        <div className="mb-5 flex items-center justify-between lg:mb-2">
          <h3 className="text-sm font-semibold md:text-xl">
            {numNights} nights in Cabin {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="flex items-center rounded-sm bg-yellow-800 px-3 py-1.5 text-xs font-bold uppercase text-yellow-200">
              past
            </span>
          ) : (
            <span className="flex items-center rounded-sm bg-green-800 px-3 py-1.5 text-xs font-bold uppercase text-green-200">
              upcoming
            </span>
          )}
        </div>

        <p className="mb-5 text-sm text-primary-300 lg:mb-0 lg:text-lg">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="mt-auto flex flex-col items-baseline gap-2 lg:flex-row lg:gap-5">
          <p className="text-xl font-semibold text-accent-400">${totalPrice}</p>
          <p className="text-base text-primary-300">
            {numGuests} guest{numGuests > 1 && "s"}
          </p>
          <p className="text-xs text-primary-400 lg:ml-auto">
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      {isPast(new Date(startDate)) ? (
        ""
      ) : (
        <div className="flex border-t border-primary-800 lg:w-[100px] lg:flex-col lg:border-l">
          <Link
            href={`/account/reservations/edit/${id}`}
            className="group flex flex-grow items-center justify-center gap-2 border-r border-primary-800 px-3 py-4 text-xs font-bold uppercase text-primary-300 transition-colors hover:bg-accent-600 hover:text-primary-900 md:border-b"
          >
            <PencilSquareIcon className="h-5 w-5 text-primary-600 transition-colors group-hover:text-primary-800" />
            <span className="mt-1">Edit</span>
          </Link>
          <DeleteReservation bookingId={id} />
        </div>
      )}
    </div>
  );
}

export default ReservationCard;
