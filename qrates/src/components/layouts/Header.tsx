import Section from "./Section";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <Section
        className={"flex justify-between items-center py-6"}
        header={true}
      >
        <Image
          src="/logo.svg"
          height={150}
          width={100}
          alt="QRATES"
          className="h-14"
        />
        <nav>
          <ul className="flex gap-8 font-bold uppercase">
            <li>discover</li>
            <li>search</li>
            <li>why crates</li>
            <li>cart</li>
          </ul>
        </nav>
        <div className="flex items-center gap-6 font-bold">
          <Link href={"/"}>LOG IN</Link>
          <Button className="px-10 py-6 rounded-full md:text-base">
            MAKE A RECORD
          </Button>
        </div>
      </Section>
    </header>
  );
}
