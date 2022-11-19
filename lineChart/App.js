
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaView,  StatusBar} from 'react-native';

import Routes from './routes/Routes'


export default function App() {
  return <SafeAreaView style={{ flex: 1 }}>
    <StatusBar backgroundColor={'#000'} />
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  </SafeAreaView>
}
