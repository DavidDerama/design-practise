import { Menu, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";

export default function HamburgerMenu() {
  return (
    <Sheet key={"top"}>
      <SheetTrigger asChild>
        <Button variant={"ghost"} size={"icon"}>
          <Menu className="absolute object-cover w-full h-full scale-[2]" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side={"top"}
        className="[&>button]:hidden flex flex-col gap-4"
      >
        <SheetHeader className="flex flex-row items-center justify-between py-4 border-b-2 border-black">
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SheetDescription className="sr-only">Description</SheetDescription>
          <Link href={"/"}>
            <Image
              src="/shared/logo.svg"
              height={150}
              width={100}
              alt="QRATES"
              className="w-auto h-14"
            />
          </Link>
          <div className="flex gap-6">
            <Button variant={"ghost"} size={"icon"}>
              <ShoppingCart className="absolute object-cover w-full h-full scale-[1.8]" />
            </Button>
            <SheetClose asChild>
              <Button variant={"ghost"} size={"icon"}>
                <Menu className="absolute object-cover w-full h-full scale-[2]" />
              </Button>
            </SheetClose>
          </div>
        </SheetHeader>
        <nav className="px-5 py-2">
          <ul className="flex flex-col gap-2">
            <li>
              <Link className="text-4xl font-bold" href="/">
                Discover
              </Link>
            </li>
            <li>
              <Link className="text-4xl font-bold" href="/">
                Search
              </Link>
            </li>
            <li>
              <Link className="text-4xl font-bold" href="/">
                Why Qrates?
              </Link>
            </li>
            <li>
              <Link className="text-4xl font-bold" href="/">
                About Us
              </Link>
            </li>
            <li>
              <Link className="text-4xl font-bold" href="/">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <ul className="flex gap-3 pl-5 mt-4">
          <li>
            <Link href={"/"}>
              <Image
                alt="SOCIAL MEDIA ICON"
                width={512}
                height={512}
                src={"/header/facebook.png"}
                className="size-8"
              />
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <Image
                alt="SOCIAL MEDIA ICON"
                width={512}
                height={512}
                src={"/header/instagram.png"}
                className="size-8"
              />
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <Image
                alt="SOCIAL MEDIA ICON"
                width={512}
                height={512}
                src={"/header/twitter.png"}
                className="size-8"
              />
            </Link>
          </li>
        </ul>
        <SheetFooter className="relative flex flex-col gap-2">
          <div className="absolute right-10 -top-20">
            <div className="relative inset-0 w-20">
              <Image
                src={"/header/header-peace.png"}
                alt="MENU FOOTER DECORATION"
                className="w-full h-full"
                height={4779}
                width={3432}
              />
            </div>
          </div>
          <Button
            variant={"outline"}
            className="text-xs border-2 border-black rounded-full py-7"
          >
            LOG IN
          </Button>
          <Button className="text-xs rounded-full py-7">MAKE A RECORD</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
