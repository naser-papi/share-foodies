"use client"
import Image from "next/image";
import classes from "./styles.module.css"
import {useRef, useState} from "react";
const ImagePicker = ({label,name}) => {
    const [pickedImage, setPickedImage] = useState(null);
    const inputRef = useRef();
    const handlePickImage=()=>{
        if (inputRef.current){
            inputRef.current.click();
        }
    }
    const handleFileChanged= (event)=>{
        const file = event.target.files[0];
        if (!file){
            setPickedImage(null);
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload=()=>{
            setPickedImage(fileReader.result);
        }
        fileReader.readAsDataURL(file);
    }
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image selected</p>}
                    {pickedImage && <Image src={pickedImage} fill alt={"meal image"}/>}
                </div>
                <input
                    className={classes.input}
                    type="file"
                    id={name}
                    accept="image/png, image/jpeg"
                    name={name}
                    ref={inputRef}
                    onChange={handleFileChanged}
                    required
                />
                <button className={classes.button} type={"button"} onClick={handlePickImage}>Pick an Image</button>
            </div>
        </div>
    );
};

export default ImagePicker;