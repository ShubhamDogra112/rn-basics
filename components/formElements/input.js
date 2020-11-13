import React from "react"
import {TextInput , View , StyleSheet} from "react-native"
import Error from "../Error/Error"

const Input = props =>{
    return(
    <View style={styles.input_wrapper}>
        <TextInput
        style={styles.input}
          onChangeText={props.change}
          onBlur={props.blur}
          value={props.value}
          placeholder={props.placeholder}
        />
        {props.touched && props.error ? <Error error={props.error}/> : null}
    </View>
        
    )
}

const styles = StyleSheet.create({
  input:{
    borderRadius:10,
    padding:5,
    marginBottom:10,
    paddingLeft:15,
    backgroundColor:"#dcdcdc"

    
  },
  input_wrapper:{
    width:'80%',
    position:'relative',


  }
})

export default Input