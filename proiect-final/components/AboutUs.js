import styles from "../styles/AboutUs.module.css"
import Image from "next/image"
import image_florist_field from "../images/image_florist_field.png"
import florist_flowers from "../images/florist_flowers.png"

export default function AboutUs() {
    return <>
        <p className={styles.text}>
            Beauty and magic. The simple kind that is all around, of which we fail to see.  As long as I can remember, I have spent my time seeking it and wanting to create my own.  To share my passion and striving to always leave things better than I find them.  
        </p>
        <p className={styles.text}>
            <Image className={styles.image} src={florist_flowers} height={400} width={400} alt="florist with flowers"></Image>
                When people ask me, What do you do for a living?,  Flowers  I say, smiling ear to ear.  The same smile I had as a child when my mother sent me to the garden for vegetables, watching my grandmother tend to her flowers, my father to the farm. Hands in the soil, one with the earth.
        </p>
        <Image className={styles.image} src={image_florist_field} height={500} width={500} alt="florist on a field"></Image>
        <p className={styles.text}>
            My designs allow flowers to be as they are.  Fresh and pure, while being naturally whimsical. I am inspired by the way foliage, herbs, branches and fruit compliment their identity.  I may place lavender in a bouquet for luck, or rosemary in a boutonniere for love.
            Our team s goal:  To have flowers be an expression of who you are.  Incorporating the colors you love and the shapes you gravitate towards. We strive to accomplish your vision and to make any wedding, event, delivery, or trip to the shop personal and special.  This was the magic I was meant to create. 
        </p>
    </>
}