import * as actionTypes from "../actions/actionTypes"

const initialState = {
    token:null,
    loading:false,
    error:null,
    authenticated:false
}

const AuthReducer = (state  =  initialState , action) => {
    switch(action.type){
        case actionTypes.AUTH_START:
            return{
                ...state,
                loading:true
            }

        case actionTypes.AUTH_FAIL:
            return{
                ...state,
                loading:false,
                error:action.error
            }

        case actionTypes.AUTH_SUCCESS:
            return{
                ...state,
                loading:false,
                token:action.token,
                error:null,
                authenticated:true
            }
        
        case actionTypes.CLEAR_ERRORS:
            return{
                ...state,
                error:null
            } 

        case actionTypes.AUTH_LOGOUT:
            return{
                ...state,
                token:null,
                error:null,
                authenticated:false
            }

        
            
        default : return state;
    }

}

export default AuthReducer;