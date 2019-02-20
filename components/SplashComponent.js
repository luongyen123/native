import React, {Component} from 'react';
import {View,Text,StyleSheet, ImageBackground,Image,Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
export default class Splash extends Component{
    render(){
        return(

        <ImageBackground source={require('../images/background.png')} style={styles.container}>
            <Image source={require('../images/logo.png')} style={styles.logo}/>
        </ImageBackground>           
            
        );
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    logo:{
        width:deviceWidth/(360/160.8),
        height:deviceHeight/(740/175.5),
        resizeMode:'contain'
    }
});