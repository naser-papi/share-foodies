import Image from "next/image";
import {notFound} from "next/navigation";
import {getMeal} from "@/service/meals";
import classes from "./styles.module.css";

export async function generateMetadata({params}){
    const meal= getMeal(params.slug);
    if (!meal){
        notFound()
    }
    return {
        title:meal.title,
        description:meal.description
    }
}
export default function DetailPage({params}) {
    const meal = getMeal(params.slug);
    if (!meal){
        notFound();
    }
    const instructions = meal.instructions.replace(/\n/g,"<br/>")
    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} alt={meal.title} fill/>
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        By <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                </div>
            </header>
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{__html:instructions}}>

                </p>
            </main>
        </>
    );
}
