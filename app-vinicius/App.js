import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './src/HomeScreen'
import SobreMim from './src/SobreMim'
import AlarmClock from './src/AlarmClock'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}


var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  SobreMim:SobreMim,
  AlarmClock:AlarmClock
})

const AppContainer = createAppContainer(AppNavigator)