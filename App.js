
import React, {Component} from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';
import {createAppContainer, createBottomTabNavigator} from 'react-navigation';
import HomeScreen from './components/HomeComponent';
import SettingScreen from './components/SettingComponent';
import InfoScreen from './components/InfoComponent';
import TodoScreen from './components/TotoList';

const Screen = createAppContainer(createBottomTabNavigator(
  {
    
    Home:HomeScreen,
    Info:InfoScreen,
    TodoList:TodoScreen,
  },
  {
    defaultNavigationOptions:({navigation})=>({
      tabBarIcon:({tintColor})=>{
        const {routeName} = navigation.state;
        if(routeName ==='Home'){
          iconName = (<Image source={require('./icons/home.png')} style={{width:20,height:20, tintColor:tintColor}}/>);         
        } else if(routeName === 'TodoList'){

          iconName = (<Image source={require('./icons/hashtag.png')} style={{width:20,height:20, tintColor:tintColor}}/>);
        } else if(routeName === 'Info'){
          // iconName =require('./icons/info.png')
          iconName = (<Image source={require('./icons/hashtag.png')} style={{width:20,height:20, tintColor:tintColor}}/>);
        }   
        return iconName;
      },
    }),
    tabBarOptions:{
      activeTintColor:'#1f93f8',
      inactiveTintColor:'gray',
      showLabel:false,
      showIcon:true
    },
    swipeEnabled:true,
    animationEnabled:true,
    
  }
));
export default class App extends Component{
  render() {
    return (
      <Screen />
    );
  }
}