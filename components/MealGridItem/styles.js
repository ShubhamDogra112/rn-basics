import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
      text:{
        fontSize:14,
        fontFamily:'Nunito-bold',
        color:"#212121"
      },
      container:{
          flex:1,
          height:300,
          margin:10,
          borderRadius:15,
          position:'relative',
          overflow:'hidden'
      },
      mealDetails:{
          position:'absolute',
          backgroundColor:"#eee",
          borderBottomLeftRadius:15,
          borderBottomRightRadius:15,
          width:'100%',
          bottom:0,
          padding:10,
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between'
          
      }
})