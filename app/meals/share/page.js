import ShareForm from "@/components/meals/meals-from/share-form";
import classes from './styles.module.css';

export default function ShareMealPage() {
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Share your <span className={classes.highlight}>favorite meal</span>
                </h1>
                <p>Or any other meal you feel needs sharing!</p>
            </header>
            <main className={classes.main}>
                <ShareForm/>
            </main>
        </>
    );
}