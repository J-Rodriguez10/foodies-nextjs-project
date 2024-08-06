import sql from "better-sqlite3";

import { Meals } from "@/components/interfaces/meals-interfaces";

const db = sql("meals.db");

export async function getMeals(): Promise<Meals>{
  await new Promise((resolve) => setTimeout(resolve, 2000));

  throw new Error("Loading Meals Failed");
  return db.prepare("SELECT * FROM meals").all() as Meals;
}