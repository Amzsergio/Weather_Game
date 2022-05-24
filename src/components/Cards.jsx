// import { Card } from "./Card.jsx"
import { connect } from "react-redux"
import { Card } from "./Card"

function Cards(props){
    
    return(
        <>
            <ul>
                {
                    props.state.cities.map((city)=>{
                        return (
                            <Card
                            key={city.id}
                            city={city}/>
                        )
                    })
                }
            </ul>
        </>
    )
}

function mapStateToProps(state){
    return{
        state: state
      }
}


export default connect(mapStateToProps, null )(Cards)