import SectionHeading from "../../text/SectionHeading";
import ProcessItem from "./ProcessItem";

const processItems = [
  {
    id: 1,
    badge: "NO RISK, NO WASTE",
    heading: "Crowdfunding",
    description:
      "Rally your fans and gather pledges. Press the exact number of records you need, without having to pay anything upfront.",
    link: "/",
    bg: "bg-brandYellow",
    imgSrc: "/process/crowdfunding.png",
  },
  {
    id: 2,
    badge: "GET INTO IT",
    heading: "Press & Sell",
    description:
      "Launch your record, sooner. Take pre-orders from fans and we’ll take care of the rest.",
    link: "/",
    bg: "bg-brandBrown",
    imgSrc: "/process/pressandsell.png",
  },
];

export default function ProcessSection() {
  const processEl = processItems.map((item, index) => {
    return <ProcessItem {...item} key={index} />;
  });
  return (
    <section className="flex flex-col gap-0 xl:flex-row">
      <SectionHeading className="sr-only">Process</SectionHeading>
      {processEl}
    </section>
  );
}
