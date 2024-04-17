import React, { useEffect, useState } from "react";
import { JokeCard } from "../JokeCard";
import styles from "./rightComponent.module.css";
import { getJokes } from "../services";
import { RandomSvg } from "../../utils";

export function RightAside({ page }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getJokes(page);
                //  console.log("data",data.results)
                //   console.log("page",page)
                const newData = res?.data?.results?.map(item => {

                    const newItem = {
                        ...item,
                        vote: 0
                    }
                    return newItem
                })
                setData(newData)
                console.log("data", data)
            } catch (error) {
                console.error("Error fetching jokes:", error);
            }
        };

        fetchData();
    }, [page]);

    return (
        <div className={styles.rightAside}>
            {data.map((item, index) => (
                <JokeCard key={index} text={item.joke} vote={item.vote} emoji={RandomSvg()}/>
            ))}
        </div>
    );
    {/* <JokeCard text="text" />
            <h1>{page}</h1> */}


}
