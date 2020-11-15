import React from "react";
import { View, StyleSheet } from "react-native";
import Animated , {Easing, useValue , set} from "react-native-reanimated";

const Animation = () => {

  const {
    Clock,
    useCode,
    block,
    startClock,
    Value,
    cond,
    eq,
    interpolate,
    timing,
    debug
  } = Animated

  const runTiming = (clock , animatedValue) => {
    alert(animatedValue)
    const state = {
      finished: new Value(0),
      position: new Value(0),
      frameTime: new Value(0),
      time: new Value(0),
    };

    const config = {
      toValue: new Value(1),
      durtion: 1000,
      easing: Easing.inOut(Easing.ease),
    };

    return block([
      timing(clock, state, config),
      cond(eq(state.finished, 1), [
        set(state.finished, 0),
        set(state.positon, 0),
        set(state.frameTime, 0),
        set(time, 0),
      ]),
      state.position,
    ]);
  };


  const clock = new Clock();
  const animatedValue = new Value(0);
  
  useCode(() => block([startClock(clock),set(animatedValue, runTiming(clock , animatedValue))]), []);
    const translatex = interpolate(animatedValue ,{
      inputRange: [0, 1],
      outputRange: [-200, 200],
    });


  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          backgroundColor: "#ccc",
          height: 200,
          width: 200,
          borderRadius: 100,
        }}
      >
        <Animated.View
          style={{
            ...StyleSheet.absoluteFill,
            backgroundColor: "fefefe",
            borderRadius: 100,
            // transform: [{ translateX: translatex }],
          }}
        ></Animated.View>
      </View>
    </View>
  );
};

export default Animation;
