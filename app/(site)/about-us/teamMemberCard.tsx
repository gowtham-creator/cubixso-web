import React from "react";
import Image from "next/image";
import { Member } from "@/types/member";
import Link from "next/link";

const MemberCard = ({ member }: { member: Member }) => {
  const { name, title, image, link } = member;
  return (
    <Link className="relative h-[300px] w-[300px]" href={link ? link : ""}>
      <Image
        src={image}
        alt="404"
        fill={true}
        className="z-0 object-fill w-full rounded-lg"
      />
      <div className="absolute bottom-0 left-0 z-10 flex flex-col p-4 text-left">
        <p className="font-bold text-white">{name}</p>
        <p className="text-xs text-gray-200">{title}</p>
      </div>
    </Link>
  );
};
export default MemberCard;
