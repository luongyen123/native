import React from 'react';
import {Image,Dimensions,StyleSheet,View} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import MainComponent from './MainComponent';
import DetailComponent from './DetailComponent';
import ThirdComponent from './ThirdComponent';
import {deviceWidth,deviceHeight} from './device';
// import {MainScreen,DetailScreen,ThirdScreen} from './screenNames';


const styles = StyleSheet.create({
  logo:{
      width:deviceWidth/(360/103.1),
      height:deviceHeight/(740/26.3),
      resizeMode:'contain'
  },
  search:{
      width:deviceWidth/(360/22),
      height:deviceHeight/(740/22),
      resizeMode:'contain',
      
  },
  chat:{
    width:deviceWidth/(360/27),
    height:deviceHeight/(740/21),
    resizeMode:'contain',
    marginRight:20
  }
});
const HomeScreen = createStackNavigator({
  MainScreen:{
    screen:MainComponent,
    navigationOptions:{
      headerTitle:(<Image source={require('../images/logo_2.png')} style={styles.logo}/>),
      headerRight: (<View style={{flex:1,flexDirection:"row"}}>
          <Image source={require('../icons/chat.png')} style={styles.chat}/>
          <Image source={require('../icons/search.png')} style={styles.search}/>
          

      </View>),
    }
  },
  DetailScreen:{
    screen:DetailComponent,
    navigationOptions:{
      headerTitle:'Detail'
    }
  },
  ThirdScreen:{
    screen:ThirdComponent,
    navigationOptions:{
      headerTitle:'Third'
    }
  }
},
{
  initialRouteName:'MainScreen'
}
);
 export default HomeScreen;
 
