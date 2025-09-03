import Section from "./Section";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import HamburgerMenu from "../sections/header/HamburgerMenu";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header>
      <Section
        className={"flex justify-between items-center lg:py-6 py-4 px-4"}
        outerLayer={false}
      >
        <Link href={"/"}>
          <Image
            src="/shared/logo.svg"
            height={150}
            width={100}
            alt="QRATES"
            className="w-auto h-14"
          />
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex gap-8 font-bold uppercase">
            <li>discover</li>
            <li>search</li>
            <li>why crates</li>
            <li>cart</li>
          </ul>
        </nav>
        <div className="items-center hidden gap-6 font-bold lg:flex">
          <Link href={"/"}>LOG IN</Link>
          <Button className="px-10 py-6 rounded-full md:text-base bold">
            MAKE A RECORD
          </Button>
        </div>
        <div className="flex items-center gap-6 lg:hidden">
          <Button variant={"ghost"} size={"icon"}>
            <ShoppingCart className="absolute object-cover w-full h-full scale-[1.8]" />
          </Button>
          <HamburgerMenu />
        </div>
      </Section>
    </header>
  );
}
