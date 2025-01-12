"use client";

import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function NavBar({}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex items-center justify-between gap-x-6 mb-10"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="">
            <img alt="logo" src="/logo.png" className="w-36" />
          </a>
        </div>

        <div className="flex flex-1 items-center justify-end gap-x-6">
          <Link
            href="/contact"
            className="rounded-full bg-slate-900 px-5 py-2 text-white shadow-sm hover:bg-indigo-500  text-base transition-all duration-300 ease-in-out cursor-pointer"
          >
            Let's chat
          </Link>
        </div>
        <div className="flex">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="-m-2.5 inline-flex text-base items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars2Icon aria-hidden="true" className="size-6 mr-2" />
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
          className="fixed top-0 rounded-bl-2xl right-0 z-10 w-full overflow-y-auto bg-white pl-10 pr-6 py-5 sm:max-w-sm duration-300 data-[closed]:opacity-0 ease-in-out"
          transition
        >
          <div className="flex justify-end items-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-full bg-slate-900 px-5 py-2 text-white shadow-sm hover:bg-indigo-500  text-base transition-all duration-300 ease-in-out cursor-pointer"
            >
              Let's chat
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-6 pt-10 pb-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-4 text-gray-900 hover:bg-gray-50 text-3xl/7 font-light"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 text-gray-900 hover:bg-gray-50"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
