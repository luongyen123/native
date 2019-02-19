import React, {Component} from 'react';
import {
    View,Text
} from 'react-native';

export default class DetailComponent extends Component{
    render(){
        // console.log(`this.props.navigation = ${JSON.stringify(this.props.navigation)}`);
        let fromMain = this.props.navigation.state.params;
        return(
            <View style={{
                flex:1,
                backgroundColor:'dodgerblue',
                alignItems:'center',
                justifyContent:'center'
                }}>
                <Text style={{fontWeight:'bold',fontSize:22,color:'white'}}>
                    Name :{fromMain.name}</Text>
                <Text style={{fontWeight:'bold',fontSize:22,color:'white'}}> Release: {fromMain.release}
                </Text>
            </View>
        );
    }
}