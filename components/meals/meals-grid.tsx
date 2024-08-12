import { FC } from "react";

import MealItem from "./meal-item";
import { Meal } from "../interfaces/meals-interfaces";


export interface MealsProp {
  meals: Meal[];
}

const MealsGrid: FC<MealsProp> = ({ meals }) => {
  return (
    <ul className="w-[90%] max-w-[90rem] grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-[5rem] my-8 mx-auto list-none p-0">
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
