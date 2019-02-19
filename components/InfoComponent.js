
import {createStackNavigator,createAppContainer} from 'react-navigation';
import ThirdComponent from './ThirdComponent';
// import {MainScreen,DetailScreen,ThirdScreen} from './screenNames';

const InfoScreen = createStackNavigator({
  ThirdScreen:{
    screen:ThirdComponent,
    navigationOptions:{
      headerTitle:'Third'
    }
  }
},

);
 export default InfoScreen;
