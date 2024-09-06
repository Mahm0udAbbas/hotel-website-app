"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import {
  createBooking,
  deleteBooking,
  getBookings,
  updateBooking,
  updateGuest,
} from "./data-service";
import { redirect } from "next/navigation";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}
export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function updateGuestAction(formData) {
  const session = await auth();

  if (!session) throw new Error("you must login to update");
  const nationalID = formData.get("nationalID");
  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("enter a valid national Id ");

  const [nationality, countryFlag] = formData.get("nationality").split("%");

  const updatedGuest = {
    nationalID,
    nationality,
    countryFlag,
  };
  await updateGuest(session.user.guestId, updatedGuest);
  revalidatePath("account/profile");
}
export async function updateReservationtAction(formData) {
  const session = await auth();
  if (!session) throw new Error("you must login to update");
  const bookingId = Number(formData.get("reservationId"));

  const geustBookings = await getBookings(session.user.guestId);
  const guestBookingIds = geustBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingId)) {
    throw new Error(
      "You can't update a reservation that does not belong to you",
    );
  }
  const numGuests = Number(formData.get("numGuests"));
  const observations = formData.get("observations");

  const updatedReserationt = {
    numGuests,
    observations,
  };
  await updateBooking(bookingId, updatedReserationt);
  revalidatePath(`/account/reservations/edit/${bookingId}`);

  redirect("/account/reservations");
}

export async function deleteReservation(bookingId) {
  const session = await auth();
  if (!session) throw new Error("You must login to delete reservation");

  const geustBookings = await getBookings(session.user.guestId);
  const guestBookingIds = geustBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingId)) {
    throw new Error(
      "You can't delete a reservation that does not belong to you",
    );
  }
  await deleteBooking(bookingId);

  revalidatePath("account/reservations");
}

export async function createReservation(bookingData, formData) {
  const session = await auth();
  if (!session) throw new Error("You must login to delete reservation");

  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations"),
    totalPrice: bookingData.cabinPrice,
    extrasPrice: 0,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
  };
  await createBooking(newBooking);
  revalidatePath(`/cabin/${bookingData.cabinId}`);
  redirect("/cabins/thankyou");
}
