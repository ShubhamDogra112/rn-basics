import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import AuthReducer from "./reducers/auth"

const logger = (store) => {
    return (next) => {
      return (action) => {
        next(action);
      };
    };
  };
  
  let composeEnhancers = compose

  if(__DEV__){
    composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
  }
    
   
  
  const rootReducer = combineReducers({
    auth:AuthReducer
  });
  
  export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(logger, thunk))
  );
  