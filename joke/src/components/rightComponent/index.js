import React, { useEffect, useState } from "react";
import { JokeCard } from "../JokeCard";
import styles from "./rightComponent.module.css";
import { getJokes } from "../services";

export function RightAside() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await getJokes();
                //  console.log("data",data.results)
                setData(data.results)
            } catch (error) {
                console.error("Error fetching jokes:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={styles.rightAside}>

            <JokeCard text="text" />

        </div>
    );
}
