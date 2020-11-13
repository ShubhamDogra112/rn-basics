import React , {useState , useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from "expo-font"
import {AppLoading} from "expo"
import StartScreen from "./startScreen"
import { Provider } from "react-redux";
import {store} from "./store/store"



const fetch_font = async ()=>{
  await Font.loadAsync({
    'Nunito':require("./assets/fonts/nunito/Nunito-Regular.ttf"),
    'Nunito-bold':require("./assets/fonts/nunito/Nunito-Bold.ttf"),
    'Nunito-semiBold':require("./assets/fonts/nunito/Nunito-SemiBold.ttf")
  })
}

const App = (props) => {


  const[fontLoaded , setFontLoaded] = useState(false);
  if(!fontLoaded){
    return <AppLoading startAsync={fetch_font}
    onFinish = {()=>setFontLoaded(true)}
    onError = {(err)=>console.log(err)}
    />
  }
  return (
    <Provider store = {store}>
        <View style={styles.container}>
          <StartScreen/>
        </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  text:{
    fontFamily:"Nunito-bold",
    fontSize:25
  }
});



export default (App);


