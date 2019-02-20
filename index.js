/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import Login from './components/LoginComponent';
import Splash from './components/SplashComponent';
import App from './App';
import {name as appName} from './app.json';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {currentScreen: 'Splash'};
        setTimeout(()=>{
            this.setState({currentScreen:'Login'});
        },3000)
    }
    render(){
        const {currentScreen} = this.state
        let mainScreen = currentScreen ==='Splash' ? <Splash /> : <Login />;
        return mainScreen;
    }
}
AppRegistry.registerComponent(appName, () => Main);
