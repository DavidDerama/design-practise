import SectionHeading from "../text/SectionHeading";
import Section from "./Section";
import FooterGroup from "../sections/footer/FooterGroup";
import FooterCompanyLinks from "../sections/footer/FooterCompanyLinks";

const footerItems = [
  {
    groupName: "FOR ARTISTS",
    links: [
      { href: "/", name: "Why Qrates?" },
      { href: "/", name: "Crowdfunding" },
      { href: "/", name: "Press & Sell" },
      { href: "/", name: "Our Services" },
      { href: "/", name: "Artist Toolkit" },
      { href: "/", name: "Referral Program" },
    ],
  },
  {
    groupName: "FOR FANS",
    links: [
      { href: "/", name: "Discover" },
      { href: "/", name: "Records" },
      { href: "/", name: "Stories" },
      { href: "/", name: "Lists" },
      { href: "/", name: "Artists & Labels" },
    ],
  },
  {
    groupName: "OUR COMPANY",
    links: [
      { href: "/", name: "About Qrates" },
      { href: "/", name: "Careers" },
      { href: "/", name: "Partners" },
    ],
  },
  {
    groupName: "HELP",
    links: [
      { href: "/", name: "Support Center" },
      { href: "/", name: "Contact Us" },
      { href: "/", name: "Returns" },
      { href: "/", name: "Shipping" },
    ],
  },
];

export default function Footer() {
  const footerFirstHalfEl = footerItems.slice(0, 2).map((item, index) => {
    return <FooterGroup {...item} key={index} />;
  });

  const footerSecondHalfEl = footerItems.slice(2).map((item, index) => {
    return <FooterGroup {...item} key={index} />;
  });
  return (
    <footer className="text-white bg-black">
      <SectionHeading className="sr-only">Footer</SectionHeading>
      <Section spacing="base" className="flex flex-col gap-28 xl:gap-60">
        <div className="flex flex-col gap-12 xl:flex-row">
          <div className="flex flex-1 gap-4">{footerFirstHalfEl}</div>
          <div className="flex flex-1 gap-4">{footerSecondHalfEl}</div>
        </div>
        <FooterCompanyLinks />
      </Section>
    </footer>
  );
}
