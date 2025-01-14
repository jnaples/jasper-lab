import Image from "next/image";
import Link from "next/link";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-20 rounded-t-2xl bg-black p-4 lg:px-6">
      <div className="mx-auto max-w-7xl pt-12 pb-4">
        <div className="flex w-full flex-col items-center justify-center gap-x-6">
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
          <p className="mt-8 text-center text-sm/6 font-thin text-slate-400">
            &copy; {currentYear} JasperLab, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
