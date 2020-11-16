import React from "react"
import {View} from 'react-native' 
import Animated, { Easing } from 'react-native-reanimated';

const {
  Clock,
  Value,
  set,
  cond,
  eq,
  startClock,
  useCode,
  interpolate,
  timing,
  block,
  not,
  spring,
  SpringUtils
} = Animated;

function runSpring(clock) {
  const state = {
    finished: new Value(0),
    velocity: new Value(0),
    position: new Value(0),
    time: new Value(0),
  };
  const config = {
    ...SpringUtils.makeDefaultConfig(),
    toValue: new Value(1),
    // damping: 5,
    mass: 2,
    speed:5,
    // tension:20,
    stiffness: 10,
    // overshootClamping: false,
    // restSpeedThreshold: 1,
    // restDisplacementThreshold: 1,
  };

  return block([
    spring(clock, state, config),
    cond(
      eq(state.finished, 1),
      [
  
        set(state.finished, 0),
        set(state.velocity, 0),
        set(state.time, 0),
        set(state.position , 0)
        // set(config.toValue , not(state.position))
      //  for( 0-1 , 1-0)
      ]
    ),
    state.position,
  ]);
}

function runTiming(clock) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration: 3000,
    toValue: new Value(1),
    // easing: Easing.inOut(Easing.ease),
    easing:Easing.bezier(0.7, 0, 0.84, 0)
  };

  return block([
    timing(clock, state, config),
    cond(
      eq(state.finished, 1),
      [
  
        set(state.finished, 0),
        set(state.time, 0),
        set(state.frameTime, 0),
        set(state.position , 0)
        // set(config.toValue , not(state.position))
      //  for( 0-1 , 1-0)
      ]
    ),
    state.position,
  ]);
}

const AnimatedBox  = ()=> {

  // we create a clock node
 let  clock = new Clock();
 let animatedValue = new Value(0);

 useCode(() => block([startClock(clock),set(animatedValue, runSpring(clock))]), []);
 let translatex = interpolate(animatedValue ,{
   inputRange: [0, 1],
   outputRange: [-200, 200],
 });

 let scale = interpolate(animatedValue ,{
  inputRange: [0, 1],
  outputRange: [1 ,2],
});
  
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Animated.View
          style={{height:100,width:100,backgroundColor:"red",transform:[{translateX:translatex},{scale:scale}]}}
        />
      </View>
    );

}

export default AnimatedBox