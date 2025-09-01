import Image from "next/image";

export default function CommunityGallery() {
  return (
    <div className="flex w-full h-[100vh] border-black border-y-2">
      <div className="relative flex-grow hidden overflow-y-hidden xl:block">
        <Image
          src={"/community/community-large.jpg"}
          alt="COMMUNITY GALLERY IMAGE"
          width={2160}
          height={2160}
          className="absolute object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col flex-grow ">
        <div className="flex h-full border-b border-l-2 border-black">
          <div className="relative inset-0 flex-1 h-full border-r border-black">
            <Image
              src={"/community/community-top-left.jpg"}
              alt="COMMUNITY GALLERY IMAGE"
              width={2160}
              height={2160}
              className="absolute object-cover w-full h-full"
            />
          </div>
          <div className="relative inset-0 flex-1 h-full border-l border-black">
            <Image
              src={"/community/community-top-right.jpg"}
              alt="COMMUNITY GALLERY IMAGE"
              width={1804}
              height={1804}
              className="absolute object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="flex h-full border-t border-l-2 border-black">
          <div className="relative inset-0 flex-1 h-full border-r border-black">
            <Image
              src={"/community/community-bottom-left.jpg"}
              alt="COMMUNITY GALLERY IMAGE"
              width={1080}
              height={1162}
              className="absolute object-cover w-full h-full"
            />
          </div>
          <div className="relative inset-0 flex-1 h-full border-l border-black">
            <Image
              src={"/community/community-bottom-right.jpg"}
              alt="COMMUNITY GALLERY IMAGE"
              width={2160}
              height={2700}
              className="absolute object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
