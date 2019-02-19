
import {createStackNavigator,createAppContainer} from 'react-navigation';
import MainComponent from './MainComponent';
import DetailComponent from './DetailComponent';
import ThirdComponent from './ThirdComponent';
// import {MainScreen,DetailScreen,ThirdScreen} from './screenNames';

const HomeScreen = createStackNavigator({
  MainScreen:{
    screen:MainComponent,
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
