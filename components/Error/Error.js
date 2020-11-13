import React from 'react'
import {View , Text , StyleSheet} from "react-native"

const ErrorComp = (props) => {
    return (

        <View style={styles.error_box}>
            <Text style={{color:'red' , fontSize:14}}>{props.error}</Text>
        </View>
            
        
    )
}

const styles = StyleSheet.create({
    error_box:{
        bottom:0,
        marginBottom:10,
        marginLeft:12,
    }
})

export default ErrorComp
