import React from "react"

export function Card(props){

      
    return(
        <li>
            {props.city.cod === 200 ? (props.city.name) : alert('City does not exist')}
        </li>
    )
}