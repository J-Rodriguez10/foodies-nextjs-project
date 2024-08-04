import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "./main-header-background";

const MainHeader: FC = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className="flex justify-between items-center py-8 px-4 md:px-[10%] md:py-8">
        <Link
          className="flex items-center justify-center gap-8 no-underline text-[#ddd6cb] font-bold uppercase tracking-wide text-xl font-monsterrat"
          href="/"
        >
          <Image
            className="w-20 h-20 object-contain drop-shadow-lg "
            src={logoImg}
            alt="A plate with food"
            priority
          />
          NextLevel Food
        </Link>

        <nav className="">
          <ul className="list-none m0 p0 flex gap-6 text-5 text-white">
            <li>
              <Link className="nav-link" href="/meals">
                Browse Meals
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/community">
                Foodies Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
