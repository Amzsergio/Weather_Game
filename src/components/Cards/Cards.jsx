import { connect } from "react-redux"
import { Card } from "../Card/Card.jsx"
import style from "../Cards/Cards.module.css"

function Cards(props){

    return(
        <>
            <div id={style.ul_container}>
                {
                    props.state.cities.map((city)=> (
                            <Card
                            key={city.id}
                            city={city}/>
                        )
                    )
                }
             
            </div>
        </>
    )
}

function mapStateToProps(state){
    return{
        state: state
      }
}


export default connect(mapStateToProps, null )(Cards)