import { RandomSvg } from "../../utils"
import {  useState } from "react"
import styles from "./leftComponent.module.css"
import "../../styles/App.css"
export function LeftComponent() {
    const [imageuRL, setImage] = useState("")

    const handleRandomImage = () => {
        const newImageUrl = RandomSvg(); 
        setImage(newImageUrl); 
      };
    return (
        <div className={styles["leftaside"]}>
            <h2>Joke App  {imageuRL}</h2>
            <button className={styles["jokeBtn"]} onClick={handleRandomImage}>Random Joke</button>
            <p className={styles["randomJoke"]}></p>

        </div>
    )
}