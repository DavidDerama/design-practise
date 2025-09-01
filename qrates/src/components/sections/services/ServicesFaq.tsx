import ServiceGroup from "./ServiceGroup";

const faqItems = [
  {
    groupName: "Making Records",
    groupItems: [
      {
        id: 1,
        name: "Design & Customization",
        description:
          "With over 39 colors and over 120,000 variations, control what your record will look like.",
        link: "/",
      },
      {
        id: 2,
        name: "Mastering",
        description:
          "Have your music mastered by engineers who specialize in mastering for vinyl.",
        link: "/",
      },
      {
        id: 3,
        name: "Artwork Assistance",
        description:
          "Our team can help you optimize your artwork and packaging so your vinyl looks as good as it sounds.",
        link: "/",
      },
      {
        id: 4,
        name: "Pressing",
        description:
          "In-built quality control comes from our network of trusted vinyl plants in North America and Europe.",
        link: "/",
      },
    ],
  },
  {
    groupName: "Storage & Distribution",
    groupItems: [
      {
        id: 1,
        name: "Free Storage",
        description: "At our US and UK warehouses, with no minimums or fees.",
        link: "/",
      },
      {
        id: 2,
        name: "Shop",
        description:
          "Sell your record in the Qrates shop, directly connecting with an established community of music lovers and stores worldwide.",
        link: "/",
      },
      {
        id: 3,
        name: "Digital Downloads",
        description:
          "Make your music available for digital download in our store too.",
        link: "/",
      },
      {
        id: 4,
        name: "Retail Distribution",
        description:
          "Get into record stores with Qrates’ 150+ retail partners including Juno and Japan’s legendary Jet Set Records.",
        link: "/",
      },
    ],
  },
  {
    groupName: "Support",
    groupItems: [
      {
        id: 5,
        name: "Customer Support",
        description:
          "Our dedicated customer care team is ready to help—from order updates to refunds, returns, or exchanges. We’ll handle it.",
        link: "/",
      },
      {
        id: 6,
        name: "Artist Support",
        description:
          "Our Qrates team can guide you through all the technical details, making the production process low stress and hassle-free.",
        link: "/",
      },
    ],
  },
];

export default function ServicesFaq() {
  const servicesGroupEl = faqItems.map((item, index) => {
    return <ServiceGroup {...item} key={index} />;
  });

  return (
    <div className="w-full max-w-2xl border-2 border-black">
      {servicesGroupEl}
    </div>
  );
}
