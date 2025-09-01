import SectionHeading from "@/components/text/SectionHeading";
import SupportItem from "./SupportItem";

const supportItems = [
  {
    id: 1,
    heading: "Worldwide distro demystified.",
    description:
      "Get direct access to over 150 of our retail partners across the globe.",
    bg: "bg-black",
    badge: "RETAIL NETWORK",
    img: {
      src: "/support/support-collab.png",
      width: 1320,
      height: 800,
    },
  },
  {
    id: 2,
    heading: "Here to help, whenever you need it.",
    description:
      "Whether you’re an artist in the middle of product, or a fan with questions about your order; our team is here to help.",
    bg: "bg-brandPurple",
    badge: "CUSTOMER SUPPORT",
    img: {
      src: "/support/support-person.jpg",
      width: 2000,
      height: 1499,
    },
  },
];
export default function SupportSection() {
  const supportEl = supportItems.map((item, index) => {
    return <SupportItem {...item} key={index} />;
  });
  return (
    <section className="flex flex-col border-black xl:flex-row border-y-2">
      <SectionHeading className="sr-only">Support</SectionHeading>
      {supportEl}
    </section>
  );
}
