import { RandomSvg } from "../../utils"
import { useState } from "react"
import styles from "./leftComponent.module.css"
import "../../styles/App.css"
export function LeftComponent({ onClick, count }) {
    const [imageuRL, setImage] = useState("")

    const handleRandomImage = () => {
        const newImageUrl = RandomSvg();
        setImage(newImageUrl);
        console.log("on", onClick)

    };
    const increaseNumber = () => {
        const newCount = count >= 20 ? 20 : count + 1
        onClick(newCount)
        console.log("num", count)
    }
    const decNumber = () => {
        const newCount = count < 2 ? 1 : count - 1
        onClick(newCount)
        console.log("num", count)
    }
    return (
        <div className={styles["leftaside"]}>
            <h2 className="mb-5">Joke App  {imageuRL}</h2>
            <div className="d-flex gap-3">
                <button className={styles["jokeBtn"]} onClick={decNumber} disabled={count == 1}>Prev</button>
                <button className={styles["jokeBtn1"]} >{count}</button>
                <button className={styles["jokeBtn"]} onClick={increaseNumber} disabled={count == 20}>Next</button>
            </div>

        </div>
    )
}