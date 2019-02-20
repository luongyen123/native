
import {createStackNavigator} from 'react-navigation';
import MainComponent from './MainComponent';
import DetailComponent from './DetailComponent';
import ThirdComponent from './ThirdComponent';
// import {MainScreen,DetailScreen,ThirdScreen} from './screenNames';

const SettingScreen = createStackNavigator({
  MainScreen:{
    screen:MainComponent,
    navigationOptions:{
      headerTitle:'Setting'
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
 export default SettingScreen;
