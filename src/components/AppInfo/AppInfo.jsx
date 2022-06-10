import s from '../AppInfo/AppInfo.module.css'
import AppDescription from './AppDescription'
import { connect } from "react-redux"
import { displayAppInfo } from '../../redux/actions/actions'
import classNames  from 'classnames' // this is a JS utility for conditionally joining the classes for animating the AppDescription container. 

function Appinfo(props){
 
  return (
    <div>
      <div id={s.appTitle_container}>
        <h1> Worldwide Weather App </h1>
        <h3 className={s.displayInfoBtn}>
          <span
            onClick={() => props.fireAppDescirption(!props.state.appDescription)}
          >More about this web app</span> </h3>
        { props.state.appDescription ? (
          <AppDescription
          fireAppDescirption = {props.fireAppDescirption}
          />
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