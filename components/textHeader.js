// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//Make a Component / Declaration of component
const TextHeader = (props) => {
    return (
        <View style={{backgroundColor:'#0d66a2',height:25, justifyContent:'center', padding:8}}>
            <Text style={{fontSize:15, fontWeight:'500', color:'#FFFFFF'}}>{props.text}</Text>
        </View>
    );
  };

//Make the component available to other parts of the app
export default TextHeader;