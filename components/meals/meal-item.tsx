import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

import classes from "./meal-item.module.css";
import { Meal } from "./meals-grid";



const MealItem: FC<Meal> = ({
  id,
  title,
  slug,
  image,
  summary,
  creator,
}) => {
  return (
    <article className="flex flex-col justify-between h-full rounded-[4px] shadow-lg overflow-hidden transition duration-300 ease-in-out text-[#ddd6cb] bg-gradient-to-r from-[#2c1e19] to-[#25200f]">
      {/* meal header */}
      <header>
        <div className="relative h-[15rem]">
          <Image className="object-cover" src={image} alt={title} fill />
        </div>
        <div className="pt-2 px-4 pb-0">
          <h2 className="m-0 text-[1.5rem] font-monsterrat ">{title}</h2>
          <p className="text-[0.75rem] text-[#cfa69b] italic m-0">
            by {creator}
          </p>
        </div>
      </header>

      {/* meal content */}
      <div className="flex flex-col justify-between h-full">
        <p className="pt-4 px-4 pb-0 m-0">{summary}</p>
        <div className="p-4 text-right">
          <Link
            className="inline-block mt-4 py-2 px-4 rounded-md bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold no-underline hover:bg-gradient-to-r hover:from-[#fd4715] hover:to-[#f9b241] hover:shadow-lg hover:shadow-[rgba(242, 100, 18, 0.8)]"
            href={`/meals/${slug}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default MealItem;
