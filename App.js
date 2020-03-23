import * as React from 'react';
import {useSelector} from 'react-redux';
import {MainAppNavigation} from './src/navigation';

export default function App() {
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  return MainAppNavigation(isAuthenticated);
}
