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

export default function NavBarDark() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="">
      <nav
        aria-label="Global"
        className="mx-auto mb-10 flex items-center justify-between gap-x-6 p-4 lg:px-6"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="">
            <Image
              alt="logo"
              src="/logo-dark.png"
              className="w-36"
              width={144}
              height={36}
            />
          </Link>
        </div>

        <div className="hidden flex-1 items-center justify-end gap-x-6 md:flex">
          <Link
            href="/contact"
            className="cursor-pointer rounded-full bg-slate-800 px-5 py-2 text-base text-white shadow-sm transition-all duration-300 ease-in-out hover:bg-indigo-800"
          >
            Let's chat
          </Link>
        </div>
        <div className="flex">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-base text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars2Icon aria-hidden="true" className="mr-2 size-6" />
            Menu
          </button>
        </div>
      </nav>

      <Dialog open={menuOpen} onClose={setMenuOpen}>
        <DialogBackdrop
          className="fixed inset-0 z-10 bg-black/25 backdrop-blur-sm"
          transition
        />

        <DialogPanel
          className="fixed right-0 top-0 z-10 w-full rounded-bl-2xl bg-slate-800/80 py-5 pl-10 duration-300 ease-in-out data-[closed]:opacity-0 sm:max-w-sm"
          transition
        >
          <div className="flex items-center justify-end gap-x-6 pr-6">
            <Link
              href="/contact"
              className="cursor-pointer rounded-full bg-slate-900 px-5 py-2 text-base text-white shadow-sm transition-all duration-300 ease-in-out hover:bg-indigo-800"
            >
              Let's chat
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-slate-500/10">
              <div className="space-y-6 pb-6 pt-10">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-bl-lg rounded-tl-lg px-3 py-4 text-3xl/7 font-light text-white hover:bg-indigo-800"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="block rounded-bl-lg rounded-tl-lg px-3 py-2.5 text-sm text-slate-400 hover:bg-indigo-800"
                >
                  contact@jasperlab.co
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
