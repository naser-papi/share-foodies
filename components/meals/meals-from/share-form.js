"use client"
import {useFormState} from "react-dom";
import {shareMeal} from "@/service/actions";
import ImagePicker from "@/components/image-picker";
import SubmitButton from "@/components/meals/meals-from/submit-button";
import classes from "./styles.module.css";

const ShareForm = () => {
    const [state,formActioon]= useFormState(shareMeal,{message:null});
    return (
        <form className={classes.form} action={formActioon}>
            <div className={classes.row}>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" name="name" required />
                </p>
                <p>
                    <label htmlFor="email">Your email</label>
                    <input type="email" id="email" name="email" required />
                </p>
            </div>
            <p>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" required />
            </p>
            <p>
                <label htmlFor="summary">Short Summary</label>
                <input type="text" id="summary" name="summary" required />
            </p>
            <p>
                <label htmlFor="instructions">Instructions</label>
                <textarea
                    id="instructions"
                    name="instructions"
                    rows="10"
                    required
                ></textarea>
            </p>
            <ImagePicker label={"meal image"} name={"mealImage"}/>
            <p className={classes.actions}>
                <SubmitButton />
            </p>
            {state.message && <p className={"error"}>{state.message}</p>}
        </form>
    );
};

export default ShareForm;