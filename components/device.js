import {Dimensions,StyleSheet} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export{
    deviceHeight,
    deviceWidth
}