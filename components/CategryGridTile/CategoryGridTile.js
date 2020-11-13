import React from 'react'
import { TouchableOpacity , Text , TouchableNativeFeedback , Platform ,View } from 'react-native'
import {styles} from './styles'

const CategoryGridTile = (props) => {
    let Wrapper = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >= 21){
        Wrapper = TouchableNativeFeedback;
    }
    return (
        
       <Wrapper background={TouchableNativeFeedback.Ripple("#fefefe")}  onPress={props.press} >
           <View style={{...styles.gridItem,backgroundColor:props.data.color}}>
                <Text style={styles.text}>{props.data.title}</Text>
           </View>
       </Wrapper>
    )
}

export default CategoryGridTile
