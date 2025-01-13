import Image from "next/image";
import Link from "next/link";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-20 rounded-t-2xl bg-black p-4 lg:px-6">
      <div className="mx-auto max-w-7xl py-12 md:flex md:items-center md:justify-between">
        <div className="flex w-full justify-between gap-x-6">
          <Link href="/" className="">
            <Image
              alt="logo"
              src="/logo-dark.png"
              width={96}
              height={24}
              sizes="100vw"
              className="w-24"
            />
          </Link>
          <p className="mt-8 text-center text-sm/6 font-thin text-slate-400 md:order-1 md:mt-0">
            &copy; {currentYear} JasperLab, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
