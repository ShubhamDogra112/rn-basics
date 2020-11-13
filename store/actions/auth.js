import * as actionTypes from "./actionTypes";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage'
let timer;

const auth_start = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const clear_errors = () => {
  return {
    type: actionTypes.CLEAR_ERRORS,
  };
};


export const auth_logout =  () => {
  removeDetails()
  removeTimer();
  return{
    type:actionTypes.AUTH_LOGOUT
  }
};

const removeTimer = () => {
  if(timer){
    clearTimeout(timer);
  }
}

const removeDetails = async ()=>{
   await AsyncStorage.removeItem('token')
  await AsyncStorage.removeItem('expirationDate')
}

const auth_time_check = (time) => {
  return (dispatch) => {
    timer= setTimeout(() => {
      dispatch(auth_logout());
    }, time);
  };
};

const auth_success = (token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
  };
};

const auth_fail = (err) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: err,
  };
};

export const auth = (email, password, loggingIn) => {
  return (dispatch) => {
    dispatch(auth_start());
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDoKswjYrOPpByxmIG6C18_waavQFIgGig";
    if (loggingIn === true) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDoKswjYrOPpByxmIG6C18_waavQFIgGig";
    }

    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    axios
      .post(url, authData)
      .then( async (res) => {
        let token = res.data.idToken;
        let date = new Date(
          new Date().getTime() + res.data.expiresIn * 1000
    );
      

      
         await AsyncStorage.setItem('token' , token)
        await AsyncStorage.setItem('expirationDate' , JSON.stringify(date))
    
    

        dispatch(auth_success(token))
        dispatch(auth_time_check(3600 * 1000));
      })
      .catch((err) => {
        let error = err.response.data.error.message;
        alert(error);
        dispatch(auth_fail(error));
      });
  };
};



export const authCheck = () => {
  return async (dispatch) => {
    
      
    const token = await AsyncStorage.getItem("token");
    let expirationDate = new Date(JSON.parse(await AsyncStorage.getItem("expirationDate")));
      if (!token) {
        dispatch(auth_logout());
      }
       else if (expirationDate > new Date()) {
        dispatch(auth_success(token));
        dispatch(
          auth_time_check(
            (expirationDate.getTime() - new Date().getTime())
          )
          );
      } else {
        dispatch(auth_logout());
      }
  }};
