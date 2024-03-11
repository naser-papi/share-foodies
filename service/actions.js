"use server"
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";
import {saveMeal} from "@/service/meals";

const isValidText = (text)=> text && text.trim()!=="";
const areTextesValid = (arr) => arr.every(text=>isValidText(text));
export async function shareMeal(pervState, formData){
    const meal = {
        title:formData.get('title'),
        image:formData.get('mealImage'),
        summary:formData.get("summary"),
        instructions:formData.get("instructions"),
        creator:formData.get("name"),
        creator_email:formData.get("email"),
    }
    if (!areTextesValid([meal.title,meal.summary,meal.instructions,meal.creator,meal.creator_email])
        || !meal.creator_email.includes("@")
    || !meal.image || meal.image.size===0){
        return {message:"invalid data"}
    }
    await saveMeal(meal);
    revalidatePath("/meals","page");
    redirect("/meals");
}