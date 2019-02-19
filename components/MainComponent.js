import React, {Component} from 'react';
import {
    View,Text
} from 'react-native';
import {DetailScreen,ThirdScreen} from '../screenNames';
import Button from 'react-native-button';
import {Provider} from 'react-redux';
import store from '../store';
import ContactForm from './ContactForm';

export default class MainComponent extends Component{
    render(){
        const {navigation} = this.props;
        let dataSentoDetail={
            name:"Star Wars",
            release:1977
        };
        return(
            
            <View style={{
                flex:1,
                alignItems:'center',
                justifyContent:'center'
                }}>
                <Provider store={store}>
                    <ContactForm />
                </Provider>
                <Button 
                    containerStyle={{padding:10,width:200,height:45,borderRadius:10,backgroundColor:'darkviolet'}}
                    style={{fontSize:18,color:'white'}}
                    onPress={()=>{
                        navigation.navigate(DetailScreen,dataSentoDetail)
                    }}
                >
                    Detail
                </Button>
                <Button 
                    containerStyle={{padding:10,margin:10,width:200,height:45,borderRadius:10,backgroundColor:'darkviolet'}}
                    style={{fontSize:18,color:'white'}}
                    onPress={()=>{
                        navigation.navigate(ThirdScreen)
                    }}
                >
                    ThirdScreen
                </Button>
            </View>
        );
    }
}