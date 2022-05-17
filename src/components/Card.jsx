import React from "react"

export function Card(props){

    return(
        <React.Fragment>
            <div>

                <li>
                    <h3> City: {props.name}</h3>
                </li>

            </div>
        </React.Fragment>
    )
}