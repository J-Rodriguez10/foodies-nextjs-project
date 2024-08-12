"use server";

import { MealUpload } from "@/components/interfaces/meals-interfaces";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";

export async function shareMeal(formData: FormData) {

  const meal: MealUpload = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image") as File,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
  };

  await saveMeal(meal);

  redirect("/meals");
}
