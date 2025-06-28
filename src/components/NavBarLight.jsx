"use client";

import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
  { name: "Services", href: "/" },
];

export default function NavBarLight({}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 bg-white/70 backdrop-blur-sm md:mt-4">
      <nav
        aria-label="Global"
        className="mx-auto mb-4 flex items-center justify-between gap-x-6 p-4 lg:px-8 lg:py-4"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="">
            <Image
              alt="logo"
              src="/logo.png"
              className="w-40 md:w-48"
              width={144}
              height={36}
            />
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end gap-x-6">
          <Link
            href="/contact"
            className="cursor-pointer rounded-full bg-black px-6 py-2.5 text-lg font-semibold text-white shadow-[0_0_0_5px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:shadow-[0_0_0_5px_rgba(0,0,0,0.3)]"
          >
            Talk to us
          </Link>
        </div>
      </nav>
    </header>
  );
}
