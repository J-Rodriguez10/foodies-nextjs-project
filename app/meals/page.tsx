import MealsGrid from "@/components/meals/meals-grid";
import { NextPage } from "next";
import Link from "next/link";

const MealsPage: NextPage = () => {
  return (
    <>
    {/* meals page header */}
      <header className="gap-[3rem] mt-[3rem] mb-[5rem] mx-auto w-[90%] max-w-[75rem] text-[#ddd6cb] text-[1.5rem]">
        <h1 className="font-monsterrat text-[2.8rem] font-bold l-spacing-s mb-6">
          Delicious meals, created <span className="highlight">by you</span>
        </h1>
        <p className="m-0 font-thin text-[1.35rem] l-spacing-s ">
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        {/* cta */}
        <p className="m-0">
          <Link
            className="inline-block mt-4 py-2 px-4 rounded-md bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold no-underline"
            href="/meals/share"
          >
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>

      {/* meals grid */}
      <main>
        <MealsGrid meals={[]}/>
      </main>
    </>
  );
};

export default MealsPage;
