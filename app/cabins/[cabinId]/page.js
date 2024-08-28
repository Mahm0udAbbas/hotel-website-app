import { getCabin } from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

// PLACEHOLDER DATA
const cabin = {
  id: 89,
  name: "001",
  maxCapacity: 2,
  regularPrice: 250,
  discount: 0,
  description:
    "Discover the ultimate luxury getaway for couples in the cozy wooden cabin 001. Nestled in a picturesque forest, this stunning cabin offers a secluded and intimate retreat. Inside, enjoy modern high-quality wood interiors, a comfortable seating area, a fireplace and a fully-equipped kitchen. The plush king-size bed, dressed in fine linens guarantees a peaceful nights sleep. Relax in the spa-like shower and unwind on the private deck with hot tub.",
  image:
    "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg",
};

export default async function Page({ params }) {
  const { cabinId } = params;

  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    await getCabin(cabinId);

  return (
    <div className="mx-auto mt-8 max-w-6xl">
      <div className="mb-24 grid grid-cols-1 gap-8 border border-primary-800 md:grid-cols-[3fr_4fr] md:gap-20">
        <div className="relative aspect-square md:aspect-auto md:-translate-x-3 md:scale-[1.15]">
          <Image
            fill
            className="object-cover"
            src={image}
            alt={`Cabin ${name}`}
          />
        </div>

        <div className="px-10 py-3">
          <h3 className="mb-5 pb-1 text-4xl font-black uppercase text-accent-600 md:text-5xl lg:text-7xl">
            Cabin {name}
          </h3>

          <p className="mb-10 text-lg text-primary-300">{description}</p>

          <ul className="mb-7 flex flex-col gap-4">
            <li className="flex items-center gap-3">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex items-center gap-3">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Located in the heart of the{" "}
                <span className="font-bold">Dolomites</span> (Italy)
              </span>
            </li>
            <li className="flex items-center gap-3">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-center text-3xl font-semibold md:text-5xl">
          Reserve today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
}
