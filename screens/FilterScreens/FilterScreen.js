import React from "react";
import { styles } from "./styles";
import { View, Text, Dimensions, Image, ScrollView } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Colors from "../../consts/color";
import {Ionicons} from "@expo/vector-icons"


const FirstRoute = () => (
  <View style={styles.scene}>
    <Image
      style={{ height: 200, width: "98%", borderRadius: 5 }}
      source={{
        uri:
          "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
      }}
    />
  </View>
);

const SecondRoute = () => (
  <View style={styles.scene}>
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Image
        style={{ height: 200, width: "98%", borderRadius: 5 }}
        source={{
          uri:
            "https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg",
        }}
      />
    </ScrollView>
  </View>
);

const FilterScreen  = (props)=> {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    // { key: "first", title: 'Pic 1'},
    { key: "first", icon:'md-list'},
    { key: "second", icon:'ios-star'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderIcon = ({route}) => {
    
    return <Ionicons name={route.icon} size={23} color='white'/>
  }
  const renderTab = (props) => (
    <View style={{ display: "flex", alignItems: "center", overflow: "hidden" }}>
      <TabBar
        {...props}  
        indicatorStyle={{ backgroundColor: "#ededed", height: 4 }}
        labelStyle={{fontFamily:'Nunito-semiBold'}}
        renderIcon={renderIcon}
        // inactiveColor="#212121"
        // scrollEnabled={false}
        // pressColor="red" ripple color
        style={{
          backgroundColor: Colors.secondaryColor,
          width: "98%",
          borderRadius: 5,
          marginTop: 10,
          marginBottom: 10,
          overflow: "hidden",
        }}
      />
    </View>
  );
  return (
    <React.Fragment>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View
          style={{
            backgroundColor: "#dadbe3",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap",
            marginTop: 20,
          }}
        >
          <Image
            style={{ height: 200, width: "48%" }}
            source={{
              uri:
                "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
            }}
          />
          <Image
            style={{ height: 200, width: "48%" }}
            source={{
              uri:
                "https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg",
            }}
          />
        </View>
        

        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          swipeVelocityImpact={0.4}
          renderTabBar={renderTab}
        />
      </View>
    </React.Fragment>
  );
}



export default (FilterScreen);
