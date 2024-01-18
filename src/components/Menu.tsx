import Link from "next/link";

export default function Menu() {
  return (
    <>
      <Link className="px-4 block md:inline-block py-2 md:py-0 text-base hover:text-red-500" href="/">
        Home
      </Link>
      <Link className="px-4 block md:inline-block py-2 md:py-0 text-base hover:text-red-500" href="/about">
        About Us
      </Link>
      <Link className="px-4 block md:inline-block py-2 md:py-0 text-base hover:text-red-500" href="/works">
        Our Works
      </Link>
      <Link className="pl-4 block md:inline-block py-2 md:py-0 text-base hover:text-red-500" href="/contact">
        Contact
      </Link>
    </>
  );
}
