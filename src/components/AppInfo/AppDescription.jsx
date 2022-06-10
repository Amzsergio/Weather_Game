import React from 'react'
import s from '../AppInfo/AppInfo.module.css'

export default function AppDescription() {
  return (
    <div>
    on<article id={s.appInfo_container}>
            <p className={s.infoP}>
                <button>x</button> 
                <br />
                Here I've used <a href="https://openweathermap.org/api" target='_blank'> this Api </a> to build a consultation web App, in which you can learn more about the weather of your favorite cities around the world. 
                <br />
                <b>Comming soon:</b> A section where you'll be able to enjoy a game with the displayed cards, in order you to improve your holistic knowledge about the cities of your interest.   
            </p>
        </article>
    </div>
  )
}
