import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify"; // Converts a string into a URL-friendly slug
import xss from "xss"; // Used to prevent cross site scripting attacks

import { MealUpload, Meal } from "@/components/interfaces/meals-interfaces";

const db = sql("meals.db");

// Function for getting Meals
export async function getMeals(): Promise<Meal[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // throw new Error("Loading Meals Failed");
  return db.prepare("SELECT * FROM meals").all() as Meal[];
}

// Function for getting single Meal
export function getMeal(slug: string): Meal {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug) as Meal;
}



// Function for saving a Meal to the database
export async function saveMeal(meal: MealUpload): Promise<void> {
  // Generate a slug from the meal title and sanitize instructions
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  // Extract file extension and generate a unique file name
  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  // Image is saved. Now storing the file path as a string
  const savedMeal: Meal = {
    ...meal,
    image: `/images/${fileName}`,
  };

  // Insert the meal into the database
  try {
    db.prepare(
      `
      INSERT INTO meals
        (title, summary, instructions, creator, creator_email, image, slug)
      VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
      )
    `
    ).run(savedMeal);
  } catch (error) {
    throw new Error("Database insertion failed: " + (error as Error).message);
  }
}
