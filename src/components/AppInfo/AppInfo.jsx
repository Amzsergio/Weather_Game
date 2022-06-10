import s from '../AppInfo/AppInfo.module.css'
import AppDescription from './AppDescription'
import { connect } from "react-redux"
import { displayAppInfo } from '../../redux/actions/actions'

function Appinfo(props){

  console.log(props)
  return (
    <div>
      <div id={s.appTitle_container}>
        <h1> Worldwide Weather App </h1>
        <h3 className={`${s.displayInfoBtn}`}>
          <span
            onMouseEnter={() => props.fireAppDescirption(true)}
            onMouseLeave={() => props.fireAppDescirption(false)}
          >More about this web app</span> </h3>
        { props.state.appDescription ? (
          <AppDescription/>
        ): null }
      </div >
        
    </div>
  )
}

function mapStateToProps(state){
  return{
      state: state
    }
}

function mapDispatchToProps(dispatch){
  return {
    fireAppDescirption: (status) => dispatch(displayAppInfo(status))
  }
}


export default connect(mapStateToProps, mapDispatchToProps )(Appinfo)