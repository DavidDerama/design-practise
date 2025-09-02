import SectionHeading from "@/components/text/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CommunityGallery from "./CommunityGallery";
import CommunityCreators from "./CommunityCreators";
import Paragraph from "@/components/text/Paragraph";

export default function CommunitySection() {
  return (
    <section>
      <div className="flex flex-col items-center max-w-xl gap-8 px-10 py-16 mx-auto">
        <Badge>COMMUNITY</Badge>
        <SectionHeading className="text-center">
          Join a growing community.
        </SectionHeading>
        <Paragraph className="text-center">
          We’re building a home for the next generation of vinyl lovers. Get in
          front of fans, connect with artists, labels and stores.
        </Paragraph>
        <Button
          className="px-20 py-6 font-bold border-2 border-black rounded-full md:text-base"
          variant={"outline"}
          asChild
        >
          <Link href={"/"}> LEARN MORE</Link>
        </Button>
      </div>
      <CommunityGallery />
      <CommunityCreators />
    </section>
  );
}
