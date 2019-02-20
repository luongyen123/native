import React, {Component} from 'react';
import {
    View,Text,Image,StyleSheet,Dimensions,TouchableWithoutFeedback,Keyboard,KeyboardAvoidingView
} from 'react-native';
import {Provider} from 'react-redux';
import store from '../store';
import ContactForm from './ContactForm';
import {deviceHeight,deviceWidth} from './device';


export default class Login extends Component{
    render(){
        
        return(
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Image source={require('../images/logo_2.png')} style={styles.logo}/>
                    <Provider store={store}>
                        <ContactForm />
                    </Provider>
                </View>
            </TouchableWithoutFeedback>    
            
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'white',
        flexDirection:'column',
        paddingTop:deviceHeight/(740/98.9)
        
    },
    logo:{
        width:deviceWidth/(360/192.6),
        height:deviceHeight/(740/49.1),
        resizeMode:'contain'
    },
    
})