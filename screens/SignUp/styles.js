import {StyleSheet , Dimensions} from "react-native"
import Colors from "../../consts/color"
export const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop : Dimensions.get('window').height * 0.3,
        alignItems:'center'
    },
    btn:{
        width:'80%',
        alignItems:'center',
        backgroundColor:Colors.primaryColor,
        padding:10,
        borderRadius:10
    },
    header:{
        fontSize:20,
        color:"#777",
        fontFamily:'Nunito-bold',
        marginBottom:20
    }
    
})