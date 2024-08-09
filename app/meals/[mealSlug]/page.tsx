import { NextPage } from "next";
import Image from "next/image";

import { getMeal } from "@/lib/meals";
import { Meal } from "@/components/interfaces/meals-interfaces";


interface MealDetailsPageProps {
  params : {
    mealSlug: string; // represents the dynamic part of the route
  }
}


const MealDetailsPage: NextPage<MealDetailsPageProps> = ({ params }) => {
  const meal: Meal = getMeal(params.mealSlug);

  meal.instructions = meal.instructions.replace(/\n/g, "<br />")

  return (
    <>
      <header className="flex py-8 px-4 gap-12 m-auto max-w-[80rem]">
        {/* image container */}
        <div className="relative w-[30rem] h-[30rem]">
          <Image
            src={meal.image}
            alt={meal.title}
            className="object-cover rounded-[8px] shadow-[0_0_8px_rgba(0,0,0,0.5)]  fade-slide-in-from-left-animation"
            fill
          />
        </div>

        {/* header text */}
        <div className="pt-2 pr-4 pl-4 text-[#ddd6cb] max-w-[40rem]  fade-slide-in-from-left-animation">
          <h1 className="m-0 text-[3.5rem] uppercase font-monsterrat">
            {meal.title}
          </h1>
          <p className="text-[1.5rem] italic">
            by{" "}
            <a
              className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent hover:bg-gradient-to-r from-[#f9572a] to-[#ff8a05] hover:bg-clip-text hover:text-transparent"
              href={`mailto:${meal.creator_email}`}
            >
              {meal.creator}
            </a>
          </p>
          <p className="text-[1.5rem]">{meal.summary}</p>
        </div>
      </header>

      <main>
        <p
          className="text-[1.25rem] leading-[1.5] bg-[#6e6464] text-[#13120f] rounded-[8px] shadow-[0_0_8px_rgba(0,0,0,0.5)] p-8 max-w-[60rem] my-8 mx-auto fade-slide-in-from-bottom-animation"
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
};

export default MealDetailsPage;