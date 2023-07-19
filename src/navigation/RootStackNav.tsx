import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Welcome, Instructions, Login, TodoBoard} from 'screens';

const nav = createStackNavigator();
export const RootStackNav: React.FC = () => {
  return (
    <nav.Navigator initialRouteName={Welcome.name}>
      <nav.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerTitle: 'Welcome',
        }} />
      <nav.Screen
        name="Login"
        component={Login}
        options={{
          headerTitle: 'ログイン',
        }}
      />
      <nav.Screen
        name="TodoBoard"
        component={TodoBoard}
        options={{
          headerTitle: 'Todo',
        }}
      />
      <nav.Screen name="Instructions" component={Instructions} />
    </nav.Navigator>
  );
};
