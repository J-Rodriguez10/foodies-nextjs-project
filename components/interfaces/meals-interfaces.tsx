export interface Meal {
  id?: string | undefined;
  slug?: string;
  title: string;
  image: string;
  summary: string;
  creator: string;
  creator_email: string;
  instructions: string;
}


// This interface is used for when a meal is being uploaded to the database
export interface MealUpload extends Omit<Meal, "image"> {
  image: File; // Represents the uploaded image file before saving
}