import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Route from './router/Route';

export default function App() {
  return (
    <NavigationContainer>
      <Route />
    </NavigationContainer>
  );
}
