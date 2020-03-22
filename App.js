import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStackScreens, AppStackScreens} from "./src/navigation"

export default function App() {
  const isAuthenticated = true;
  return (
    <NavigationContainer>
      {isAuthenticated ? AppStackScreens() : AuthStackScreens()}
    </NavigationContainer>
  );
}
