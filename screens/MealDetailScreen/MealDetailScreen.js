import React, {useEffect} from 'react'
import {View , Text,  Image , ScrollView} from "react-native"
import {styles} from "./styles"

const CategoriesScreen = (props) => {

  const item = props.route.params.data
  useEffect(() => {
    props.navigation.setOptions({
        title:props.route.params.data.title
    })
    
}, [])
    return (
      <View style={styles.screen}>
      <ScrollView  showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow:1}}>
          <Image style={{height:'30%' , width:'100%' , borderRadius:15}}  source={{uri:props.route.params.data.imageUrl}}/>

          <Text style={{marginVertical:10 , fontFamily:'Nunito-bold' , fontSize:16}}>Ingredients</Text>
          <View style={styles.ingredients}>
            {item.ingredients.map((i , index)=>(
              <Text style={styles.ingredients} key={index}>{i}</Text>
            ))}
          </View>
       

          <Text style={{marginVertical:10 , fontFamily:'Nunito-bold' , fontSize:16}}>Steps</Text>
            {
              item.steps.map((s , index)=>(
              <Text style={{...styles.ingredients, marginBottom:5}} key={index}>{index+1} {s}</Text>
              ))
            }

      </ScrollView>
      </View>
    )
}

export default CategoriesScreen
