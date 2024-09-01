import React from "react";
import { auth } from "../_lib/auth";
export const metadata = {
  title: "Account",
  description: "User account page",
};
export default async function Account() {
  const session = await auth();

  return <div className="text-accent-500">Welcome ,{session?.user.name}</div>;
}
