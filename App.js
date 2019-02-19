
import React, {Component} from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';
import {createAppContainer, createBottomTabNavigator} from 'react-navigation';
import HomeScreen from './components/HomeComponent';
import SettingScreen from './components/SettingComponent';
import InfoScreen from './components/InfoComponent';

const Screen = createAppContainer(createBottomTabNavigator(
  {
    Home:HomeScreen,
    Info:InfoScreen,
    Setting:SettingScreen
  },
  {
    defaultNavigationOptions:({navigation})=>({
      tabBarIcon:({focused})=>{
        const {routeName} = navigation.state;
        if(routeName ==='Home'){
          iconName = require('./icons/home.png');
        } else if(routeName === 'Setting'){
          iconName = require('./icons/setting.png');
        } else if(routeName == 'Info'){
          iconName =require('./icons/info.png')
        }   
        return (<Image source={iconName} style={{width:20,height:20, tintColor:'red'}}/>);
      }
    }),
    tabBarOptions:{
      activeTintColor:'tomato',
      inactiveTintColor:'gray',
      
      showIcon:true,
      showLabel:true
    },
    swipeEnabled:true,
    animationEnabled:true
  }
));
export default class App extends Component{
  render() {
    return (
      <Screen />
    );
  }
}