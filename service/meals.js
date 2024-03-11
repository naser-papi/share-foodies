const { Storage } = require('@google-cloud/storage');
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
const db = sql("meals.db");

export async function getAllMeals(){
    await new Promise(resolve => setTimeout(()=>resolve(),2000));
    //throw Error("this is a fake error");
    return db.prepare("SELECT * FROM meals").all();
}
export function getMeal(slug){
    return db.prepare("SELECT * FROM meals WHERE slug=?").get(slug);
}

export async function saveMeal(meal){
    const storage = new Storage({
        keyFilename: './foodies.json',
    });

    try {
        const arrayBuffer = await meal.image.arrayBuffer();
        const extention = meal.image.name.split(".").pop();
        const fileName = `${meal.slug}.${extention}`;
        const buffer = Buffer.from(arrayBuffer);
        await storage.bucket("food-images").upload(buffer, {
            destination: fileName,
        });
        console.log(`File ${fileName} uploaded to food-images.`);
        meal.image= `/images/${fileName}`;
    } catch (err) {
        console.error('Error uploading file:', err);
    }

    meal.slug = slugify(meal.title,{lower:true});
    meal.instructions= xss(meal.instructions);


    db.prepare(`INSERT INTO meals Values(null, @slug,  @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email)`).run(meal);
}