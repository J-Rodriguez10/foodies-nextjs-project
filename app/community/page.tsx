import Image, { StaticImageData } from "next/image";
import { NextPage } from "next";
import { FC } from "react";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";

interface PerkProps {
  img: StaticImageData;
  alt: string;
  desc: string;
}

const DUMMY_PERKS: PerkProps[] = [
  { img: mealIcon, alt: "A delicious meal", desc: "Share & discover recipes" },
  {
    img: communityIcon,
    alt: "A crowd of people, cooking",
    desc: "Find new friends & like-minded people",
  },
  {
    img: eventsIcon,
    alt: "A crowd of people at a cooking event",
    desc: "Participate in exclusive events",
  },
];

const Perk: FC<PerkProps> = ({ img, alt, desc }) => {
  return (
    <li className="flex flex-col items-center gap-3 mb-8">
      <Image className="w-[8rem] h-[8rem] object-contain" src={img} alt={alt} />
      <p className="font-monsterrat text-[1.5rem] font-bold m-0 text-[#ddd6cb]">
        {desc}
      </p>
    </li>
  );
};

const CommunityPage: NextPage = () => {
  return (
    <>
      <header className="flex flex-col gap-[1rem] mt-[3rem] mx-auto mb-[5rem] w-[90%] max-w-[75rem] text-[#ddd6cb] text-[1.5rem] text-center">
        <h1 className=" font-extrabold font-monsterrat text-[2.5rem] l-spacing-s w-spacing-s uppercase">
          One shared passion:{" "}
          <span className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            Food
          </span>
        </h1>
        <p className="font-light">Join our community and share your favorite recipes!</p>
      </header>
      <main className="w-[90%] max-w-[40rem] mx-auto text-center mt-[-1rem]">
        <h2 className="font-monserrat text-[1.75rem] mb-[3.25rem] text-[#ddd6cb] font-bold l-spacing-s">
          Community Perks
        </h2>

        <ul className="list-none mx-0 my-12 p-0 ">
          {DUMMY_PERKS.map((perk, i) => (
            <Perk key={i} {...perk} />
          ))}
        </ul>
      </main>
    </>
  );
};

export default CommunityPage;
