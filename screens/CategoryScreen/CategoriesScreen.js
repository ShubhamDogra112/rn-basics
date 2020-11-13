import React from "react";
import { FlatList,View} from "react-native";
import { CATEGORIES } from "../../data/dummydata";
import GridItem from "../../components/CategryGridTile/CategoryGridTile"
import { AsyncStorage } from "react-native";

const CategoriesScreen = (props) => {

  const itemPressed= (itemData) => {
    props.navigation.navigate(
      "CategoryMealScreen",
      {
        title: itemData.item.title,
        id:itemData.item.id
      },
    )
  }
  const renderGridItem = (itemData) => {
    return (
      <GridItem press={() =>itemPressed(itemData)} data={itemData.item} />
    );
  };

  return (
    <React.Fragment>
      <View style={{height:10}}></View>
         <FlatList
      numColumns={2}
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
    </React.Fragment>
   
  );
};

export default CategoriesScreen;
