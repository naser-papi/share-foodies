import Link from "next/link";
import classes from "./styles.module.css";


export const MealsHeder = () => {
  return (
    <header className={classes.header}>
        <h1>
            Delicious Meals, created {' '} <span className={classes.highlight}>by you</span>
        </h1>
        <p>
            choose your favorite recipe and cook it yourself, It is easy and fun!
        </p>
        <p className={classes.cta}>
            <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
    </header>
  )
}

export default MealsHeder;
