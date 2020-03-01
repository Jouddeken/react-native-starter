import React from 'react';
import {
  AppRegistry,
  StatusBar,
  Text,
  View,
} from 'react-native';
import { name as appName } from '../app.json';

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <View style={{
      alignItems: 'center',
      flex: 1,
      height: '100%',
      justifyContent: 'center',
      width: '100%',
    }}
    >
      <Text>{appName}</Text>
    </View>
  </>
);

AppRegistry.registerComponent(appName, () => App);
