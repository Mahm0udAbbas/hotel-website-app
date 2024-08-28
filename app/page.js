import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png";
export default function Home() {
  return (
    <main className="flex items-center justify-center">
      <Image
        src={bg}
        fill
        placeholder="blur"
        className="object-cover object-center"
        alt="Maountains and forests with two cabins"
      />
      <section className="container relative mx-auto flex flex-col items-center justify-center">
        <p className="mb-4 py-4 text-center text-4xl text-primary-50 md:text-6xl">
          welcome to paradise.
        </p>

        <Link
          href="/cabins"
          className="rounded-md bg-accent-500 px-4 py-2 text-base capitalize text-primary-800 hover:bg-accent-600 md:px-6 md:py-4 md:text-lg"
        >
          explore luxury cabins
        </Link>
      </section>
    </main>
  );
}
