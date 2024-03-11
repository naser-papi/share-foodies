import {Suspense} from "react";
import MealsHeder from "@/components/meals/meals-header";
import MealsGrid from "@/components/meals/meals-grid";
import {getAllMeals} from "@/service/meals";
import classes from "./styles.module.css";

export const metadata={
    title:"Meals",
    description:"Browse all available deletion meals",
    keywords:["meals","deletion","foodies"]
}
const Meals = async ()=>{
    const meals = await getAllMeals();
    return <MealsGrid meals={meals} />
}
export default async function MealsPage() {

    return (
        <>        
        <MealsHeder/>
        <main>
           <Suspense fallback={ <p className={classes.loading}>Fetching meals....</p>}><Meals/></Suspense>
        </main>
        </>
    );
}
