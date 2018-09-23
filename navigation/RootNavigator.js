import React from 'react';
import { createStackNavigator } from 'react-navigation';
import TabNavigator from './TabNavigator';

const RootStackNavigator = createStackNavigator(
  {
    Main: {
      screen: TabNavigator,
    },
  },
  {
  //headerMode: 'none',
  navigationOptions: {
    //headerVisible: false,
    title: 'Header',
    headerStyle: {
      backgroundColor: 'gray',
      height: 25
    },
    headerTitleStyle: {
      color: 'white',
      fontWeight: 'normal'
    }
  }
 }
);

export default class RootNavigator extends React.Component {

  render() {
    return <RootStackNavigator/>;
  }
}
