import React , {Component , useEffect} from "react";
import { View, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable"
import {LinearGradient} from "expo-linear-gradient"

class LGradient extends Component{
    render(){
        return<LinearGradient {...this.props} />
    }
}

const AnimatedLG = Animatable.createAnimatableComponent(LGradient)

const Animation = () => {

    const translate  = {
         from :{
             translateX:-200
         },
         to:{
             translateX:200
         }
    }

 

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" , backgroundColor:"white" }}>
      <Animatable.View
        style={{
          backgroundColor: "#ec2613",
          height: 200,
          width: 200,
          borderRadius: 100,
          overflow:'hidden'
        }}
      >
        <AnimatedLG
        animation={translate}   
        duration={1000}
        colors={['transparent' , '#f69991' ,'transparent']}
        start={{x:0 , y:0}}
        end={{x:1, y:0}}
        iterationCount="infinite"
          style={{
            ...StyleSheet.absoluteFill,
            borderRadius: 100,
            zIndex:1
            // transform: [{ translateX: translatex }],
          }}
        ></AnimatedLG>
      </Animatable.View>        
    </View>
  );
};

export default Animation;
