import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {UserContextProvider} from './contexts/UserContext';
import {RootStackNav} from './navigation';

export const App = () => {
  return (
    <GestureHandlerRootView style={StyleSheet.absoluteFill}>
      <StatusBar style="auto" />
      <UserContextProvider>
        <NavigationContainer>
          <RootStackNav />
        </NavigationContainer>
      </UserContextProvider>
    </GestureHandlerRootView>
  );
};
