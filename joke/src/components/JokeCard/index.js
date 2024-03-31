import { RandomSvg } from "../../utils";
import styles from "./JokeCard.module.css";

 export function JokeCard() {
    return (
        <div className={styles["joke-card"]}>
            <div className={styles["joke-left"]}>
                <button className={styles["btn-joke"]}>-</button>
                <button className={styles["btn-vote"]}>0</button>
                <button className={styles["btn-joke"]}>+</button>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            
            <div className={styles["joke-image"]}>
               😂
            </div>
        </div>
    );
}
