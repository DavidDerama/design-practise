import ItemHeading from "@/components/text/ItemHeading";
import Paragraph from "@/components/text/Paragraph";
import Link from "next/link";

type FooterGroupProps = {
  groupName: string;
  links: {
    href: string;
    name: string;
  }[];
};
export default function FooterGroup({ groupName, links }: FooterGroupProps) {
  const linksEl = links.map(({ name, href }) => {
    return (
      <li>
        <Paragraph>
          <Link href={href}>{name}</Link>
        </Paragraph>
      </li>
    );
  });
  return (
    <div className="flex flex-col flex-1 gap-4">
      <ItemHeading className="text-lg font-bold uppercase sm:text-2xl">
        {groupName}
      </ItemHeading>
      <ul className="flex flex-col gap-2 font-bold">{linksEl}</ul>
    </div>
  );
}
