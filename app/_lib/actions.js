"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { updateGuest } from "./data-service";

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
