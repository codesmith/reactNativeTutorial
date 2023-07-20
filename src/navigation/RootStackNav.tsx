import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {AuthedStackNav} from './AuthedStackNav';
import {UnauthedStackNav} from './UnauthedStackNav';
import {useUserContext} from '../contexts/UserContext';

const rootNav = createStackNavigator();
export const RootStackNav: React.FC = () => {
  const userContext = useUserContext();
  return (
    <rootNav.Navigator screenOptions={{headerShown: false}}>
      {userContext.isLoggedIn ? (
        <rootNav.Screen name="Authed" component={AuthedStackNav} />
      ) : (
        <rootNav.Screen name="Unauthed" component={UnauthedStackNav} />
      )}
    </rootNav.Navigator>
  );
};
