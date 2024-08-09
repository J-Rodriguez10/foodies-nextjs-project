export interface Meal {
  id: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
  creator_email: string;
  instructions: string;
}

// Define the type for a list of meals
export type Meals = Meal[];

export interface MealsProp {
  meals: Meal[];
}
