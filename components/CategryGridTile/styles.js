import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        borderRadius:15,
        marginVertical:10,
        marginHorizontal:10,
        height:150,
        elevation:7,
        overflow:"hidden",
        shadowColor:'#ccc',
        shadowRadius:5,
        shadowOffset:{width:0,height:3},
        shadowOpacity:0.3

      },
      text:{
        fontSize:20,
        fontFamily:'Nunito-bold',
        color:"#fefefe"
      },
})