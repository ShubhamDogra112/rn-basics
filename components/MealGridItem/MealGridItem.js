import React from 'react'
import { TouchableOpacity , Text , TouchableNativeFeedback , Platform ,View  , Image} from 'react-native'
import {styles} from './styles'

const CategoryGridTile = (props) => {
    let Wrapper = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >= 21){
        Wrapper = TouchableNativeFeedback;
    }
    return (
        
       <Wrapper background={TouchableNativeFeedback.Ripple("#ffffff")}
         onPress={()=>props.press(props.data)} 
         >
           <View style={styles.container}>
               <Image style={{height:'100%' , width:'100%' , borderRadius:15}}  source={{uri:props.data.imageUrl}}/>
                <View style={styles.mealDetails}>
                  <Text style={styles.text}>{props.data.duration}m</Text>
                  <Text style={styles.text}>{props.data.title}</Text>
                  <Text style={styles.text}>{props.data.complexity}</Text>
                </View>
           </View>
       </Wrapper>
    )
}

export default CategoryGridTile
