import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const footerSocialItems = [
  { id: 1, src: "/footer/facebook.svg", width: 800, height: 800 },
  { id: 2, src: "/footer/instagram.svg", width: 800, height: 800 },
  { id: 3, src: "/footer/twitter.svg", width: 775, height: 440 },
];

export default function FooterCompanyLinks() {
  const socialLinksEl = footerSocialItems.map((item, index) => {
    const { src, width, height } = item;
    return (
      <Button
        size={"icon"}
        className="p-2 rounded-full dark size-9"
        key={index}
        asChild
      >
        <Link href={"/"}>
          <Image src={src} alt={"SOCIAL ICON"} width={width} height={height} />
        </Link>
      </Button>
    );
  });
  return (
    <div className="flex flex-col items-center xl:flex-row xl:justify-between xl:items-end gap-14 min-h-40">
      <Image
        src={"/footer/footer-logo.svg"}
        alt={"FOOTER LOGO"}
        width={420}
        height={125}
      />
      <div className="flex flex-col gap-6 xl:items-end">
        <div className="flex justify-center gap-4 overflow-visible xl:justify-start">
          {socialLinksEl}
        </div>
        <ul className="flex flex-wrap justify-center gap-6">
          <li>
            <Link href={"/"}>Terms of Service</Link>
          </li>
          <li>
            <Link href={"/"}>Privacy Policy</Link>
          </li>
          <li>
            <Link href={"/"}>Legal Information</Link>
          </li>
          <li>
            <Link href={"/"}>© TDMS Inc.</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
