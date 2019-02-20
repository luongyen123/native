import React, {Component} from 'react';
import {
    View,Text
} from 'react-native';

export default class TodoScreen extends Component{
    render(){
        return(
            <View style={{
                flex:1,
                backgroundColor:'dodgerblue',
                alignItems:'center',
                justifyContent:'center'
                }}>
                <Text style={{fontWeight:'bold',fontSize:22,color:'white'}}>
                  TodoScreen
                </Text>
            </View>
        );
    }
}