//import { RandomSvg } from "../../utils";
import styles from "./JokeCard.module.css";

export function JokeCard({ text, vote = 0, onDecrement, onIncrement, emoji = "😂" }) {
    return (
        <div className={styles["joke-card"]}>
            <div className={styles["joke-left"]}>
                <button className={styles["btn-joke"]}>-</button>
                <button className={styles["btn-vote"]}>{vote}</button>
                <button className={styles["btn-joke"]}>+</button>
            </div>
            <p>{text}</p>

            <div className={styles["joke-image"]}>
                {emoji}
            </div>
        </div>
    );
}
