import Image from "next/image";
import Link from "next/link";
import React from "react";
import image1 from "@/public/about-1.jpg";
export const metadata = {
  title: "About Us",
  description: "About the company",
};
export default function About() {
  return (
    <div className="container mx-auto grid grid-cols-3 items-center gap-x-24 gap-y-20 text-center text-lg md:gap-y-32 md:text-left">
      <div className="order-1 col-span-3 md:col-span-2">
        <h1 className="mb-10 text-3xl font-medium text-accent-400 md:text-4xl">
          Welcome to The Wild Oasis
        </h1>

        <div className="space-y-8">
          <p>
            Where nature's beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it's not just about the luxury cabins.
            It's about the experience of reconnecting with nature and enjoying
            simple pleasures with family.
          </p>
          <p>
            Our 8 luxury cabins provide a cozy base, but the real freedom and
            peace you'll find in the surrounding mountains. Wander through lush
            forests, breathe in the fresh air, and watch the stars twinkle above
            from the warmth of a campfire or your hot tub.
          </p>
          <p>
            This is where memorable moments are made, surrounded by nature's
            splendor. It's a place to slow down, relax, and feel the joy of
            being together in a beautiful setting.
          </p>
        </div>
      </div>

      <div className="order-2 col-span-3 aspect-square md:col-span-1">
        <Image
          src={image1}
          alt="Family sitting around a fire pit in front of cabin"
          placeholder="blur"
        />
      </div>

      <div className="relative order-4 col-span-3 aspect-square md:order-3 md:col-span-1">
        <Image
          fill
          className="object-cover"
          src="/about-2.jpg"
          alt="Family that manages The Wild Oasis"
        />
      </div>

      <div className="order-3 col-span-3 md:order-4 md:col-span-2">
        <h1 className="mb-10 text-3xl font-medium text-accent-400 md:text-4xl">
          Managed by our family since 1962
        </h1>

        <div className="space-y-8">
          <p>
            Since 1962, The Wild Oasis has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, we've maintained the essence of The Wild Oasis,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, you're not just a
            guest; you're part of our extended family. So join us at The Wild
            Oasis soon, where tradition meets tranquility, and every visit is
            like coming home.
          </p>

          <div>
            <Link
              href="/cabins"
              className="mt-2 inline-block bg-accent-500 px-3 py-2 text-sm font-semibold text-primary-800 transition-all hover:bg-accent-600 sm:mt-3 md:mt-4 md:px-8 md:py-5 md:text-lg"
            >
              Explore our luxury cabins
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
