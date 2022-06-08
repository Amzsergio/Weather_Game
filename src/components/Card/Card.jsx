import React from "react"
import style from "../Card/Card.module.css"

export function Card(props){

    return(
        <li id={style.card}>
            <div className={style.card_title}>
                <h1>{props.city.name}</h1>
            </div>
            <div className={style.info_container}>
                <div className={style.card_info}>
                    <h4>Country: {props.city.sys.country}</h4>
                    <h4>Max Temp: {props.city.main.temp_max}</h4>
                    <h4>Min Temp: {props.city.main.temp_min}</h4>
                </div>
                <div className={style.icon_container}>
                    <img src={`http://openweathermap.org/img/wn/${props.city.weather[0].icon}@2x.png`} alt="weather icon" />
                </div>
            </div>
        </li>
    )
}