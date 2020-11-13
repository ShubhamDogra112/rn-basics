import React , {useEffect} from 'react'
import {View , Text} from "react-native"
import {styles} from "./styles"
import {MEALS} from "../../data/dummydata"
import { FlatList } from 'react-native-gesture-handler'
import GridItem from "../../components/MealGridItem/MealGridItem"

const CategoryMealScreen = (props) => {

    useEffect(() => {
        props.navigation.setOptions({
            title:props.route.params.title
        })
        
    }, [])

    const press = (data)=> {
        props.navigation.navigate("MealDetail",{
            data:data
        })
    }

    const id = props.route.params.id;
    const displayMeals = MEALS.filter(m => m.categoryId.indexOf(id) >= 0);

    const ListItem = itemdata => {
        return <GridItem press = {press} data={itemdata.item}/>
    }
    return (
        <View style={styles.screen}>
        <FlatList data={displayMeals}
            keyExtractor={(item , index) => item.id}
            renderItem={ListItem}
        />
    </View>
    )
}

export default CategoryMealScreen
