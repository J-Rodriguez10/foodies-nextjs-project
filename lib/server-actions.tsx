"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { MealUpload } from "@/components/interfaces/meals-interfaces";
import { saveMeal } from "./meals";

function isInvalidText(text: string): boolean {
  return !text || text.trim() === "";
}

export interface ShareMealState {
  message: string | null;
}

export async function shareMeal(
  state: ShareMealState, // Previous state
  formData: FormData // Form data being submitted
): Promise<ShareMealState> {
  const meal: MealUpload = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image") as File,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
  };

  // Validation logic
  if (
    !meal.title.trim() ||
    !meal.summary.trim() ||
    !meal.instructions.trim() ||
    !meal.creator.trim() ||
    !meal.creator_email.trim() ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid Input",
    };
  }

  // Save the meal
  await saveMeal(meal);
  revalidatePath("/meals");
  // Redirect the user after successful submission
  redirect("/meals");
}
