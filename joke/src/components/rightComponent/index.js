import { JokeCard } from "../JokeCard"
import styles from"./rightComponent.module.css"
export function RightAside(){
    return (
        <div className={styles["rightAside"]}>
            <JokeCard/>
            <JokeCard/>
            <JokeCard/>
            <JokeCard/>
            <JokeCard/>
            <JokeCard/>
            <JokeCard/>
            <JokeCard/>

        </div>
    )
}