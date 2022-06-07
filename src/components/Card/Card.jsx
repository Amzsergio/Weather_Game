import React from "react"
import style from "../Card/Card.module.css"

export function Card(props){

    return(
        <li id={style.card}>
            {props.city.name}
        </li>
    )
}