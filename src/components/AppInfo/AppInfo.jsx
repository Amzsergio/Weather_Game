import s from '../AppInfo/AppInfo.module.css'

export default function Appinfo(){
 
  return (
    <div>
      <div id={s.appTitle_container}>
        <h1 id={s.siteTitle}> Worldwide <br/> Weather <br/> App </h1>

        <article className={s.appInfo_container}>
            <p className={s.infoP}>
                <br />
                Here I've used <a href="https://openweathermap.org/api" target='_blank'> This Api </a> to build a consultation web App, in which you can learn more about the weather of your favorite cities around the world. 
                <br />
                <b className={s.colorFul}>Comming soon:</b> A section where you'll be able to enjoy a game with the displayed cards, in order you to improve your holistic knowledge about the cities of your interest.   
            </p>
        </article>
        
    
      </div>
        
    </div>
  )
}

