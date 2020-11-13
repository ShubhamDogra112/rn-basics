import React , {useEffect} from 'react'
import {auth_logout} from "../store/actions/index"
import {connect} from 'react-redux'

const Logout = (props) => {

    useEffect(()=>{
        props.Logout()
    },[])

    return (<></>
    )
}

const mapDispatchToProps = dispatch => {
    return{
        Logout : ()=>dispatch(auth_logout())
    }
}

export default connect(null , mapDispatchToProps)(Logout);
