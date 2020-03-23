import * as React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStackScreens, AppStackScreens} from './src/navigation';

export default function App() {
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  return (
    <NavigationContainer>
      {isAuthenticated ? AppStackScreens() : AuthStackScreens()}
    </NavigationContainer>
  );
}
