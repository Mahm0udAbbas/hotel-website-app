import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
  const session = await auth();
  console.log(session);

  return (
    <ul className="hidden flex-row items-center gap-16 md:flex">
      <li>
        <Link
          href="/cabins"
          className="transition-colors hover:text-accent-400"
        >
          Cabins
        </Link>
      </li>
      <li>
        <Link href="/about" className="transition-colors hover:text-accent-400">
          About
        </Link>
      </li>
      <li>
        {session?.user?.image ? (
          <Link
            href="/account"
            className="flex items-center gap-2 transition-colors hover:text-accent-400"
          >
            <img
              src={session.user.image}
              alt={session.user.name}
              className="h-8 rounded-full"
            />
            <span>Guest area</span>
          </Link>
        ) : (
          <Link
            href="/account"
            className="transition-colors hover:text-accent-400"
          >
            Guest area
          </Link>
        )}
      </li>
    </ul>
  );
}
